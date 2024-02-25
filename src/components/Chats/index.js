
import { Component } from "react";
import DashboardHeader from "../DashboardHeader";
import ChatBox from "../ChatBox";
import MyChats from "../MyChats";
import "./index.css"
class Chats extends Component{
    render(){
        return(
            <div>
                <DashboardHeader/>
                <div className="chats-body">
                <MyChats/>
                <ChatBox/>
                </div>
            </div>
        )
    }
}

export default Chats