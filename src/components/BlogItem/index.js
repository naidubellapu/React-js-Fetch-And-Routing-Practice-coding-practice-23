// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogData

  return (
    <Link className="item-link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} className="item-image" alt={`item${id}`} />
        <div className="item-info">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
