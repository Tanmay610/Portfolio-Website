import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Work <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>Car Detailing Studio</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led social media strategy, content creation,
              and branding to increase visibility and 
              customer engagement for a local automotive business.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Entrepreneur</h4>
                <h5>Tidy Touch (FMCG Startup)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Launched and scaled a cleaning products startup, 
              handling end-to-end operations including pricing, 
              customer acquisition, and market strategy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Executive</h4>
                <h5>College Technical Club</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed social media content and engagement,
              contributing to event promotions and improving 
              digital reach within the student community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
