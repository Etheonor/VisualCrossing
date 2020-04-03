import React, { useContext, useEffect } from "react";

// Import Firebase elements and initialize it
import { firebase, signIn, signOut } from "../API/Firebase";
import "firebase/auth";
import "firebase/firestore";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";

import Button from "./buttons/button";
import login from "./../icons/Logos/google-fill.svg";
import logout from "./../icons/System/logout-box-line.svg";
import styles from "./user.module.scss";

const User = () => {

  
  // CHANGE TO FUNCTIONNAL COMPONENT
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const checkUser = () => {
    console.log(state);
  };

  const dispatchUser = user => {
    if (state.user === null) {
      console.log("test2");
      dispatch({
        type: "USER",
        text: {
          username: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
      });
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //User sign in
        console.log("test");
        dispatchUser(user);
      } else {
        // User is signed out.
        dispatch({
          type: "USER",
          text: null,
        });
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.userPanel}>
      {state.user ? (
        <Button image={logout} onClick={signOut} label="Log Out" />
      ) : (
        <Button image={login} onClick={signIn} label="Log In" />
      )}

      <Button onClick={checkUser} label="Test" />
    </div>
  );
};

export default User;
