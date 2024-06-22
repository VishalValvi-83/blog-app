import './BlogCard.css';
import Clock from './update.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ blogs }) => {
  if (!blogs) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="side-cards">
      <h3 className="logo-title">Top Blogs</h3>
      <ul className="list-unstyled latest-bloglist">
        {blogs.slice(0, 4).map((blog, index) => (
          <li key={index}>
            <Link to={`/blog/${blog.id}`}>
              <span className="blog-date">
                <img src={Clock} alt="" />
                {blog.date}
              </span>
              <p>{blog.title}</p>
              <span className="author-details">
                By : <span className="author-name">{blog.author.name.substring(0, 22)}...</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;
