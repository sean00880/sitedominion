import { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import niceSelect from "react-nice-select";
const CallToAction = dynamic(() => import( '../components/CallToAction'));
const ImageView = dynamic(() => import( '../components/ImageView'));
const VideoPopup = dynamic(() => import( '../components/VideoPopup'));
import { animation, stickyNav } from "../utils";
const Footer = dynamic(() => import( './Footer'));
const Header = dynamic(() => import( './Header'));
const ScrollTop = dynamic(() => import( './ScrollTop'));
import SideBar from "./SideBar";

export const config = { unstable_runtimeJS:false}

const Layout = ({ children, header, className, footer, noHeader }) => {
  useEffect(() => {
    animation();
    document.querySelector("body").className = className
      ? className
      : "oxence_body";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  useEffect(() => {
    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {!noHeader && <Header header={header} />}
        <SideBar />
        {children}
        {!footer && <CallToAction />}
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
