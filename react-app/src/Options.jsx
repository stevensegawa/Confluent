import * as React from "react";

const MeetingFeature = ({ icon, title, description }) => (
  <button className="meeting-feature">
    <img src={icon} alt="" className="feature-icon" />
    <div className="feature-details">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  </button>
);

const meetingFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/442908170a4be5fe928c2fa2f20c8778aa5ad9adf5d37ffe04f83fc492c4123c?apiKey=93b85b85ba47473ca87f2bafdb8f550f&",
    title: "Translate Meeting",
    description: "Generate translated subtitles of the meeting in real time",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/532f8c5e59e58129da94741a1fb9942c1ce08638118ac53fe9b50dfedac0debe?apiKey=93b85b85ba47473ca87f2bafdb8f550f&",
    title: "Ask a Question",
    description: "Ask Gemini questions based on the current meeting",
  },
];

function Options() {
  return (
    <>
      <div className="ai-companion">
        <header className="header">
          <h1 className="title">AI Companion</h1>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e663825fe7bd263c4da70a38b5a30f5c6fe71e4659d45269f500d47d6ff2fb27?apiKey=93b85b85ba47473ca87f2bafdb8f550f&" alt="AI Companion logo" className="logo" />
        </header>
        <main className="main-content">
          {meetingFeatures.map((feature, index) => (
            <MeetingFeature key={index} {...feature} />
          ))}
        </main>
      </div>

      <style jsx>{`
        .ai-companion {
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          background-color: #fff;
          padding-bottom: 80px;
          font-weight: 400;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 21px 8px 4px;
          gap: 20px;
        }

        .title {
          font-size: 19px;
          color: #202124;
          font-weight: 500;
          font-family: Roboto, sans-serif;
          margin: 0;
        }

        .logo {
          width: 25px;
          aspect-ratio: 0.96;
          object-fit: contain;
        }

        .main-content {
          display: flex;
          flex-direction: column;
        }

        .meeting-feature {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 17px;
          padding: 8px 17px;
        }

        .feature-icon {
          width: 43px;
          aspect-ratio: 1.02;
          object-fit: contain;
          margin: auto 0;
        }

        .feature-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .feature-title {
          color: #202124;
          font: 15px Roboto, sans-serif;
          margin: 0;
        }

        .feature-description {
          color: rgba(0, 0, 0, 0.54);
          letter-spacing: 0.03px;
          margin-top: 4px;
          font: 13px Roboto, sans-serif;
        }
      `}</style>
    </>
  );
}

export default Options;