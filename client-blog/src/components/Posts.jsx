import React, { useState } from 'react'


import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'



const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      {posts.length >0 ? <div className="container posts__container">
       {
            posts.map(({id, thumbnail, category, title, desc, authorID}) =>
                 <PostItem key={id} postID={id} thumbnail= {thumbnail} title={title}
            desc= {desc} category={category} authorID={authorID} />)
        }
       </div> : <h2 className='center'> No posts founds</h2>}
    </section>
  )
}

export default Posts
