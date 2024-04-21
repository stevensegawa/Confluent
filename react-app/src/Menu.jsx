import * as React from "react";

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function Input({ label, type, id, placeholder }) {
  return (
    <>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
      />
    </>
  );
}

function Menu() {
  return (
    <>
      <main className="main-container">
        <header className="header">
          <h1 className="title">AI Companion</h1>
        </header>
        <section className="content">
          <h2 className="subtitle">Join a Meeting</h2>
          <Input
            label="Meeting Code"
            type="text"
            id="meetingCode"
            placeholder="Meeting Code"
          />
          <div className="separator">
            <hr className="line" />
            <span className="or">or</span>
            <hr className="line" />
          </div>
          <Input
            label="Personal Link"
            type="text"
            id="personalLink"
            placeholder="Personal Link"
          />
          <Input
            label="Personal Link"
            type="text"
            id="personalLink"
            placeholder="Select Language"
          />
          <Button>Join</Button>
        </section>
      </main>

      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .main-container {
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          padding: 24px 11px 80px 29px;
          background-color: #fff;
          font-size: 15px;
          color: #c3c3c3;
          font-weight: 700;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          font-size: 19px;
          color: #202124;
          font-weight: 500;
        }

        .title {
          font-family: Roboto, sans-serif;
          margin: 0;
        }

        .logo {
          width: 29px;
          aspect-ratio: 1.03;
          object-fit: contain;
        }

        .content {
          margin-top: 34px;
        }

        .subtitle {
          color: #202124;
          font-family: Roboto, sans-serif;
          margin: 0;
        }

        .input {
          width: 100%;
          padding: 12px 11px;
          border: 1px solid rgba(195, 195, 195, 0.6);
          border-radius: 5px;
          background-color: transparent;
          font-family: Roboto, sans-serif;
          font-weight: 400;
          margin-top: 9px;
        }

        .separator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #c4c4c4;
          margin-top: 14px;
        }

        .line {
          flex: 1;
          height: 2px;
          background-color: rgba(196, 196, 196, 0.5);
          border: none;
        }

        .or {
          font-family: Roboto, sans-serif;
        }

        .language-select {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 12px;
          border: 1px solid rgba(195, 195, 195, 0.63);
          border-radius: 5px;
          background-color: transparent;
          margin-top: 17px;
          font-weight: 400;
        }

        .language-label {
          font-family: Roboto, sans-serif;
          flex: 1;
        }

        .language-icon {
          width: 17px;
          aspect-ratio: 2.13;
          object-fit: contain;
        }

        .button {
          display: block;
          width: fit-content;
          margin-left: auto;
          margin-top: 16px;
          padding: 9px 17px;
          border: none;
          border-radius: 5px;
          background-color: #2684fc;
          color: #fff;
          font: 14px/116.9% Roboto, sans-serif;
          letter-spacing: 0.14px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Menu;