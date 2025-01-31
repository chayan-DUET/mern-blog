import React, { useState, useRef, useMemo } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import JoditEditor from 'jodit-react';

const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [desc, setDesc] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const editor = useRef(null);

  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'},{'list':'bullet'}, {'indent':'-1'}, {'indent': '+1'}],
      ['link','image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list','bullet','indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = [ "Agriculture", "Business", "Education", "Entertainment", "Art", "Investment",
    "Uncategorized","Weather"]
  return (
    <section className="create-post">
      <div className="container">
        <h5>Edit post</h5>
        <p className="form__error-message">
          This is an error message
        </p>
        <form action="" className="form create-post__form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
          <select name="category" value={category} onChange={e =>setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          {/* <ReactQuill theme="snow" modules={modules} formats={formats} value={desc} onChange={setDesc} /> */}
         {/*  <textarea name="Desc" rows={4} cols={40} value={desc} onChange={e => setDesc(e.target.value)} /> */}
         <JoditEditor className='ql-editor'
            ref={editor}
            value={desc} onChange={setDesc}
		/>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept= 'png, jpg, jpeg' />
          <button type='submit' className='btn primary'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost
