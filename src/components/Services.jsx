import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Training</h3>
<p>We offer short-term bootcamps and long-term programs focused on making learners industry-ready. With hands-on projects, mentorship, and up-to-date tech stacks, our training equips students and professionals with practical, job-ready skills in areas like web development, AI, and cloud computing. Our goal is to bridge the gap between theoretical knowledge and real-world application.

</p>        </div>
        <div className="service-card">
          <h3>Product Development</h3>
          <p>We build technology products both independently and with clients—turning ideas into functional, scalable solutions. From design to deployment, we follow a collaborative process to deliver high-quality apps, platforms, and tools that solve real-world problems.Each product is crafted with a focus on user experience, performance, and long-term value.


.</p>
        </div>
        <div className="service-card">
          <h3>Tech Services</h3>
          <p>Our services cover end-to-end software development, system architecture, and AI integration. Whether it’s modernizing legacy systems or building custom solutions from scratch, we help businesses leverage the right technologies to grow and innovate.We align our tech expertise with your business goals to deliver impactful outcomes.




</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
