import { Component } from "react";
//import NewConnection from "../NewConnection";
import { CiSearch } from "react-icons/ci";
import "./index.css"

class MyChats extends Component{

    render(){

        const {connections,openChatBox} = this.props
        console.log(connections)
        return(
            <div className="my-chats-container">
               <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input"/>
                    <CiSearch className="search-icon"/>
                </div>
                <ul className="list-of-my-chats">
                    {connections.map(each =>(
                         <li className="each-my-chats" onClick = {() =>{openChatBox(each)}}>
                         <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                          <h1 className="new-connection-name">{each.username}</h1>
                      </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default MyChats