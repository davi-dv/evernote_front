import Api from "./api"

const NotesService = {
    index: () =>
        Api.get("/notes", {
            headers: { "x-access-token": localStorage.getItem("tokenJWT") }
        })
}
export default NotesService
