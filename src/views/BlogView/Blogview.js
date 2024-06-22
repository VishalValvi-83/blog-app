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
        <div class="blog-header">
          <div class="title-area clearfix">
            <span class="detail-publish-author">By: <strong>{selectedBlog.author.name}</strong></span>
          </div>
          <h1>{selectedBlog.title}</h1>
          <div class="share-n-tag-wrap clearfix">
            <figure class="blog-img">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </figure>
          </div>
        </div>
        <div class="text parbase">
          <p>{selectedBlog.content}</p>
          <p>{selectedBlog.detail.para1}</p>
          <p>{selectedBlog.detail.para2}</p>
          <p>{selectedBlog.detail.para3}</p>
          <p>{selectedBlog.detail.para4}</p>
          <p>{selectedBlog.detail.para5}</p>
        </div>
        <div>
          <div class="tag-outer-wrap">
            <a href="/content/sih/en/bloglist.html?tag=india" class="tag blue">India</a>
          </div>
        </div>
        <div className="bottom-share-wrap">
          <strong> Share: </strong>
          <ul class="bottom-share-list" >
            <li class="share-link">
              <a class="facebook" href="/" >
                <img  src={FacebookIcon} alt="facebook" title="facebook" />
              </a>
            </li>
            <li class="share-link">
              <a class="linkedin" href="/" >
                <img  src={LinkedInIcon} alt="linkedin" title="linkedin" />
              </a>
            </li>
            <li class="share-link">
              <a class="twitter" href="/" >
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