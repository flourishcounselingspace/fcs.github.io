// import React from "react";
// import './Home.css'
// function Home() {
//   return (
//     <div className="home-box">
//      <h1>Home component

//       </h1>
//     </div>

//   );

// }

// export default Home;

// ContentSections.js
import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      <section className="section" id="internships">
        <h2 className="title">Internship Opportunities</h2>
        <p>
          IMC provides structured internship programs designed for psychology students and professionals to gain practical experience in mental health and counseling. These internships offer hands-on exposure to clinical settings, research projects, and community engagement initiatives.
        </p>
        <ul className="home-box">
          <li>Work under the supervision of experienced psychologists and counselors.</li>
          <li>Gain insights into psychological assessments, therapy techniques, and client interactions.</li>
          <li>Develop essential skills in case studies, intervention planning, and ethical practices.</li>
          <li>Earn valuable certifications and recommendations for future career prospects.</li>
        </ul>
      </section>

      <section className="section" id="research">
        <h2 className="title">Research Opportunities</h2>
        <p>
          IMC encourages research-driven learning by providing opportunities for students, scholars, and professionals to contribute to psychological research.
        </p>
        <ul className="home-box">
          <li>Access to research projects in various psychology subfields.</li>
          <li>Guidance and mentorship from experts for thesis work, dissertations, and independent research.</li>
          <li>Collaboration opportunities for publishing research papers.</li>
          <li>Workshops and training sessions on research methodology, statistical analysis, and report writing.</li>
        </ul>
      </section>

      <section className="section" id="counseling">
        <h2 className="title">Counseling Services</h2>
        <p>
          IMC offers professional counseling services to support mental health and well-being.
        </p>
        <ul className="home-box">
          <li>Individual Counseling</li>
          <li>Group Counseling</li>
          <li>Career Counseling</li>
          <li>Online Counseling</li>
          <li>Workshops & Awareness Programs</li>
        </ul>
      </section>

      <section className="section" id="forum">
        <h2 className="title">Community Forum</h2>
        <p>
          The IMC Community Forum serves as a platform for psychology students, professionals, and mental health advocates to connect, share, and learn.
        </p>
        <ul className="home-box">
          <li>Facilitate discussions on psychological theories, mental health trends, and case studies.</li>
          <li>Provide a supportive space for students and professionals to seek advice.</li>
          <li>Organize Q&A sessions, webinars, and expert talks.</li>
          <li>Promote awareness campaigns and advocacy for mental health-related issues.</li>
        </ul>
      </section>

      <section className="section" id="jobs">
        <h2 className="title">Job Forum</h2>
        <p>
          IMC’s Job Forum is designed to bridge the gap between psychology graduates and employment opportunities.
        </p>
        <ul className="home-box">
          <li>A job portal listing career opportunities in counseling, clinical psychology, and research.</li>
          <li>Assistance with resume building, interview preparation, and professional networking.</li>
          <li>Career development workshops to enhance skills in therapy, assessments, and research.</li>
          <li>Collaboration with organizations for job placements and career guidance.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;