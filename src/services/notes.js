import Api from "./api"

const NotesService = {
    index: () =>
        Api.get("/notes", {
            headers: { "x-access-token": localStorage.getItem("tokenJWT") }
        }),
    create: () =>
        Api.post(
            "/notes",
            { 'title': "Nova nota", 'body': "Nova nota" },
            {
                headers: { "x-access-token": localStorage.getItem("tokenJWT") }
            }
        ),
        delete: (id) =>
        Api.delete(
            `/notes/${id}`,
            {
                headers: { "x-access-token": localStorage.getItem("tokenJWT") }
            }
        ),
        update: (id,params) =>
        Api.put(
            `/notes/${id}`,params,
            {
                headers: { "x-access-token": localStorage.getItem("tokenJWT") }
            }
        ),
        search: (query) =>
        Api.get(
            `/notes/search?query=${query}`,
            {
                headers: { "x-access-token": localStorage.getItem("tokenJWT") }
            }
        ),
}
export default NotesService
