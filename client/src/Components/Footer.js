import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark"
        id="footerCon"
        style={{ color: 'white' }}
      >
        <br />
        <br />
        <center>
          <div className="row">
            <div className="col-sm-4">
              <h6 className="footH">ABOUT US</h6>
              <hr />
              <p>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Career
                </Link>
              </p>
            </div>
            <div className="col-sm-4">
              <h6 className="footH">RESOURCES</h6>
              <hr />
              <p>
                <Link
                  to="/Help"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Help Center
                </Link>
              </p>
              <p>
                <Link
                  to="/Blog"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  EasyPlan Blog
                </Link>
              </p>
            </div>
            <div className="col-sm-4">
              <h6 className="footH">SOCIAL MEDIA</h6>
              <hr />
              <p>
                <Link
                  to="/www.instagramcom"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Instagram
                </Link>
                <br />
              </p>
              <p>
                <Link
                  to="/facebook.com"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Facebook
                </Link>
                <br />
              </p>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Footer;
