import React, { useState } from 'react'
import styles from './TweetInput.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { storage, db, auth } from '../firebase'
import { Avatar, Button, IconButton } from '@material-ui/core'
import firebase from "firebase/app";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";

const TweetInput = () => {
  const user = useSelector(selectUser);
  const [tweetImage, setTweetImage] = useState<File | null>(null);
  const [tweetMag, setTweetMsg] = useState("");
  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setTweetImage(e.target.files![0])
      e.target.value = ''
    }
  }
  const sendTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <Avatar
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={async () => {
          await auth.signOut()
        }}
      />
    </div>
  )
}

export default TweetInput
