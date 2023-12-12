import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
            <p>You're invited for open source contribution <a style={{textDecoration:"underline"}} href="https://github.com/SinghAnkit1010/Online-test-Proctoring-2.0" target='_blank'><strong>GitHub</strong></a></p>
      </div>
      <div className="subFooter">
          <p>
            Copyright © <span>{new Date().getFullYear()}</span>.
            All rights reserved
          </p>
      </div>
    </>
  );
};
export default Footer;
