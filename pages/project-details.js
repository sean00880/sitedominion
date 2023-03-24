import Link from "next/link";

import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import RecentProjects from "../src/components/home1/RecentProjects";
import { projectThreeActive } from "../src/sliderProps";
const ProjectsDetails = () => {
  return (
    <Layout>
      <PageBanner
        titleHtml={`Project Overview`}
        titleText="Grandpa Ron's"
      />
      <section className="project-details-area pt-130 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <h2>Grandpa Ron&apos;s LLC - Landscaping Business in Columbus, Ohio</h2>
            <span className="sub-title-two">Landscaping</span>
          </div>
          <div className="details-image mb-55 wow fadeInUp delay-0-3s">
            <img
              src="assets/images/projects/project-details.jpg"
              alt="Project Details"
            />
          </div>
          <div className="row pb-25">
            <div className="col-xl-5 col-lg-4">
              <h4 className="title mb-15 rmb-30">Project Information</h4>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="row row-cols-lg-4 row-cols-2">
                <div className="col">
                  <h5>Industry</h5>
                  <span className="sub-title-two mb-15">
                   Landscaping
                  </span>
                </div>
                <div className="col">
                  <h5>Clients</h5>
                  <span className="sub-title-two mb-15">
                    Josh D. Reichley <br />
                    Columbus, Ohio
                  </span>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <span className="sub-title-two mb-15">25 July 2022</span>
                </div>
                <div className="col">
                  <h5>Duration</h5>
                  <span className="sub-title-two mb-15">50 Hours</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h4 className="title mt-55 mb-15">Project Details</h4>
          <h4>Website Link: <a href="https://www.grandparonsllc.com">https://www.grandparonsllc.com</a></h4>
                                
                                <p>As a web development agency, Site Dominion was thrilled to work with Grandpa Ron&apos;s LLC, a family-owned landscaping business, to build a new website that accurately reflected their values and showcased their services. </p>
                                <h3>Technology Stack:</h3>
                                <p>
                                To ensure that the website would be fast, reliable, and optimized for search engines, we used a combination of React, Vercel, Github Pages, Email JS (for Lead Generation), and Next.js.</p>
                                <p>First, we used React, a popular JavaScript library, to build the website&apos;s frontend. React allowed us to create reusable UI components that could be easily updated and modified as needed. This approach also ensured that the website&apos;s codebase was organized, easy to maintain, and scalable.</p>
                                <p>Next, we utilized Vercel, a cloud-based platform for building, deploying, and hosting websites, to ensure that the website was fast and reliable. Vercel provided automatic code updates, built-in performance optimization, and easy deployment, making it the perfect choice for Grandpa Ron&apos;s LLC&apos;s website.</p>
                                <p>We also used Github Pages, a static site hosting service, to host the website&apos;s source code. Github Pages allowed us to easily manage and update the website&apos;s codebase, ensuring that it was always up-to-date and accessible to the Grandpa Ron&apos;s LLC team.</p>
                                <p>To optimize the website for search engines, we used Next.js, a React-based web framework that provides server-side rendering and dynamic content updates. Next.js allowed us to build a fast and performant website that was optimized for search engines and user experience. We also included on-page SEO techniques such as meta descriptions, image alt tags, and structured data.</p>
                                <p>To further optimize lead generation, we used Email JS, a platform that allows businesses to send emails directly from their website, to capture leads from the website&apos;s contact form. This integration allowed Grandpa Ron&apos;s LLC to receive leads directly in their email inbox and follow up with potential customers in a timely manner.</p>
                                <h3>Design Considerations:</h3>
                                <p>In terms of design, we worked closely with Grandpa Ron&apos;s LLC to create a website that accurately represented their brand and values. We utilized a clean and modern design aesthetic that was easy to navigate and highlighted the business&apos;s services and value proposition. We also included a prominent call-to-action button that encouraged users to request a quote or get in touch with the Grandpa Ron&apos;s LLC team.</p>
                                <h3>Website Functionality:</h3>
                                <p>The website has several features that make it easy for users to learn about the business&apos;s services and contact them for work. The homepage features a prominent call to action that encourages users to request a quote. The website&apos;s services page provides detailed information about the different services offered by Grandpa Ron&apos;s LLC, along with pricing information. The website also has a gallery section where the business can showcase their previous work, which can help potential customers get an idea of the quality of their services.</p>
                                <h3>Conclusion:</h3>
                                <p>Overall, Grandpa Ron&apos;s LLC&apos;s website provides a comprehensive overview of the company&apos;s services and capabilities, while also offering an easy-to-use interface for customers to request quotes and schedule appointments. The use of Next.JS allows for fast and efficient server-side rendering, resulting in a seamless user experience across all devices.</p>  
                                
          <hr className="mt-50" />
          <div className="next-prev-project py-65">
            <div className="prev-project wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/prev-project.jpg"
                  alt="Project"
                />
              </div>
              <div className="content">
                <h5>
                  <Link legacyBehavior  href="/project-details">Dashboard Design</Link>
                </h5>
                <span className="category">Creative, Branding</span>
                <Link legacyBehavior  href="/project-details">
                  <a className="read-more">
                    View Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior  href="/projects">
              <a className="show-all">
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </a>
            </Link>
            <div className="next-project wow fadeInRight delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/nex-project.jpg"
                  alt="Project"
                />
              </div>
              <div className="content">
                <h5>
                  <Link legacyBehavior  href="/project-details">Creative Pattern</Link>
                </h5>
                <span className="category">Mokeup, Branding</span>
                <Link legacyBehavior  href="/project-details">
                  <a className="read-more">
                    View Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Area end */}

      {/* Related Project Area start */}
      <RecentProjects/>
      {/* Related Project Area end */}
    </Layout>
  );
};
export default ProjectsDetails;
