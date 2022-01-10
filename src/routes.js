import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/home"
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
const appRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/register" element={<RegisterScreen/>} />
            <Route exact path="/login" element={<LoginScreen/>} />
            <Route exact path="/notes" element={<NotesIndexScreen/>} />
            <Route exact path="/user/edit" element={<UserEditScreen/>} />
        </Routes>
    </BrowserRouter>
)

export default appRoutes
