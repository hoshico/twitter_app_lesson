import React from 'react'
import styles from "./Feed.module.css";
import { auth } from '../firebase'
import TweetInput from './TweetInput'

const Feed = () => {
  return (
    <div className={styles.feed}>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>LogOut</button>
    </div>
  )
}

export default Feed
