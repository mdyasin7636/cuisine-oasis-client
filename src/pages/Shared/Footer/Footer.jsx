const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="footer p-14 bg-base-100 text-base text-black pl-32 font-semibold">
        <div>
          <span className="footer-title">Cuisine Oasis</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base text-black font-semibold">
        <div>
          <p>Copyright © 2024 - All right reserved by Cuisine Oasis</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
