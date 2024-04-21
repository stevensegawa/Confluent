import * as React from "react";

function Translation() {
  return (
    <>
      <main className="main-container">
        <header className="header">
          <h1 className="title">AI Companion</h1>
          <div className="header-actions">
            <button className="disconnect-button">Disconnect</button>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/78be2bad16208ba265c239729c676658a6721ce55b33fe073f7b51e5caffd0c6?apiKey=93b85b85ba47473ca87f2bafdb8f550f&" alt="Settings icon" className="settings-icon" />
          </div>
        </header>
        <section className="content">
          <h2 className="section-title">Live Translation</h2>
          <div className="translation-container" />
        </section>
      </main>

      <style jsx>{`
        .main-container {
          background-color: #fff;
          max-width: 480px;
          width: 100%;
          padding: 0 0 18px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 8px 21px 8px 4px;
        }

        .title {
          color: #202124;
          font: 500 19px Roboto, sans-serif;
          margin: 0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 17px;
          font-size: 14px;
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.14px;
          line-height: 116.9%;
        }

        .disconnect-button {
          font-family: Roboto, sans-serif;
          border-radius: 10px;
          background-color: #ea4335;
          padding: 9px 17px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          color: white;
        }

        .settings-icon {
          width: 25px;
          aspect-ratio: 0.96;
          object-fit: contain;
          object-position: center;
        }

        .content {
          padding: 13px 19px 0;
          font-size: 15px;
          color: #202124;
        }

        .section-title {
          font-family: Roboto, sans-serif;
          font-weight: 400;
          margin: 0;
        }

        .translation-container {
          border-radius: 5px;
          border: 1px solid rgba(204, 204, 204, 0.44);
          background-color: #f6f6f6;
          margin-top: 13px;
          height: 725px;
        }
      `}</style>
    </>
  );
}

export default Translation;