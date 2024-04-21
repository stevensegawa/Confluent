import * as React from "react";

function Question() {
  const translationData = [
    {
      id: 1,
      text: "Translation 1",
    },
    {
      id: 2,
      text: "Translation 2",
    },
  ];

  return (
    <>
      <div className="ai-companion">
        <header className="header">
          <h1 className="title">AI Companion</h1>
          <div className="actions">
            <button className="disconnect-btn">Disconnect</button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34119ff3cb8d40b9d1d5533ea1fbf78a0c7eba302427c6e08c2d52c5e124e9f?apiKey=93b85b85ba47473ca87f2bafdb8f550f&"
              alt="Disconnect icon"
              className="disconnect-icon"
            />
          </div>
        </header>
        <main className="main-content">
          <section className="live-translation">
            <h2 className="section-title">Live Translation</h2>
            <div className="translation-input" />
            <h2 className="section-title">Gemini</h2>
            <div className="translation-output" />
          </section>
          <div className="send-icon-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a224d81bacf85a0d02767d6e2dd7f6c15843e28786cafbc44404b8f135ad238?apiKey=93b85b85ba47473ca87f2bafdb8f550f&"
              alt="Send icon"
              className="send-icon"
            />
          </div>
        </main>
      </div>
      <style jsx>{`
        .ai-companion {
          background-color: #fff;
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 8px 21px;
        }

        .title {
          color: #202124;
          font: 500 19px Roboto, sans-serif;
          margin: 0;
        }

        .actions {
          display: flex;
          gap: 17px;
          font-size: 14px;
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.14px;
          line-height: 116.9%;
        }

        .disconnect-btn {
          font-family: Roboto, sans-serif;
          border-radius: 10px;
          background-color: #ea4335;
          padding: 9px 17px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          color: white;
        }

        .disconnect-icon {
          width: 25px;
          height: auto;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          padding: 0 12px;
          margin-top: 13px;
        }

        .section-title {
          color: #202124;
          font: 400 15px Roboto, sans-serif;
          margin: 33px 0 0;
        }

        .translation-input,
        .translation-output {
          border-radius: 5px;
          border: 1px solid rgba(204, 204, 204, 0.44);
          background-color: #f6f6f6;
          width: 100%;
          max-width: 344px;
          margin-top: 17px;
        }

        .translation-input {
          height: 116px;
        }

        .translation-output {
          height: 457px;
          margin-top: 24px;
        }

        .send-icon-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          background-color: #f1f3f4;
          border-radius: 25px;
          width: 100%;
          padding: 10px 10px;
          max-width: 340px;
          height: 35px;
          margin-top: 39px;
        }

        .send-icon {
          width: 24px;
          height: 24px;
          margin-left: auto;
        }
      `}</style>
    </>
  );
}

export default Question;