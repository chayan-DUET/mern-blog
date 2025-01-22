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
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae delectus eos, non impedit, tempora quod eum asperiores suscipit quisquam harum sit ipsa, voluptatum aperiam? Vel officiis incidunt corrupti vitae. Minima omnis vel ipsum accusantium repellendus ipsa in doloremque culpa quis! </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat ipsa, nobis rem sapiente iure soluta, ipsum accusamus nostrum sequi ad odio voluptatem harum quam! Voluptas dolor hic tempore amet, est eum illum. Fuga quis laudantium aliquid saepe veniam omnis odit dolorem eaque eligendi corporis. Tenetur nisi quos sunt consequatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio, delectus, quas, dolorum hic voluptatum tempore sit nemo animi praesentium minima alias esse! Voluptates excepturi illo at molestias ducimus explicabo sequi nemo! Excepturi, facilis tempora magnam, eligendi voluptatem cupiditate fugit consequuntur cum ducimus ad ea repellendus quae omnis ipsa dolores doloremque et, quibusdam provident quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque debitis iste dolor facilis, expedita tenetur amet molestias vero, hic nisi officiis fugit quod neque sint voluptate minus libero quam nobis numquam. Recusandae corporis incidunt delectus ut ratione natus harum, facilis explicabo. In tenetur numquam, omnis ratione qui voluptates culpa error, fuga natus recusandae quam itaque modi iusto vel consequuntur. Vel molestiae, saepe quibusdam quas iste, eum ipsum eaque ratione optio earum, asperiores nam sapiente placeat libero officiis corporis assumenda maxime quae natus at voluptas! Sint laboriosam unde optio, consequatur neque, atque inventore dicta obcaecati aspernatur eius cumque dignissimos accusamus? Reprehenderit dolore dolor corrupti sequi laboriosam aperiam sit molestias enim nihil adipisci!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia earum eaque alias facilis dolores sit nesciunt, facere quia illo voluptatum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto molestias consequatur dignissimos rem ipsa earum cupiditate optio odio doloribus, reprehenderit facere sunt sequi dicta dolores reiciendis debitis aliquam enim neque deserunt voluptatem. Commodi eaque in, sunt omnis modi magni necessitatibus excepturi molestias sapiente harum optio praesentium ipsam reiciendis saepe libero animi cumque nam vel natus dolores, nostrum dicta! Officiis repellendus, unde iusto enim in tempore odit ratione inventore, illum, dolor cupiditate quae. Nobis ipsum nisi esse saepe excepturi, voluptates impedit atque dicta, maxime animi fuga fugiat aperiam id tempore accusamus vel at. A molestiae odio excepturi neque delectus sapiente, unde provident ex. Assumenda placeat suscipit expedita voluptatum dicta omnis quod.</p>
      </div>

    </section>
  )
}

export default PostDetail
