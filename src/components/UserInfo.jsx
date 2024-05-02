function UserInfo({ userName, userHandle, userPicture, joined }) {
  return (
    <section>
      <div>
        <img src={userPicture} alt="" />
      </div>
      <div>
        <div>
          <h2>{userName}</h2>
          <p>@{userHandle}</p>
        </div>
        <p>Joined {joined}</p>
      </div>
    </section>
  );
}

export default UserInfo;
