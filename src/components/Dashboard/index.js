
import DashboardHeader from "../DashboardHeader"
import ProfileDetails from "../ProfileDetails"
import UserOptions from "../UserOptions"

import "./index.css"

const Dashboard = () =>(
   <div>
    <DashboardHeader/>
    <div className="dashboard-body">
    <ProfileDetails/>
    <UserOptions/>
    </div>
    
   </div>
)

export default Dashboard