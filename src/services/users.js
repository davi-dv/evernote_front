import Api from "./api"

const UsersService = {
    register: (params) => Api.post("/users/register", params),
    login: async (params) => {
        const response = await Api.post("/users/login", params)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem("tokenJWT", response.data.token)
    },
    logout: () => {
        localStorage.removeItem("user",null)
        localStorage.removeItem("tokenJWT", null)
    }
}

export default UsersService
