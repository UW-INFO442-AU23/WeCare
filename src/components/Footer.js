function Footer() {
  const headingStyle = {
    fontSize: '22px',
  };
  return (
    <div className="footer text-center text-muted mt-auto bg-body-secondary">
      <div className="container text-md-start">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h1 className="text-uppercase fw-bold mb-4" style={headingStyle}>
              <i className="fas fa-gem me-3"></i>WeCare
            </h1>
            <p>
            How might we educate young professionals in Washington on food insecurity to help direct their donations to resources working to eliminate hunger for local and global communities?
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h1 className="text-uppercase fw-bold mb-4" style={headingStyle}> Contact</h1>
            <p><i className="fas fa-home me-3 text-secondary"></i> Seattle, WA, US</p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              wecare@hunger.com
            </p>
            <p><i className="fas fa-phone me-3 text-secondary"></i> 888-888-8888</p>
          </div>
        </div>
      </div>
      <div className="text-center p-4 bg-dark-subtle">
        © 2023
        <a className="text-reset fw-bold" href="https://wecare-26feb.web.app/"> WeCare </a>
        INFO 442
      </div>
    </div>
  );
}

export default Footer;
