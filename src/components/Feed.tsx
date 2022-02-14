import React from 'react'
import { auth } from '../firebase'
import Tweetinput from './Tweetinput'

const Feed = () => {
  return (
    <div>
      Feed
      <Tweetinput />
      <button onClick={() => auth.signOut()}>LogOut</button>
    </div>
  )
}

export default Feed
