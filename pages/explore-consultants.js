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
        titleText="Explore Engineering Consultants, Pvt. Ltd."
      />
      <section className="project-details-area pt-130 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <h2>Explore Engineering Consultants Pvt. Ltd.</h2>
            <span className="sub-title-two">Geotechnical Engineering</span>
          </div>
          <div className="details-image mb-55 wow fadeInUp delay-0-3s">
            <img
              src="assets/images/projects/project-details2.jpg"
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
                   Engineering
                  </span>
                </div>
                <div className="col">
                  <h5>Clients</h5>
                  <span className="sub-title-two mb-15">
                    A.P Singh, A.K Singh <br />
                    Noida, UP, India
                  </span>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <span className="sub-title-two mb-15">March 20 2023</span>
                </div>
                <div className="col">
                  <h5>Duration</h5>
                  <span className="sub-title-two mb-15">11 Hours</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h4 className="title mt-55 mb-15">Project Details</h4>
          <h4>Website Link: <a href="http://explore-consultants.vercel.app/">http://explore-consultants.vercel.app/</a></h4>
                                
                                <p>Explore Engineering Consultants Pvt. Ltd. contacted Site Dominion, a web design and development company, to develop a new website utilizing Next.js. The actions Site Dominion took to design and create the website are detailed in the project overview. </p>
                                <h3>Technology Stack:</h3>
                                <p>Site Dominion combined Next.js with React, HTML, CSS, and JavaScript to develop the website for Explore Engineering Consultants Pvt. Ltd. The website was made to be user-friendly and responsive, meeting the needs of current and new customers.</p>
                                <p>First, we used React, a popular JavaScript library, to build the website's frontend. React allowed us to create reusable UI components that could be easily updated and modified as needed. This approach also ensured that the website's codebase was organized, easy to maintain, and scalable.</p>
                                <h3>Design Considerations:</h3>
                                <p>The project started with a detailed examination of the needs and demands of the client. To provide a visual representation of the website's design and functionality, the design team produced wireframes and prototypes. Following design approval, the development team started constructing the website with Next.js.</p>
                                <h3>Website Functionality:</h3>
                                
                                <p>The website was created using a modular approach, allowing for consistency and efficiency by allowing components to be reused throughout the website. To improve the functionality of the website, Site Dominion also incorporated a number of plugins and third-party APIs, including the Google Maps API for location services and contact forms.</p>
<p></p>
<p>The website's speed has been enhanced to guarantee that it loads swiftly and fluidly on all types of internet connections, including slower ones. Techniques including server-side rendering, code splitting, and caching were used to achieve this.</p>
<p></p>
<p></p>
<p>After the website was created, Site Dominion thoroughly examined it to make sure there were no bugs and that it adhered to the client's specifications. The website was subsequently set up on a server and made accessible to the general public.</p>

                                <h3>Conclusion:</h3>
                                <p>Ultimately, Site Dominion's usage of Next.js and other technologies enabled them to build Explore Engineering Consultants Pvt. Ltd. a strong and high-performing website that suited their demands and assisted them in growing their business online.</p>  
                                
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



