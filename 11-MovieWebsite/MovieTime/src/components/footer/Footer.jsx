import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import CustomerService from "./CustomerService";
import RecentPost from "./RecentPost";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <>
      <div className="bg-[url(http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/themes/amy-movie/images/frontend/footer_bg.png)] h-128">
        <div className="my-auto mx-28 pt-24 flex justify-between  items-center h-full ">
          <FooterLogo />
          <CustomerService />
          <RecentPost />
          <ContactUs />
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
