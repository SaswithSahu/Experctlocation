import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Chats from "./components/Chats"
import Notifications from "./components/Notifications"
import RegistrationForm from "./components/Registration"
import LoginForm from "./components/Login"
import MyConnections from "./components/MyConnections"


const App = () =>(
  <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path = "/home" element={<Dashboard/>}/>
    <Route path="/chats"  element={<Chats/>}/>
    <Route path = "/notifications" element = {<Notifications/>}/>
    <Route path="/registration" element = {<RegistrationForm/>}/>
    <Route path="/login" element = {<LoginForm/>}/>
    <Route path="/my-connections" element = {<MyConnections/>}/>
  </Routes>
 </BrowserRouter>

)

export default App