package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func respondWithText(w http.ResponseWriter, code int, payload string) {
	response := []byte(fmt.Sprintf("<pre>%s</pre>", payload))
	w.Header().Set("Content-Type", "text/html; charset=UTF-8")
	w.WriteHeader(code)
	bytes, err := w.Write(response)
	if err != nil {
		log.Printf("writing response failed: %s", err)
	}
	log.Printf("response bytes %d", bytes)
}

func getHealth(w http.ResponseWriter, _ *http.Request) {
	url := fmt.Sprintf("http://%s/health", os.Getenv("APP_PING_PONG_HOST"))
	response, err := http.Get(url)
	if err != nil {
		respondWithText(w, http.StatusInternalServerError, err.Error())
		return
	}
	if response.StatusCode == 200 {
		respondWithText(w, http.StatusOK, "ok")
		return
	} else {
		respondWithText(w, http.StatusInternalServerError, "todo service not responding")
		return
	}
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/health", getHealth).Methods("GET")
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("/var/app/build/static/"))))
	r.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "/var/app/build/index.html")
	})

	port := os.Getenv("APP_PORT")

	server := &http.Server{
		Addr:    fmt.Sprintf("0.0.0.0:%s", port),
		Handler: r,
	}
	log.Printf("server started in port %s", port)
	err := getDailyImage()
	if err != nil {
		log.Printf("getting daily image failed: %s", err)
	}
	log.Fatal(server.ListenAndServe())
}
