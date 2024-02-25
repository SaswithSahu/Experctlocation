import { Component } from "react";
//import NewConnection from "../NewConnection";
import { CiSearch } from "react-icons/ci";
import "./index.css"

class MyChats extends Component{
    render(){
        return(
            <div className="my-chats-container">
               <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input"/>
                    <CiSearch className="search-icon"/>
                </div>
                <ul className="list-of-my-chats">
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-1</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-2</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-3</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-4</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-5</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-6</h1>
                    </li>
                    <li className="each-my-chats">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="my-chats-profile"/>
                        <h1 className="new-connection-name">User-7</h1>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MyChats