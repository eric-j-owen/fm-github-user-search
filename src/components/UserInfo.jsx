function UserInfo({ userName, userHandle, userPicture, joined }) {
  return (
    <section>
      <div>
        <img src={userPicture} alt="" />
      </div>
      <div>
        <h2>{userName}</h2>
        <p>@{userHandle}</p>
        <p>Joined {joined}</p>
      </div>
    </section>
  );
}

export default UserInfo;
