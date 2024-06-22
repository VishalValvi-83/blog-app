import './BlogCard.css'

function BlogCard({ title, image, content, author, date, category }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card">
        <div class="img-wrap">
          <figure>
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className='blog-body'>
          <h2 className='blog-title'>{title}</h2>
          <p className='blog-content'>{content}</p>
          <p className='blog-author'>By <strong>{author.name}</strong></p>
        </div>
      </div>
    </div>
  )
}

const Sidebar = ({ blogs }) => {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-title">Top Blogs</h2>
      <ul className="sidebar-list">
        {blogs.slice(0, 4).map((blog, index) => (
          <li key={index} className="sidebar-item">
            <img src={blog.image} alt={blog.title} className="sidebar-image" />
            <div className="sidebar-content">
              <h3 className="sidebar-blog-title">{blog.title}</h3>
              <p className="sidebar-blog-author">By {blog.author.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Sidebar }
export default BlogCard