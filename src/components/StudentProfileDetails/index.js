import React, {useEffect ,useState,} from 'react';
import { useNavigate } from 'react-router-dom';

import "./index.css"
const StudentProfileDetails = () =>{
    const [formData, setFormData] = useState({
        username: '',
        about: 'Web Developer',
        email: '',
        contact: '123-456-7890',
        address: '123 Street, City',
        profilePic: '',
      });

      const navigate = useNavigate();

    const token = localStorage.getItem("student")
    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const response = await fetch('http://localhost:3000/students/profile', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              mode: 'cors',
            });
            const data = await response.json();
            console.log(data);
      
            setFormData({
              username: data.profile.username,
              email: data.profile.email,
              about: data.profile.about || '',
              contact: data.profile.contact || '',
              address: data.profile.address || '',
            });
          } catch (error) {
            console.error('Error fetching profile data:', error);
          }
        };
      
        if (token) {
          fetchUserProfile();
        }
      }, [token]);

      const moveToEdit = () =>{
            navigate("/student-form")
      }

        return(
            <div className="profile-details-container">
                <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="profile-pic"/>
                <div className="profile-details">
                    <h1 className="user-name">{formData.username}</h1>
                    <h3 className="about-user">{formData.about ? `${formData.about}`:"Add About YourSelf"}</h3>
                    <h3 className="user-mail">{formData.email ? `${formData.email}`:`Add your Email`}</h3>
                    <h3 className="user-number">{formData.contact ? `${formData.contact}`:"Add your contact"}</h3>
                    <h3>{formData.address ? `${formData.address}` : "Add your address"}</h3>
                    <button className="edit-profile-details" onClick={moveToEdit}>Edit</button>
                    <a href = "show-more" className="link-to-show-more" >Show More Details</a>
                </div>

            </div>
        )
 }

export default StudentProfileDetails