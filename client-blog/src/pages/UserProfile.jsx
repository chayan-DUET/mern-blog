import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/asaa`} className='btn'> My posts</Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile_avatar">
              <img src={Avatar} alt="" />
            </div>
            { /* Form to update avatar */}
            <form  className="avatar__form">
              <input type="file" name='avatar' id='avatar' onChange={ e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label htmlFor="avatar"> <FaEdit /> </label>

            </form>
            <button className='profile__avatar-btn'> <FaCheck /> </button>
          </div>
          <h1> Chayan </h1>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
