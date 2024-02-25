import { Component } from "react";
import DashboardHeader from "../DashboardHeader";
import { RiNotificationBadgeFill } from "react-icons/ri"

import "./index.css"

class Notifications extends Component{
    render(){
        return(
            <div>
                <DashboardHeader/>
                <div className="notification-body">
                    <ul className="list-of-notification">
                        <li className="each-notification">
                            <RiNotificationBadgeFill className="notification-icon"/>
                            <h3>Notification-1</h3>
                        </li>
                        <li className="each-notification">
                            <RiNotificationBadgeFill className="notification-icon"/>
                            <h3>Notification-2</h3>
                        </li>
                        <li className="each-notification">
                            <RiNotificationBadgeFill className="notification-icon"/>
                            <h3>Notification-3</h3>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Notifications