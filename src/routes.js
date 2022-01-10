import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/home"
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
import PrivateRoute from './components/auth/private_route'
const appRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/register" element={<RegisterScreen/>} />
            <Route exact path="/login" element={<LoginScreen/>} />
            <Route exact path="/notes" element={<PrivateRoute> <NotesIndexScreen/> </PrivateRoute>} />
            <Route exact path="/users/edit" element={<PrivateRoute> <UserEditScreen/> </PrivateRoute>} />
        </Routes>
    </BrowserRouter>
)

export default appRoutes
