import Link from "next/link";

import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import RecentProjects from "../src/components/home1/RecentProjects";
import { projectThreeActive } from "../src/sliderProps";
const ProjectsDetails = () => {
  return (
    <Layout header={1} className="home-one" footer={1}>
      <PageBanner
        titleHtml={`Project Overview`}
        titleText="Grandpa Ron's"
      />
      <section className="project-details-area pt-130 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <h2>Metanetic - SMMA</h2>
            <span className="sub-title-two">Digital Marketing</span>
          </div>
          <div className="details-image mb-55 wow fadeInUp delay-0-3s">
            <img
              src="assets/images/projects/project-details3.jpg"
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
                   Digital Marketing
                  </span>
                </div>
                <div className="col">
                  <h5>Clients</h5>
                  <span className="sub-title-two mb-15">
                    Enigma <br />
                    Dubai
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
          <h4>Website Link: <a href="https://alpha-lovat.vercel.app/">https://alpha-lovat.vercel.app/</a></h4>
                                
          <p>Site Dominion has been commissioned to develop a website for Metanetic, a social media marketing agency that provides web development, graphic design, and digital marketing as their primary services. The website will be developed using Next JS, a popular React framework that provides an efficient and scalable solution for building complex web applications. The website will serve as a central platform for Metanetic to showcase their services, portfolio, and expertise to potential clients and partners.</p>
<h3>Project Goals</h3>
<p>The primary goal of the project is to create a visually appealing and user-friendly website that effectively communicates Metanetic's services, brand identity, and values. The website should also be responsive and optimized for search engines, ensuring that potential clients can easily find and access Metanetic's services. Additionally, the website should be built with scalability in mind, allowing for future expansion and updates as the company grows.</p>
<h3>Key Features</h3>
<p>The Metanetic website will include the following key features:</p>
<ul>
<li><p><strong>Homepage:</strong> The homepage will provide an overview of Metanetic's services, portfolio, and team members. It will also include a call-to-action section, encouraging visitors to contact Metanetic for more information or to schedule a consultation.</p></li>
<li><p><strong>Services:</strong> A dedicated services page will provide detailed information about Metanetic's web development, graphic design, and digital marketing services. Each service will be described in detail, with examples of past projects and client testimonials.</p></li>
<li><p><strong>Portfolio:</strong> The portfolio page will showcase Metanetic's past projects, providing visitors with a visual representation of the company's capabilities and expertise. Each project will include a brief description, images, and links to the live websites or marketing campaigns.</p></li>
<li><p><strong>About Us:</strong> The About Us page will provide information about Metanetic's history, mission, and team members. This page will also include a section highlighting the company's core values, such as creativity, innovation, and customer satisfaction.</p></li>
<li><p><strong>Contact Us:</strong> A dedicated contact page will provide visitors with multiple ways to contact Metanetic, including a contact form, phone number, email address, and social media links.</p></li>
</ul>
<h3>Conclusion</h3>
<p>The development of the Metanetic website is an exciting opportunity for Site Dominion to showcase our expertise in web development and design. We look forward to working closely with the Metanetic team to create a website that accurately represents their brand and helps them achieve their business goals.</p>
                            
                                
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
                  <Link href="/project-details">Dashboard Design</Link>
                </h5>
                <span className="category">Creative, Branding</span>
                <Link href="/project-details">
                  <a className="read-more">
                    View Details <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/projects">
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
                  <Link href="/project-details">Creative Pattern</Link>
                </h5>
                <span className="category">Mokeup, Branding</span>
                <Link href="/project-details">
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
