function Stats({ repos, followers, following }) {
  return (
    <section>
      <p>Repos {repos}</p>
      <p>Followers {followers}</p>
      <p>Following {following}</p>
    </section>
  );
}

export default Stats;
