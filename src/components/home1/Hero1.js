import Link from "next/link";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import( 'react-slick'));

export const config = { unstable_runtimeJS:false}

const Hero1 = () => {
  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container" style={{width:"100%",maxWidth:"100%"}}>
            <div className="slider-content">
              <span className="sub-title">
                One-Stop Shop
              </span>
              <h1>Exceptional Custom Websites</h1>
              <div className="slider-btns">
                
                <Link legacyBehavior  href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link legacyBehavior  href="/contact">
                  <a className="theme-btn">
                    Get Started<i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.png)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Development</b>
                
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container" style={{width:"100%",maxWidth:"100%"}}>
            <div className="slider-content">
              <span className="sub-title">
                Leading Agency
              </span>
              <h1>Transform Your Online Presence</h1>
              <div className="slider-btns">
                <Link legacyBehavior  href="/contact">
                  <a className="theme-btn">
                    Get Started <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link legacyBehavior  href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide3.png)",
              
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">All Industries</b>
                
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container" style={{width:"100%",maxWidth:"100%"}}>
            <div className="slider-content">
              <span className="sub-title">
                25 Years of Experience in web design solutions
              </span>
              <h1>Digital web design solutions agency</h1>
              <div className="slider-btns">
                <Link legacyBehavior  href="/contact">
                  <a className="theme-btn">
                    Get Started<i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link legacyBehavior  href="/services">
                  <a className="theme-btn style-three">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide2.png)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Search Engine Optimized</b>
                
              </span>
            </span>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
