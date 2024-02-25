import "./index.css"
const ProfileDetails = () =>(
    <div className="profile-details-container">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="profile-pic"/>
        <div className="profile-details">
            <h1 className="user-name">Saswith</h1>
            <h3 className="about-user">I am trained Developer in MERN Stack, I can help you to build your websites</h3>
            <h3 className="user-mail">Email:sahusaswith@gmail.com</h3>
            <h3 className="user-number">phone:+91 9398672694</h3>
            <h3>Address:Sai Durga Nagar,Palakonda</h3>
            <button className="edit-profile-details">Edit</button>
            <a href = "show-more" className="link-to-show-more" >Show More Details</a>
        </div>

    </div>
)

export default ProfileDetails