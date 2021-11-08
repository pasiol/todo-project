package main

import (
	"errors"
	"fmt"
	"github.com/gorilla/mux"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

type neuteredFileSystem struct {
	fs http.FileSystem
}

func (nfs neuteredFileSystem) Open(path string) (http.File, error) {
	f, err := nfs.fs.Open(path)
	if err != nil {
		return nil, err
	}
	s, err := f.Stat()
	if s.IsDir() {
		index := filepath.Join(path, "index.html")
		if _, err := nfs.fs.Open(index); err != nil {
			closeErr := f.Close()
			if closeErr != nil {
				return nil, closeErr
			}
			return nil, err
		}
	}
	return f, nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func getDailyImage() error {
	filename := "./static/dailyImage.jpg"
	if fileExists(filename) {
		fi, err := os.Stat(filename)
		if err != nil {
			return err
		}
		difference := time.Now().Sub(fi.ModTime())
		if difference.Hours() < 24 {
			log.Printf("daily image timestamp is less than 24 hours old")
			return nil
		}
		err = os.Remove(filename)
		if err != nil {
			return err
		}
	}
	return getImage(filename)
}

func getImage(fileName string) error {

	response, err := http.Get("https://picsum.photos/1200")
	if err != nil {
		return err
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Printf("closing request failed")
		}
	}(response.Body)
	log.Printf("daily image getting statuscode %d", response.StatusCode)
	if response.StatusCode != 200 {
		return errors.New("get request failed failed")
	}

	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			log.Printf("closing file failed: %s", err)
		}
	}(file)

	_, err = io.Copy(file, response.Body)
	if err != nil {
		return err
	}
	log.Printf("updated daily image succesfully")
	return nil
}

func main() {
	r := mux.NewRouter()

	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(neuteredFileSystem{http.Dir("./static/")})))
	r.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./web/index.html")
	})

	port := os.Getenv("APP_PORT")

	server := &http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: r,
	}
	log.Printf("server started in port %s", port)
	err := getDailyImage()
	if err != nil {
		log.Printf("getting daily image failed: %s", err)
	}
	log.Fatal(server.ListenAndServe())
}
