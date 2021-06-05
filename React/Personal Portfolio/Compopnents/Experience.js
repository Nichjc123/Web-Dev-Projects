import React from "react";
import { useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = ({ BackToTop }) => {
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(ref.querySelector(".cont1"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont1"),
        start: "top center",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont2"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont2"),
        start: "top center",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont3"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont3"),
        start: "top bottom",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont4"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont4"),
        start: "top bottom",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          ref = el;
        }}
      >
        <div className="experience">
          <div className="exp-header">
            <p>SECTION 3</p>
            <h1>EXPERIENCE</h1>
          </div>
          <div className="expS-cont">
            <div className="exp-cont ">
              <div className="number">
                <div className="number-inner">01</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont1">
                <h2>Cabinet Office</h2>
                <h4>Executive IT support (Winter 2021)</h4>
                <p>
                  Acted as a member of the infrastrucutre technology team for
                  the Ontario Cabinet office.
                </p>
                <p>
                  My duties included making flows in Micrsoft Power automate to
                  automate tasks and procedures like finding information about
                  assets a client posses or routine data managment. However one
                  of the larger projects I undertook was creating a landing page
                  for our department. (Highlighted in Projects section)
                </p>
              </div>
            </div>
            <div className="exp-cont">
              <div className="number">
                <div className="number-inner">02</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont2">
                <h2>Volunteering</h2>
                <h4>Peer tutoring(Winter 2020)</h4>
                <p>
                  In my final year of highschool I began tutoring my peers in
                  chemistry and math. Post secondary education was creating
                  immense stress regarding academic performance amongst my peers
                  so, I wanted to help.
                </p>
                <p>
                  I Performed peer tutoring using visual supports, visual aids
                  and detailed note summaries to help 3 students increase course
                  average by 5%+.
                </p>
              </div>
            </div>
            <div className="exp-cont ">
              <div className="number">
                <div className="number-inner">03</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont3">
                <h2>Mary Brown’s</h2>
                <h4>Cashier(June 2019 - Aug 2019)</h4>
                <p>
                  Operated as a cashier and employed decision making and time
                  management skills to work effectively with a group as a
                  cashier in a high-intensity work environment.
                </p>
              </div>
            </div>
            <div className="exp-cont">
              <div className="number">
                <div className="number-inner">04</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont last-cont cont4">
                <h2>Pool Supplies Canada</h2>
                <h4>Processing and Quality Assurance(Apr 2002 - Aug 2020)</h4>
                <p>
                  Acted as quality control worker by supervising and reviewing
                  work of other processors to ensure operation of warehouse
                  processes was done without error.
                </p>
                <p>
                  Processed orders using several databases and technical systems
                  to ensure the receival of shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="return-to-nav">
          <p>Back to nav</p>
          <FaArrowCircleUp onClick={BackToTop} />
        </div>
      </div>
    </>
  );
};

export default Experience;
