import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";
import Threads from "./icons/Threads";
import FooterForm from "./FooterForm";
const Footer = () => {
  return (
    <div className="bg-gray-950 px-7 py-5 space-y-5">
      <div className="flex justify-between">
        <div className="text-white flex flex-col space-y-4">
          <h1 className="text-lg font-bold font-sans tracking-wider">GenX</h1>
          <div className="flex space-x-3">
            <Instagram />
            <Twitter />
            <Facebook />
            <Threads />
          </div>
        </div>
        <div>
          <FooterForm />
        </div>
      </div>
      <hr className="border-gray-700"/>
      <div className="text-white text-center text-sm">
        © 2024 GenX, LLC. All Rights Reserved. Use of this site constitutes
        acceptance of our Terms of Service, Privacy Policy and Do Not Sell or
        Share My Personal Information. GenX may receive compensation for some
        links to products and services on this website. Offers may be subject to
        change without notice.
      </div>
    </div>
  );
};

export default Footer;
