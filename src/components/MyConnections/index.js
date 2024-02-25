import DashboardHeader from "../DashboardHeader"
import { CgProfile } from "react-icons/cg";

const MyConnections = () =>(
   <>
   <DashboardHeader/>
   <div className="notification-body">
                    <ul className="list-of-notification">
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                        <li className="each-notification">
                            <CgProfile className="notification-icon"/>
                            <h3>User</h3>
                        </li>
                    </ul>
                </div>
   </>
)

export default MyConnections