import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog18.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werewer/edit`} className='btn sm primary'> Edit </Link>
            <Link to={`/posts/werewer/delete`} className='btn sm danger'> Delete </Link>
          </div>
        </div>
        <h1> This is the post title</h1>
        <div className="post-detail__thumbnal">
          <img src={Thumbnail} alt='' />
        </div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora placeat quae ad, cumque unde necessitatibus quo accusamus magnam explicabo ab quisquam fugit doloremque voluptatibus veniam ducimus qui dolorem repellat nemo sequi vero laudantium repellendus. Doloribus vitae at et aliquid quam officiis quae tempore recusandae vero animi veniam explicabo ipsa impedit ea, officia nesciunt similique molestiae possimus quo autem, non facilis nam. Perferendis, laboriosam expedita maxime neque beatae, impedit dicta, culpa facilis esse eum placeat dignissimos deserunt eligendi! Corrupti optio est, dolores aliquid et veritatis itaque facilis ad inventore laudantium ut atque nesciunt sunt amet qui beatae ipsa, ex, velit possimus voluptatibus perspiciatis. Excepturi provident quas voluptatem aliquam consequatur quaerat quos accusantium ad! Odio consequatur, eaque iure corrupti laudantium voluptas nulla repudiandae ipsa sed delectus possimus ab molestiae, repellendus autem itaque ducimus praesentium deserunt ut, totam quos! Sapiente commodi magni quasi optio fugiat tenetur rem hic dolore ex, similique eos nihil nostrum rerum consequatur temporibus ducimus corrupti repellat sunt odio explicabo eum excepturi quas dolor! Architecto alias voluptates vitae aperiam neque sit quam sed impedit. Sequi accusantium maiores est sint pariatur nemo, voluptate iure nisi magnam distinctio asperiores perferendis amet, qui ipsum odio ut tempora aperiam. Illum inventore ad molestias.</p>
      </div>
    </section>
  )
}

export default PostDetail
