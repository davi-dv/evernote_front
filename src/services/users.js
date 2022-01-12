import Api from "./api"

const UsersService = {
    register: (params) => Api.post("/users/register", params),
    login: async (params) => {
        const response = await Api.post("/users/login", params)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem("tokenJWT", response.data.token)
    },
    logout: () => {
        localStorage.removeItem("user", null)
        localStorage.removeItem("tokenJWT", null)
    },
    update: async (params) => {
        const response = await Api.put("/users", params, {
            headers: { "x-access-token": localStorage.getItem("tokenJWT") }
        })
        localStorage.setItem("user", JSON.stringify(response.data))
    },
    updatePassword: async (params) => {
        await Api.put("/users/password", params, {
            headers: { "x-access-token": localStorage.getItem("tokenJWT") }
        })
    },
    delete: async () => {
        await Api.delete("/users", {
            headers: { "x-access-token": localStorage.getItem("tokenJWT") }
        })
        localStorage.removeItem("user", null)
        localStorage.removeItem("tokenJWT", null)
    }
}

export default UsersService
