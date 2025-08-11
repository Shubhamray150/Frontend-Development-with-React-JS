import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
