import Link from "next/link";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import( 'react-slick'));

export const config = { unstable_runtimeJS:false}

const Pricing = () => {
  
  return (
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
  );
};
export default Pricing;
