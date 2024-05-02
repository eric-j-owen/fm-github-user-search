function Stats({ repos, followers, following }) {
  return (
    <div>
      <p>Repos {repos}</p>
      <p>Followers {followers}</p>
      <p>Following {following}</p>
    </div>
  );
}

export default Stats;
