import axios from "axios"

/** Base URL to Make requests to the Movie DataBase */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance

// Example
// instance.get("/foo-bar")
// https://api.themoviedb.org/3/foo-bar