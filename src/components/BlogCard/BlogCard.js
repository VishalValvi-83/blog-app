import './BlogCard.css';
import Clock from './update.svg';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, image, content, author, date, category }) => {
  const truncatedTitle = title && title.length > 50  ? title.substring(0, 50) : title;
  const truncatedContent = content && content.length > 70 ? content.substring(0, 70) + '...' : content;
  const truncatedAuthorName = author && author.name ? author.name.substring(0, 22) + '...' : '';

  return (
    <Link className="blog-card-container" to={`/blog/${id}`}>
      <div className="blog-card">
        <div className="img-wrap">
          <img src={image} alt={truncatedTitle} />
        </div>
        <div className="blog-body">
          <h2 className="blog-title">{truncatedTitle}</h2>
          <p className="blog-content">
            {truncatedContent}<span className='read-more'>Read more</span>
          </p>
          <div className="blog-meta">
            <p className="blog-author">
              By : <strong className='author-name'>{truncatedAuthorName}</strong>
            </p>
            <p className="blog-date"> 
              <img src={Clock} alt=''/> {date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;