import "./Blogview.css"
import FacebookIcon from './Icons/facebook.png'
import TwitterIcon from './Icons/twitter.png'
import LinkedInIcon from './Icons/LinkedIn.png';
import { useParams } from "react-router-dom"
import BlogsData from './../../data';
import Sidebar from "./../../components/BlogCard/sidbar"
import './../../views/Home/Home.css'

function Blogview() {

  const { id } = useParams()

  const selectedBlog = BlogsData.find((blogObject) => blogObject.id === id)

  console.log(selectedBlog);
  return (
    <div className="container">
      <div className="blog-detailed-Container">
        <div className="blog-header">
          <div className="title-area">
            <span className="detail-publish-author">By: <strong>{selectedBlog.author.name}</strong></span>
          </div>
          <h1>{selectedBlog.title}</h1>
          <div className="share-n-tag-wrap">
            <figure className="blog-img">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </figure>
          </div>
        </div>
        <div className="text parbase">
          <p>{selectedBlog.content}</p>
          <p>{selectedBlog.detail.para1}</p>
          <p>{selectedBlog.detail.para2}</p>
          <p>{selectedBlog.detail.para3}</p>
          <p>{selectedBlog.detail.para4}</p>
          <p>{selectedBlog.detail.para5}</p>
        </div>
        <div>
          <div className="tag-outer-wrap">
            <a href="/" className="tag">Home Page</a>
          </div>
        </div>
        <div className="bottom-share-wrap">
          <strong> Share: </strong>
          <ul className="bottom-share-list" >
            <li className="share-link">
              <a className="facebook" href="https://www.facebook.com" >
                <img  src={FacebookIcon} alt="facebook" title="facebook" />
              </a>
            </li>
            <li className="share-link">
              <a className="linkedin" href="https://www.linkedin.com/" >
                <img  src={LinkedInIcon} alt="linkedin" title="linkedin" />
              </a>
            </li>
            <li className="share-link">
              <a className="twitter" href="https://x.com/" >
                <img  src={TwitterIcon} alt="twitter" title="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-container">
        <Sidebar blogs={BlogsData} />
      </div>
    </div>
  )
}

export default Blogview