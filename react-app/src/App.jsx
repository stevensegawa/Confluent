import React from 'react'

const MenuItem = ({ icon, title, description, onClick }) => (
  React.createElement('button', { className: 'flex gap-4 justify-between py-2 pr-px pl-4 w-full text-left', onClick: onClick },
    React.createElement('img', { src: icon, alt: '', className: 'shrink-0 my-auto aspect-[1.02] w-[43px]' }),
    React.createElement('div', { className: 'flex flex-col justify-center' },
      React.createElement('div', { className: 'text-base text-neutral-800' }, title),
      React.createElement('div', { className: 'mt-1.5 text-sm tracking-normal text-black text-opacity-50' }, description)
    )
  )
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
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec7d26545bf0486a51dbac6931f56f0cc33ec7530171993c8448332fc410cb3c?apiKey=0370e965384e45f0b8dd49d83b845e0e&",
      title: "Ask a Question",
      description: "Ask Gemini questions based on the current meeting",
      onClick: handleAskQuestionClick,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d030d37f11d9930ba52c8df77a9d6c1b0d6c8b4f46d9c1abfb909699c1e06235?apiKey=0370e965384e45f0b8dd49d83b845e0e&",
      title: "Translate Meeting",
      description: "Generate translated subtitles of the meeting in real time",
      onClick: handleTranslateMeetingClick,
    },
  ];

  return (
    React.createElement('div', { className: 'flex flex-col pb-20 mx-auto w-full bg-white rounded-lg max-w-[480px]' },
      React.createElement('header', { className: 'flex gap-5 justify-between py-2 pr-1 pl-5 w-full text-xl font-medium text-neutral-800' },
        React.createElement('h1', { className: 'my-auto' }, 'AI Companion'),
        React.createElement('img', { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4dd1db1f66378df7b51571bb4e43c00c30cee3a1e5de94c84f017bb81fbee93?apiKey=0370e965384e45f0b8dd49d83b845e0e&', alt: 'AI Companion logo', className: 'shrink-0 aspect-[0.96] w-[25px]' })
      ),
      React.createElement('nav', null,
        menuItems.map((item, index) => (
          React.createElement(MenuItem, {
            key: index,
            icon: item.icon,
            title: item.title,
            description: item.description,
            onClick: item.onClick
          })
        ))
      )
    )
  );
};

export default App