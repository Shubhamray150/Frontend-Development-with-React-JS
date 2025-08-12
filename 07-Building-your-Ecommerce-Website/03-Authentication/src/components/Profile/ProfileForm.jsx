import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import AuthContext from "../../Store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDkEwWiv_6ACWxYKCBben6-sb4KbPeIB2s",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPasswordInputRef.current.value,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        authCtx.login(data.idToken);
        console.log(data.idToken);
      });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
