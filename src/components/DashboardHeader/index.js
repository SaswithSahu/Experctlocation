// import {Link} from "react-router-dom"
import "./index.css"
const DashboardHeader =() =>(
    (
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-large-container">
               Your LOgo
              <ul className="nav-menu">
              <a href = "/home" className="nav-menu-item">
                    Home
                </a>
                <a href = "my-connections" className="nav-menu-item">
                    MyConnections
                </a>
                <a href = "chats" className="nav-menu-item">
                  Chats
                </a>
                <a href= "notifications" className="nav-menu-item">
                  Notifications
                </a>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
              <li className="nav-menu-item-mobile">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-img"
                  />
              </li>
              <li className="nav-menu-item-mobile">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-img"
                  />
              </li>
              <li className="nav-menu-item-mobile">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="nav-bar-img"
                  />
              </li>
            </ul>
          </div>
        </nav>
      )

)

export default DashboardHeader