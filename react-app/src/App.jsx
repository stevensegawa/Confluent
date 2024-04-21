import React from 'react';

const MenuItem = ({ icon, title, description, onClick }) => (
  <button
    className="flex gap-4 items-center py-2 pl-4 text-left w-full hover:bg-gray-100"
    onClick={onClick}
  >
    <img src={icon} alt="" className="h-6 w-6 mr-2" />
    <div className="flex flex-col">
      <p className="text-base font-medium text-neutral-700">{title}</p>
      {description && <p className="text-sm text-neutral-500">{description}</p>}
    </div>
  </button>
);

const App = () => {
  const handleAskQuestionClick = () => {
    console.log("Ask a Question clicked");
  };

  const handleTranslateMeetingClick = () => {
    console.log("Translate Meeting clicked");
  };

  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec7d26545bf0486a51dbac6931f56f0cc33ec7530171993c8448332fc410cb3c?apiKey=0370e965384e45f0b8dd49d83b845e0e",
      title: "Ask a Question",
      description: "Ask Gemini questions based on the current meeting",
      onClick: handleAskQuestionClick,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d030d37f11d9930ba52c8df77a9d6c1b0d6c8b4f46d9c1abfb909699c1e06235?apiKey=0370e965384e45f0b8dd49d83b845e0e",
      title: "Translate Meeting",
      description: "Generate translated subtitles of the meeting in real time",
      onClick: handleTranslateMeetingClick,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-white rounded-lg max-w-[480px]">
      <header className="flex items-center justify-between py-2 px-4 bg-gray-100">
        <div>
          <h1 className="text-xl font-medium text-neutral-800 m-0">AI Companion</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4dd1db1f66378df7b51571bb4e43c00c30cee3a1e5de94c84f017bb81fbee93?apiKey=0370e965384e45f0b8dd49d83b845e0e"
            alt="AI Companion logo"
            className="h-6 w-6 m-0"
          />
        </div>
      </header>
      <nav className="flex flex-col px-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default App;