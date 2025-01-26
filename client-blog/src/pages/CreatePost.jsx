import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  return (
    <section className="create-post">
      <div className="container">
        <h5>Create post</h5>
        <p className="form__error-message">
          This is an error message
        </p>
        <form action="" className="form create-post__form">
          <input type="text" placeholder='Title' value={title} />
          <input type="text" placeholder='Dsc' value={title} />
          <input type="text" placeholder='Image' value={title} />
        </form>
      </div>
    </section>
  )
}

export default CreatePost
