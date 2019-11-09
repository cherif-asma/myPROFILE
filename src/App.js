import React from 'react';

import Profile from  './components/Profile';

const obj = {
  photo:"/profile.png",
	Name:{firstName:"Cherif", lastName:"Asma"},
	profileLink:"https://www.linkedin.com/feed/"
}

function App() {
  return (
    <div>
      <Profile details={obj} />
    </div>
  );
}

export default App;
