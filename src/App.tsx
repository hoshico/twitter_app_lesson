import React, { useEffect } from 'react';
import './App.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

const App:React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  // userが変わったタイミングで呼び出される(userの監視をする)
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photoUrl: authUser.photoURL,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    }
  }, [dispatch]);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
