import React from 'react';

// styles
import '../common/assets/styles/home.css';

// components
import HomeBanner from '../common/components/HomeBanner';

function HomePage() {
  return (
    <div className='h-screen bg-zinc-850'>
      <HomeBanner/>
    </div>
  );
}

export default HomePage;
