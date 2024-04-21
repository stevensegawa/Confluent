import * as React from "react";

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function Divider() {
  return (
    <div className="divider">
      <hr className="line" />
      <div className="text">or</div>
      <hr className="line" />
    </div>
  );
}

function MyComponent() {
  const ext = [
    "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1c9c53e0b23f46f7ae1d8a7d660b1ced",
    "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F4b6e4f71a13f4e0b9e5e908a5b0d6a85",
    "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1c9c53e0b23f46f7ae1d8a7d660b1ced",
    "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F4b6e4f71a13f4e0b9e5e908a5b0d6a85",
  ];

  return (
    <>
      <main className="container">
        <header className="header">
          <h1 className="title">AI Companion</h1>
          <img src={ext[0]} alt="" className="logo" />
        </header>
        <section className="content">
          <h2 className="subtitle">Join a Meeting</h2>
          <input
            type="text"
            className="input meeting-code"
            placeholder="Meeting Code"
            aria-label="Enter Meeting Code"
          />
          <Divider />
          <input
            type="text"
            className="input personal-link"
            placeholder="Personal Link"
            aria-label="Enter Personal Link"
          />
          <div className="language-select">
            <label htmlFor="language" className="language-label">
              Select Language
            </label>
            <img src={ext[3]} alt="" className="language-icon" />
          </div>
          <Button>Join</Button>
        </section>
      </main>

      <style jsx>{`
        .container {
          background-color: #fff;
          color: #c3c3c3;
          display: flex;
          flex-direction: column;
          font-size: 15px;
          font-weight: 700;
          margin: 0 auto;
          max-width: 480px;
          padding: 24px 13px 80px 29px;
          width: 100%;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .title {
          color: #202124;
          font: 500 19px/1 Roboto, sans-serif;
          margin: 0;
        }

        .logo {
          width: 25px;
          height: 25px;
          object-fit: contain;
        }

        .content {
          margin-top: 37px;
        }

        .subtitle {
          color: #202124;
          font: 700 15px/1 Roboto, sans-serif;
          margin: 0 0 9px;
        }

        .input {
          background-color: transparent;
          border: 1px solid rgba(195, 195, 195, 0.6);
          border-radius: 5px;
          font: 400 15px/1 Roboto, sans-serif;
          padding: 12px 11px;
          width: 100%;
        }

        .meeting-code {
          margin-bottom: 14px;
        }

        .divider {
          align-items: center;
          color: #c4c4c4;
          display: flex;
          gap: 6px;
          justify-content: center;
          margin: 14px 0;
        }

        .line {
          border: none;
          border-top: 2px solid rgba(196, 196, 196, 0.5);
          flex: 1;
        }

        .text {
          font: 700 15px/1 Roboto, sans-serif;
          white-space: nowrap;
        }

        .personal-link {
          margin-bottom: 17px;
        }

        .language-select {
          align-items: center;
          background-color: transparent;
          border: 1px solid rgba(195, 195, 195, 0.63);
          border-radius: 5px;
          display: flex;
          font-weight: 400;
          gap: 20px;
          margin-bottom: 16px;
          padding: 12px 38px 12px 11px;
        }

        .language-label {
          flex: 1;
          font: 400 15px/1 Roboto, sans-serif;
        }

        .language-icon {
          border: 2px solid rgba(128, 128, 128, 0.5);
          height: 16px;
          margin: auto 0;
          object-fit: contain;
          width: 36px;
        }

        .button {
          align-self: flex-end;
          background-color: #2684fc;
          border: none;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          font: 700 14px/116.9% Roboto, sans-serif;
          letter-spacing: 0.14px;
          padding: 9px 17px;
          text-align: center;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}