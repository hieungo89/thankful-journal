const Footer = () => {
  return (
    <footer>
      <div className="link-container">
        &copy; {new Date().getFullYear()} My Thankful Journal, All Rights
        Reserved
      </div>
      <div className="link-container">
        <div>
          <h4>Account</h4>
          <p>Profile</p>
          <p>Settings</p>
          <p>Login</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Support</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
