import "../style/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <h2 className="title">Website Creators</h2>
        <div className="footer__icons">
          <i className="bx bx-linkedin"></i>
          <i className="bx bx-linkedin"></i>
          <i className="bx bx-linkedin"></i>
          <i className="bx bx-linkedin"></i>
          <i className="bx bx-linkedin"></i>
        </div>
      </div>
      <div className="footer__copy">
        <p>©Coach Kolding</p>
        <p>@Dash Sulutions</p>
      </div>
    </footer>
  );
};

export default Footer;
