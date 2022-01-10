import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/home"
import RegisterScren from './screens/auth/register'
import LoginScren from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
const appRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/" element={<RegisterScren/>} />
            <Route exact path="/" element={<LoginScren/>} />
            <Route exact path="/" element={<NotesIndexScreen/>} />
            <Route exact path="/" element={<UserEditScreen/>} />
        </Routes>
    </BrowserRouter>
)

export default appRoutes
