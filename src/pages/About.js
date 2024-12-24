import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "./About.css";
import htmlcss from "../certificates/HTML&CSS Mahara-Tech.jpg";
import javascript from "../certificates/Javascript Mahara-Tech.jpg";
import es6 from "../certificates/ES6 Mahara-Tech.jpg";
import typescript from "../certificates/TypeScript Mahara-Tech.jpg";

function About() {
  const theme = useContext(ThemeContext);
  const colorStyle = theme ? { color: "white" } : { color: "black" };
  return (
    <div className="about" style={colorStyle}>
      <h1>About Me</h1>
      <div className="section about-me">
        <h2>Professional Summary</h2>
        <p className="objective">
          Motivated and results-driven professional <span>transitioning</span>{" "}
          from a successful career in <span>sales to frontend development</span>
          . Passionate about creating intuitive and visually appealing user
          interfaces. Skilled in HTML, CSS, JavaScript, and responsive web
          design, with hands-on experience in building projects during
          self-guided training. Strong communication and problem-solving skills
          developed in sales, now applied to delivering excellent user
          experiences in the tech space.
        </p>
      </div>

      <div className="section skills">
        <h2>Skills</h2>
        <div className="skills-divs">
          <div className="skills-div1">
            <ul>
              <h3>Languages and Technologies</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git</li>
            </ul>
            <ul>
              <h3>Frameworks and Libraries</h3>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <ul>
              <h3>Version Control</h3>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="skills-div2">
            <ul>
              <h3>Software Skills</h3>
              <li>Photoshop</li>
              <li>Microsoft Excel</li>
              <li>Microsoft Word</li>
            </ul>
            <ul>
              <h3>Soft Skills</h3>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Client Collaboration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section courses">
        <h2>Courses and Certificates</h2>
        <ul>
          <li>
            HTML &amp; CSS &lt;
            <span>
              Mahara Tech &rarr;
              <a
                style={colorStyle}
                href={htmlcss}
                rel="noreferrer"
                target="_blank"
              >
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            Responsive web design &lt;
            <span>
              www.freecodecamp.org &rarr;
              <a
                style={colorStyle}
                href="https://freecodecamp.org/certification/fcc3c945485-367e-4e0e-b71a-e5d55ba0ad39/responsive-web-design"
                rel="noreferrer"
                target="_blank"
              >
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            JavaScript &lt;
            <span>
              Mahara Tech &rarr;
              <a
                style={colorStyle}
                href={javascript}
                rel="noreferrer"
                target="_blank"
              >
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            JavaScript-ES6 &lt;
            <span>
              Mahara Tech &rarr;
              <a style={colorStyle} href={es6} rel="noreferrer" target="_blank">
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            Javascript algorithms and data structures &lt;
            <span>
              www.freecodecamp.org &rarr;
              <a
                style={colorStyle}
                href="https://freecodecamp.org/certification/fcc3c945485-367e-4e0e-b71a-e5d55ba0ad39/javascript-algorithms-and-data-structures-v8"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            TypeScript &lt;
            <span>
              Mahara Tech &rarr;
              <a
                style={colorStyle}
                href={typescript}
                rel="noreferrer"
                target="_blank"
              >
                Certificate
              </a>
            </span>
            &gt;
          </li>
          <li>
            Front end development libraries &lt;
            <span>
              www.freecodecamp.org &rarr;
              <a
                style={colorStyle}
                href="https://freecodecamp.org/certification/fcc3c945485-367e-4e0e-b71a-e5d55ba0ad39/front-end-development-libraries"
                rel="noreferrer"
                target="_blank"
              >
                Certificate
              </a>
            </span>
            &gt;
          </li>
        </ul>
      </div>

      <div className="section education">
        <h2>Education</h2>
        <p>Bachelor of Physics and Electronics</p>
        <p>– Faculty of Science, Assiut University</p>
      </div>
      {/* ---------------------------------------- */}
      <div className="section work-experiance">
        <h2>Work Experiance</h2>
        <div className="experiance">
          <div>
            <p className="workExp">
              Store In-Charge | Retail Sales | Customer Service
            </p>
            <p>
              - Plus Express LLC (Dubai, Alain, Abu Dhabi, UAE) June 2020 - June
              2022
            </p>
            <ul>
              <li>
                Selling online through various applications (Instashop,
                Elgrocer, Swan, Talabat, Noon, Amazon, and WhatsApp).
              </li>
              <li>Updating Stock and prices on system and applications.</li>
              <li>
                Recording and sending all details needed and daily sales
                reports.
              </li>
              <li>
                Controlling cash and store expenses. Inventory Controller and
                purchase for all needed stock.
              </li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <p className="workExp">Admin, Accountant Assistant | Cashier</p>
            <p>- Café Bubble Lounge (Dubai, UAE) June 2016 - June 2020</p>
            <ul>
              <li>
                Greet and assist visitors, taking orders and directing them to
                appropriate personnel.
              </li>
              <li>
                Produced and distributed invoices and financial documents.
              </li>
              <li>Documented business expenses and sales.</li>
              <li>
                Balanced reports submitting for approval and verification.
              </li>
              <li>Preparing month-end, quarterly, and year-end closings.</li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <p className="workExp">Sales Representative</p>
            <p>- United Group (Assiut, Egypt) July 2015 - May 2016</p>
            <ul>
              <li>Inform and support staff on media and marketing outcomes.</li>
              <li>
                Compiled product, market, and customer data to forecast accurate
                sales and profit projections.
              </li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <p className="workExp">Medical Representative</p>
            <p>- Al Nahar Hearing Aids (Assiut, Egypt) June 2013 - June 2015</p>
            <ul>
              <li>
                Arrange appointments with doctors, pharmacists, and medical
                teams to raise awareness of the latest product launches.
              </li>
              <li>
                Follow up with customers after completed sales to assess
                satisfaction and resolve any technical or service concerns.
              </li>
              <li>Performing audiometry, molding, and adjusting devices</li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <p className="workExp">Reserve officer</p>
            <p>
              - Egyptian Armed Force (Suez, Egypt) October 2010 - March 2013
            </p>
            <ul>
              <li>Administration Officer and Team leader.</li>
            </ul>
            <hr></hr>
          </div>
          <div>
            <p className="workExp">Salesman</p>
            <p>
              - Ashraf Sophy Jewelry Shop (Assiut, Egypt) July 2008 - September
              2010
            </p>
            <ul>
              <li>Approaching potential clients, offering advice.</li>
              <li>
                Helping hesitant customers make a decision, closing sales,
                preventing store thefts, and reporting to upper management.
              </li>
            </ul>
            <hr></hr>
          </div>
        </div>
        {/* ---------------------------------------- */}
      </div>
    </div>
  );
}

export default About;
