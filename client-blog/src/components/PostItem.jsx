import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../images/blog1.jpg'
import PostAuthor from './PostAuthor'
const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
const shortDescription = desc.length > 145 ? desc.substr(0, 145)+ '...' : desc;
const shortTitle = title.length > 30 ? title.substr(0, 30)+ '...' : title;
  return (
    <div>
      <article className="post">
        <div className="post__thumbnail">
          <img src={thumbnail} alt={title} />
          {/* <img src={Logo} alt='Navbar Logo' /> */}
        </div>
        <div className="post__content">
          <Link to={`/posts/${postID}`}>
          <h3>{shortTitle}</h3>
          </Link>
          <p>{shortDescription}</p>
          <div className="post__footer">
            <PostAuthor />
            <Link to={`/posts/categories/${category}`} className='btn category'> {category} </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PostItem
