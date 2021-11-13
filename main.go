package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func main() {

	r := mux.NewRouter()

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
