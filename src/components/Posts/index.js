
import "./index.css"
const Post = () =>(
    <div className="post-container">
        <textarea cols={60} rows={17} placeholder="Enter your Content..."/>
        <input type="file" className="file"/>
        <button className="submit-post">Submit</button>
    </div>
)

export default Post