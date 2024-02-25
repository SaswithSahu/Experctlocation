import { Component } from "react";
import "./index.css"

class ChatBox extends Component{
    render(){
        return(
            <div className="chat-body-container">
                <div className="chat-header">
                <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="chat-box-profile"/>
                <h1 className="chat-box-username">User</h1>
                </div>
                <div className="chat-body">
                    <ul className="messages-list">
                        <li className="send-messages">
                          Hello,This is User1
                        </li>
                        <li className="reply-messages">
                           Hello User1,How are you
                        </li>
                        <li className="send-messages">
                          I am Good,How are you
                        </li>
                        <li className="reply-messages">
                           I am good,Thank You
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChatBox