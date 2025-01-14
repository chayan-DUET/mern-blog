import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
{    id:'1',
    thumbnil1: Thumbnail1,
    category: 'education',
    title: 'This is the title of the very first post on this blog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, vero! Fugit porro libero quod ut tempore quos quo. Doloremque adipisci molestias sunt, suscipit fugiat magni voluptatem, assumenda optio omnis praesentium labore, quisquam cum velit minus corrupti ipsa? Qui, illum aut est, voluptates esse quidem veniam porro quaerat consectetur nam quo illo maxime molestias voluptatum odit facilis accusantium, iusto maiores aspernatur. Reiciendis, atque veritatis esse ipsum repellendus iure neque ipsam, culpa vel voluptas odio architecto fugiat labore natus possimus, sunt hic facilis officiis et dolorum tempora. Asperiores fugiat suscipit, et voluptatum reprehenderit, error commodi voluptas ab saepe ipsa eligendi? Atque sapiente incidunt dolorem, dolores corrupti omnis culpa neque aliquam officiis assumenda nulla, magni consequuntur qui velit quia recusandae et eius quaerat odio accusamus, ipsam nam similique nisi inventore. Obcaecati, ipsum! Animi eveniet voluptatem officia iste autem? Commodi quam at, iusto expedita nostrum voluptatem architecto illo nam inventore beatae ducimus ex assumenda! Unde voluptate, reprehenderit obcaecati, officia at nisi, magnam ut odio alias iusto ipsam. Neque quae ex, laborum illum et laboriosam? A tempore qui quos sunt ullam magni non. Quidem necessitatibus corporis beatae odit voluptate officiis fuga eum repellat suscipit dicta modi iste qui laborum repudiandae soluta libero id culpa alias, labore autem! Tempore nihil pariatur asperiores vel excepturi officiis quibusdam velit expedita non porro soluta suscipit ipsum et similique accusantium voluptatibus, quaerat, laudantium iusto! Itaque, quas! Obcaecati hic alias doloremque veritatis quae natus nostrum aut accusamus rem nisi nemo quis aspernatur facilis voluptatem, quos fugit molestias molestiae totam distinctio optio quaerat repudiandae ipsum temporibus? Ab, atque perferendis voluptatibus error esse omnis sapiente repudiandae veritatis amet in. Voluptatem iusto atque delectus totam maxime magni enim voluptas maiores error quasi ducimus dolorum sed, expedita dicta suscipit, sit necessitatibus quaerat! Eum odio, magni vel, sed dolorum possimus doloremque incidunt rerum rem placeat saepe!',
    authorID: 3
},
{    id:'2',
    thumbnil2: Thumbnail2,
    category: 'education',
    title: 'This is the title of the very first post on this blog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, vero! Fugit porro libero quod ut tempore quos quo. Doloremque adipisci molestias sunt, suscipit fugiat magni voluptatem, assumenda optio omnis praesentium labore, quisquam cum velit minus corrupti ipsa? Qui, illum aut est, voluptates esse quidem veniam porro quaerat consectetur nam quo illo maxime molestias voluptatum odit facilis accusantium, iusto maiores aspernatur. Reiciendis, atque veritatis esse ipsum repellendus iure neque ipsam, culpa vel voluptas odio architecto fugiat labore natus possimus, sunt hic facilis officiis et dolorum tempora. Asperiores fugiat suscipit, et voluptatum reprehenderit, error commodi voluptas ab saepe ipsa eligendi? Atque sapiente incidunt dolorem, dolores corrupti omnis culpa neque aliquam officiis assumenda nulla, magni consequuntur qui velit quia recusandae et eius quaerat odio accusamus, ipsam nam similique nisi inventore. Obcaecati, ipsum! Animi eveniet voluptatem officia iste autem? Commodi quam at, iusto expedita nostrum voluptatem architecto illo nam inventore beatae ducimus ex assumenda! Unde voluptate, reprehenderit obcaecati, officia at nisi, magnam ut odio alias iusto ipsam. Neque quae ex, laborum illum et laboriosam? A tempore qui quos sunt ullam magni non. Quidem necessitatibus corporis beatae odit voluptate officiis fuga eum repellat suscipit dicta modi iste qui laborum repudiandae soluta libero id culpa alias, labore autem! Tempore nihil pariatur asperiores vel excepturi officiis quibusdam velit expedita non porro soluta suscipit ipsum et similique accusantium voluptatibus, quaerat, laudantium iusto! Itaque, quas! Obcaecati hic alias doloremque veritatis quae natus nostrum aut accusamus rem nisi nemo quis aspernatur facilis voluptatem, quos fugit molestias molestiae totam distinctio optio quaerat repudiandae ipsum temporibus? Ab, atque perferendis voluptatibus error esse omnis sapiente repudiandae veritatis amet in. Voluptatem iusto atque delectus totam maxime magni enim voluptas maiores error quasi ducimus dolorum sed, expedita dicta suscipit, sit necessitatibus quaerat! Eum odio, magni vel, sed dolorum possimus doloremque incidunt rerum rem placeat saepe!',
    authorID: 1
},
{    id:'3',
    thumbnil3: Thumbnail3,
    category: 'education',
    title: 'This is the title of the very first post on this blog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, vero! Fugit porro libero quod ut tempore quos quo. Doloremque adipisci molestias sunt, suscipit fugiat magni voluptatem, assumenda optio omnis praesentium labore, quisquam cum velit minus corrupti ipsa? Qui, illum aut est, voluptates esse quidem veniam porro quaerat consectetur nam quo illo maxime molestias voluptatum odit facilis accusantium, iusto maiores aspernatur. Reiciendis, atque veritatis esse ipsum repellendus iure neque ipsam, culpa vel voluptas odio architecto fugiat labore natus possimus, sunt hic facilis officiis et dolorum tempora. Asperiores fugiat suscipit, et voluptatum reprehenderit, error commodi voluptas ab saepe ipsa eligendi? Atque sapiente incidunt dolorem, dolores corrupti omnis culpa neque aliquam officiis assumenda nulla, magni consequuntur qui velit quia recusandae et eius quaerat odio accusamus, ipsam nam similique nisi inventore. Obcaecati, ipsum! Animi eveniet voluptatem officia iste autem? Commodi quam at, iusto expedita nostrum voluptatem architecto illo nam inventore beatae ducimus ex assumenda! Unde voluptate, reprehenderit obcaecati, officia at nisi, magnam ut odio alias iusto ipsam. Neque quae ex, laborum illum et laboriosam? A tempore qui quos sunt ullam magni non. Quidem necessitatibus corporis beatae odit voluptate officiis fuga eum repellat suscipit dicta modi iste qui laborum repudiandae soluta libero id culpa alias, labore autem! Tempore nihil pariatur asperiores vel excepturi officiis quibusdam velit expedita non porro soluta suscipit ipsum et similique accusantium voluptatibus, quaerat, laudantium iusto! Itaque, quas! Obcaecati hic alias doloremque veritatis quae natus nostrum aut accusamus rem nisi nemo quis aspernatur facilis voluptatem, quos fugit molestias molestiae totam distinctio optio quaerat repudiandae ipsum temporibus? Ab, atque perferendis voluptatibus error esse omnis sapiente repudiandae veritatis amet in. Voluptatem iusto atque delectus totam maxime magni enim voluptas maiores error quasi ducimus dolorum sed, expedita dicta suscipit, sit necessitatibus quaerat! Eum odio, magni vel, sed dolorum possimus doloremque incidunt rerum rem placeat saepe!',
    authorID: 13
},
{    id:'4',
    thumbnil4: Thumbnail4,
    category: 'education',
    title: 'This is the title of the very first post on this blog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, vero! Fugit porro libero quod ut tempore quos quo. Doloremque adipisci molestias sunt, suscipit fugiat magni voluptatem, assumenda optio omnis praesentium labore, quisquam cum velit minus corrupti ipsa? Qui, illum aut est, voluptates esse quidem veniam porro quaerat consectetur nam quo illo maxime molestias voluptatum odit facilis accusantium, iusto maiores aspernatur. Reiciendis, atque veritatis esse ipsum repellendus iure neque ipsam, culpa vel voluptas odio architecto fugiat labore natus possimus, sunt hic facilis officiis et dolorum tempora. Asperiores fugiat suscipit, et voluptatum reprehenderit, error commodi voluptas ab saepe ipsa eligendi? Atque sapiente incidunt dolorem, dolores corrupti omnis culpa neque aliquam officiis assumenda nulla, magni consequuntur qui velit quia recusandae et eius quaerat odio accusamus, ipsam nam similique nisi inventore. Obcaecati, ipsum! Animi eveniet voluptatem officia iste autem? Commodi quam at, iusto expedita nostrum voluptatem architecto illo nam inventore beatae ducimus ex assumenda! Unde voluptate, reprehenderit obcaecati, officia at nisi, magnam ut odio alias iusto ipsam. Neque quae ex, laborum illum et laboriosam? A tempore qui quos sunt ullam magni non. Quidem necessitatibus corporis beatae odit voluptate officiis fuga eum repellat suscipit dicta modi iste qui laborum repudiandae soluta libero id culpa alias, labore autem! Tempore nihil pariatur asperiores vel excepturi officiis quibusdam velit expedita non porro soluta suscipit ipsum et similique accusantium voluptatibus, quaerat, laudantium iusto! Itaque, quas! Obcaecati hic alias doloremque veritatis quae natus nostrum aut accusamus rem nisi nemo quis aspernatur facilis voluptatem, quos fugit molestias molestiae totam distinctio optio quaerat repudiandae ipsum temporibus? Ab, atque perferendis voluptatibus error esse omnis sapiente repudiandae veritatis amet in. Voluptatem iusto atque delectus totam maxime magni enim voluptas maiores error quasi ducimus dolorum sed, expedita dicta suscipit, sit necessitatibus quaerat! Eum odio, magni vel, sed dolorum possimus doloremque incidunt rerum rem placeat saepe!',
    authorID: 11
},

]


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
        {
            posts.map(() => <PostItem />)
        }
    </section>
  )
}

export default Posts
