package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

type App struct {
	Router *mux.Router
}

func (a *App) Initialize() {
	err := godotenv.Load()
	if err != nil {
		log.Print("Reading environment failed.")
	}
	a.Router = mux.NewRouter()
	a.initializeRoutes()
}

func (a *App) initializeRoutes() {
	a.Router.HandleFunc("/todos", a.getTodos).Methods("GET")
	a.Router.HandleFunc("/todos", a.postTodo).Methods("POST")
}

func (a *App) Run() {
	corsOptions := cors.New(cors.Options{
		AllowedOrigins: []string{os.Getenv("ALLOWED_ORIGINS")},
		AllowedMethods: []string{http.MethodGet, http.MethodOptions, http.MethodConnect, http.MethodPost},
		Debug:          true,
	})
	address := fmt.Sprintf("0.0.0.0:%s", os.Getenv("APP_PORT"))
	server := &http.Server{
		Addr:    address,
		Handler: corsOptions.Handler(a.Router),
	}

	log.Printf("starting REST-backend in %s.", address)
	log.Printf("Version: %s , build: %s", Version, Build)
	log.Printf("Allowed origins: %s", os.Getenv("ALLOWED_ORIGINS"))
	log.Fatal(server.ListenAndServe())
}