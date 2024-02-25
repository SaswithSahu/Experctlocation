import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import "./index.css"
class NewConnection extends Component{
    render(){
        return(
            <div className="new-connections-container">
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input"/>
                    <CiSearch className="search-icon"/>
                </div>
                <ul className="list-of-new-connections">
                    <li className="each-new-connection">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="new-connection-profile"/>
                       <div className="new-connection-details-container">
                        <h1 className="new-connection-name">User-1</h1>
                        <p className="new-connection-role">Role</p>
                       </div>
                       <button className="new-connection-connection-button">Connect</button>
                    </li>
                    <li className="each-new-connection">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="new-connection-profile"/>
                       <div className="new-connection-details-container">
                        <h1 className="new-connection-name">User-1</h1>
                        <p className="new-connection-role">Role</p>
                       </div>
                       <button className="new-connection-connection-button">Connect</button>
                    </li>
                    <li className="each-new-connection">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="new-connection-profile"/>
                       <div className="new-connection-details-container">
                        <h1 className="new-connection-name">User-1</h1>
                        <p className="new-connection-role">Role</p>
                       </div>
                       <button className="new-connection-connection-button">Connect</button>
                    </li>
                    <li className="each-new-connection">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="new-connection-profile"/>
                       <div className="new-connection-details-container">
                        <h1 className="new-connection-name">User-1</h1>
                        <p className="new-connection-role">Role</p>
                       </div>
                       <button className="new-connection-connection-button">Connect</button>
                    </li>
                    <li className="each-new-connection">
                       <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="new-connection-profile"/>
                       <div className="new-connection-details-container">
                        <h1 className="new-connection-name">User-1</h1>
                        <p className="new-connection-role">Role</p>
                       </div>
                       <button className="new-connection-connection-button">Connect</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NewConnection