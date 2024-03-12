import { useState } from 'react';
import "./index.css";

const Post = () => {
  const [content, setContent] = useState('');


  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("tutor");
  
      const data = {
        content: content,
      };
  
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        console.log('Post successful!');
      } else {
        console.error('Error posting the data:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting the data:', error.message);
    }
  };
  
  return (
    <div className="post-container">
      <h1 style={{ alignSelf: "center" }}>Post Your Ideas</h1>
      <textarea
        cols={30}
        rows={17}
        placeholder="Enter your Content..."
        value={content}
        onChange={handleContentChange}
      />
      <input type="file" className="file"/>
      <button className="submit-post" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Post;
