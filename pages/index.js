import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Icon } from '@iconify/react';
import React,{useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// importing aos
import AOS from 'aos';

import Image from "next/image";
import 'aos/dist/aos.css';
import dynamic from "next/dynamic";
const Hero1 = dynamic(() => import( '../src/components/home1/Hero1'));
const Counter = dynamic(() => import( '../src/components/Counter'));
const ClientsFeedback = dynamic(() => import( '../src/components/home1/ClientsFeedback'));
const Layout = dynamic(() => import( '../src/layout/Layout'));
const RecentProjects = dynamic(() => import( '../src/components/home1/RecentProjects'));

export const config = { unstable_runtimeJS:false}


const Index = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Fragment>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="/assets/images/favicon1.png"
          type="image/x-icon"
        />
      </Head>
      <Layout header={1} className="home-one" footer={1}>
        {/*End Hidden Sidebar */}
        {/* Slider Section Start */}
        <Hero1 />
        {/* Slider Section End */}
        {/* Core Feature start */}

        {/* Core Feature end */}
        {/* About Us Area start */}
        <section className="about-area-one pt-130 pb-125 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape rmb-85 delay-0-2s">
                  
                  <Image height={430} width={600} loading="lazy" src="/assets/images/about/about-one.png" alt="About us" data-aos="zoom-in" data-aos-duration="1000"/>
                  
                  <Image width={600} loading="lazy" height={430} src="/assets/images/about/about-three.png" alt="About us" data-aos="fade-left" data-aos-duration="1000" />
                  

                </div>
              </div>
             
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one delay-0-4s wow fadeInRight">
                  <div className="section-title mb-45" data-aos="fade-left" data-aos-duration="1000">
                    <span className="sub-title mb-15">
                      About Us
                    </span>
                    <h2>Discover Site Dominion LLC: Your Trusted Partner for Exceptional Website Solutions</h2>
                  </div>
                  <ul>
                    <li >
                      <div className="content" data-aos="fade-up" data-aos-duration="1000">
                        
                        <h4><Image width={50} height={50} loading="lazy" src="/assets/images/mission.png" alt="" /> Our Mission</h4>
                        <p>
                          Sit amet consectetur adipiscing elit, sed eiusmod
                          tempor incididunt labore et dolore magna aliqua esuis
                          suspendisse
                        </p>
                      </div>
                    </li>
                    
                    <li >
                      <div className="content" data-aos="fade-up" data-aos-duration="1000">
                        <h4><Image width={50} height={50} loading="lazy" src="/assets/images/vision.png" alt="" /> Our Vision</h4>
                        <p>
                          Sit amet consectetur adipiscing elit, sed eiusmod
                          tempor incididunt labore et dolore magna aliqua esuis
                          suspendisse
                        </p>
                      </div>
                    </li>
                    <li >
                      <div className="content" data-aos="fade-up" data-aos-duration="1000">
                        <h4><Image width={50} height={50} loading="lazy" src="/assets/images/values.png" alt="" /> Our Values</h4>
                        <p>
                          Sit amet consectetur adipiscing elit, sed eiusmod
                          tempor incididunt labore et dolore magna aliqua esuis
                          suspendisse
                        </p>
                      </div>
                    </li>
                  
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/* About Us Area end */}
        {/* Statistics Three Area start */}
        <section className="statistics-area-three bgs-cover pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="statistics-three-content rmb-65 delay-0-2s">
                  <div className="row justify-content-center justify-content-xl-start">
                    <div className="section-title mb-45" data-aos="fade-right" data-aos-duration="1000">
                      <span className="sub-title mb-15">Why Choose Us</span>
                    <h2>Replace this</h2>
                    </div> 
                    <div data-aos="fade-left" data-aos-duration="1000">
                      
                    <h3><Image width="100px" height="100px" loading="lazy" src="/assets/images/custom.png" alt="" /> Custom Websites</h3>
                    <p>We have the knowledge and experience necessary to make your ideas a reality, whether you need a custom website, a web application, or a mobile app. We take the time to comprehend your business objectives and customize our solutions to match your particular requirements, ensuring that you receive the ideal outcomes.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                    <h3><Image width="100px" height="100px" loading="lazy" src="/assets/images/partner.png" alt="" />Collaboration</h3>
<p>We at Site Dominion are firm believers in the value of teamwork. In order to ensure that our clients' vision is fulfilled and their expectations are met, we work closely with them throughout the whole development process. We develop websites that not only look amazing but also function well, with an emphasis on user experience, responsive design, and search engine optimization.</p>
</div>
<div data-aos="fade-left" data-aos-duration="1000">
<h3><Image width="100px" height="100px" loading="lazy" src="/assets/images/pricing.png" alt="" />Affordability</h3>
<p>Compared to the average business website in the USA, which can cost anywhere from $2,000 to $10,000 or more, our prices are highly competitive. But we don't compromise on quality. Our team of expert developers uses the latest technologies and best practices to create websites that not only look great but also perform well.</p>
</div>
<div data-aos="fade-left" data-aos-duration="1000">
<h3><Image width="100px" height="100px" loading="lazy" src="/assets/images/value.png" alt="" />Value</h3>
<p>So why pick us? Because we are committed to generating results that have a significant impact on your business and are passionate about what we do. To find out how we can assist you in achieving your online objectives, get in touch with us right away.</p>
</div>

                    </div>
                    
                </div>
                
              </div>
              <div className="col-lg-5">
                <div className="statistics-three-image bg-squire-shape mb-30 delay-0-3s">
                
                  <Image width="420px" height="300px" loading="lazy"
                    src="/assets/images/about/main-img1.png"
                    alt="Statictics"
                    data-aos="fade-right" data-aos-duration="1000"
                  />
                  
                  
                  <Image width="420px" height="300px" loading="lazy"
                    src="/assets/images/about/phones.png"
                    alt="Statictics"
                    data-aos="flip-left" data-aos-duration="1000"
                  />
                 
                  
                  <Image width="400px" height="300px" loading="lazy" src="/assets/images/about/about-two.png" alt="About us" data-aos="fade-right" data-aos-duration="1000" />
                  

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Three Area end */}
        {/* Design Featured Start */}
        <section className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s" data-aos="zoom-in-up" data-aos-duration="1000">
              <span className="sub-title mb-10">Functionality</span>
              <h2>Each Website Includes:</h2>
            </div>
            <div className="row no-gap align-items-center">
              <div className="col-lg-3">
                <div className="feature-left">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Website Design & Development</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-web-page" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Full Deployment (Domain & Hosting)</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-middle rmt-30">
                  <div className="image wow fadeInUp delay-0-2s">
                    <Image width="400px" height="400px" loading="lazy"
                      className="round"
                      src="/assets/images/features/feature-middle.png"
                      alt="Feature Middle"
                      data-aos="zoom-in-up" data-aos-duration="1000"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="service-item style-three mt-30 wow fadeInUp delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-online" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>E-commerce Functionality *</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                        <div className="icon">
                          <i className="flaticon-web-programming" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Best Programming Practices Followed</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="feature-right">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-graphic-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Search Engine Optimization</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInLeft delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-user-experience" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Luxurious User Experience</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design-feature-shapes">
            <Image width="100px" height="100px" loading="lazy"
              className="shape dots"
              src="/assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape wave-line"
              src="/assets/images/shapes/feature-wave-line.png"
              alt="Shape"
            />
          </div>

          <p style={{textAlign:"center"}}>*Available with our Pro Package. Subject to business licensing and EIN.</p>
        </section>
        {/* Design Featured End */}
        {/* Project Area start */}
        
        {/* Project Area end */}
        {/* Working Process Area start */}
        <section className="work-process-area pt-130 pb-95 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Working Process</span>
                  <h2>Our 4-Step Process</h2>
                </div>
              </div>
            </div>
            <div className="work-process-wrap rel z-1">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <span className="number">01</span>
                      <i className="flaticon-data" />
                    </div>
                    <h4>Industry Research</h4>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <span className="number">02</span>
                      <i className="flaticon-design" />
                    </div>
                    <h4>Collaborative Design</h4>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <span className="number">03</span>
                      <i className="flaticon-optimization" />
                    </div>
                    <h4>Project Optimization</h4>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-sm-6">
                  <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                    <div className="icon">
                      <span className="number">04</span>
                      <i className="flaticon-star" />
                    </div>
                    <h4>Testing &amp; Launch</h4>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="work-process-shape">
                <Image width="100px" height="100px" loading="lazy"
                  src="/assets/images/shapes/worp-process-step.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Working Process Area end */}
        {/* CTA Area start */}
        <section className="call-to-action-area rel z-2">
          <div className="container">
            <div
              className="cta-inner bgs-cover"
              style={{
                backgroundImage: "url(assets/images/background/cta-bg.jpg)",
              }}
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInLeft delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>Have any Project On Minds ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>We are to work SEO optimization ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Area end */}
        {/* Pricing Two Area start */}
        <RecentProjects />
        
        <section className="features-area pricing-area-two bgc-lighter pt-135 pb-120 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Our Pricing Package</span>
                  <h2>Website Design Packages</h2>
                </div>
              </div>
            </div>
            <Tabs defaultIndex={0}>
              <TabList style={{"borderRadius":"1vh 1vh 0 0"}}>
            
                <Tab> Monthly</Tab> 
                <Tab>One-Time</Tab> 
                
              </TabList>
              <div className="row">
              
                <TabPanel >
                <section className=" pricing-area-two bgc-lighter rel z-1">
          <div className="container" style={{"background":"#17171a","borderRadius":"0 0 1vh 1vh"}}>
            <div className="row" >
              <div className="col-lg-6" >
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Unlimited Pages</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                      
                    </ul>
                    <div className="price-and-btn price-and-btn">
                      <div className="content">
                        <span className="price">59.99</span>
                        
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Standard plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">69.99</span>
                        
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Gold Plan</h4>
                  <span className="badge">popular package</span>
                   
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">79.99</span>
                        
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Diamond Plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">89.99</span>
                       
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-shapes">
            <Image width="100px" height="100px" loading="lazy"
              className="shape dots"
              src="/assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape wave"
              src="/assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
                </TabPanel>
                <TabPanel>
                <section className=" pricing-area-two bgc-lighter rel z-1">
          <div className="container" style={{"background":"#17171a","borderRadius":"0 0 1vh 1vh"}}>
            <div className="row" >
              <div className="col-lg-6" >
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Unlimited Pages</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                      
                    </ul>
                    <div className="price-and-btn price-and-btn2">
                      <div className="content">
                        <span className="price">599.99</span>
                        
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Standard plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn price-and-btn2">
                      <div className="content">
                        <span className="price">699.99</span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Gold Plan</h4>
                  <span className="badge">popular package</span>
                   
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:x-circle" color="red" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn price-and-btn2">
                      <div className="content">
                        <span className="price">799.99</span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Diamond Plan</h4>
                  
                  <div className="pricing-inner">
                    <ul>
                    <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />
                          Website Design + Development</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Deployment</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />On-page SEO</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Multiple Revisions</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Mobile Responsive</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Unlimited Pages</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Website Copywriting</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Blog</li>
                      <li><Icon icon="bx:check-circle" color="green" width="25" height="25" />Lead Generation API</li>
                    </ul>
                    <div className="price-and-btn price-and-btn2">
                      <div className="content">
                        <span className="price">899.99</span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-shapes">
            <Image width="100px" height="100px" loading="lazy"
              className="shape dots"
              src="/assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape wave"
              src="/assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        </TabPanel>
              
              

                    </div>
                    </Tabs>
           
          </div>
          <div className="pricing-shapes">
            <Image width="100px" height="100px" loading="lazy"
              className="shape dots"
              src="/assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape wave"
              src="/assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Pricing Two Area end */}
        {/* Testimonial Area Start */}
        <ClientsFeedback />
        {/* Testimonial Area End */}
        {/* Contact Area Start */}
        <section className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-55">
                    <h2>
                      Have any project on mind! feel free contact with us or{" "}
                      <span>say hello</span>
                    </h2>
                  </div>
                  <div className="contact-info-wrap">
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <span className="title">Location</span>
                        <b className="text">582 Main address, 2nd floor, USA</b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="content">
                        <span className="title">Email Address</span>
                        <b className="text">
                          <a href="mailto:support@gmail.com">
                            support@gmail.com
                          </a>
                        </b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="content">
                        <span className="title">Phone No</span>
                        <b className="text">
                          <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contact-area-form"
                  className="contact-area-form text-center wow fadeInRight delay-0-2s"
                  name="contact-area-form"
                  action="#"
                  method="post"
                >
                  <h4>Send us Message</h4>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                  <input
                    type="email"
                    id="blog-email"
                    name="blog-email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form-control"
                    defaultValue=""
                    placeholder="Website"
                    required=""
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                  <button type="submit" className="theme-btn">
                    Send messages <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-shapes">
            <Image width="100px" height="100px" loading="lazy"
              className="shape circle"
              src="/assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape dots"
              src="/assets/images/shapes/contact-dots.png"
              alt="Shape"
            />
            <Image width="100px" height="100px" loading="lazy"
              className="shape wave-line"
              src="/assets/images/shapes/contact-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Contact Area End */}
        {/* Blog Area start */}
        <section className="news-blog-area pt-130 pb-75 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get Every Updates</span>
                  <h2>Read Latest News &amp; Blog</h2>
                </div>
              </div>
            </div>
            <div className="row large-gap">
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/blog1.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/author1.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Douglas B. Dickens</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/blog2.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 27 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to create modern web site for your business?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/author2.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Carson C. Rhodes</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/blog3.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to digital marketing work social networking?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/author3.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Robert T. Evans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/blog4.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <Image width="100px" height="100px" loading="lazy" src="/assets/images/blog/author4.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Stanley J. Contreras</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};
export default Index;
