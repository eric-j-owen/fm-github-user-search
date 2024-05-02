function Footer({ location, blog, twitter, company }) {
  return (
    <footer>
      <p>{location ? location : "Not Available"}</p>
      <p>{blog ? blog : "Not Available"}</p>
      <p>{twitter ? twitter : "Not Available"}</p>
      <p>{company ? company : "Not Available"}</p>
    </footer>
  );
}

export default Footer;
