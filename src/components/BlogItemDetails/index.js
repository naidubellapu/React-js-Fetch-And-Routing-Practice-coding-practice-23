// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formattedData = {
      id: data.id,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      title: data.title,
    }
    this.setState({blogItemData: formattedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemData} = this.state
    const {imageUrl, avatarUrl, author, content, title} = blogItemData

    return (
      <div className="blog-details">
        <h1 className="item-title">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} className="avatar" alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="blog-img" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          //  eslint-disable-next-line react/no-unknown-property
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              className="#00bfff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
