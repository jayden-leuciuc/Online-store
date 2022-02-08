import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';

import './Site-banner.styles.scss';

function SiteBanner() {
  const [isActive, setActive] = useState('false');

  const toggleBanner = () => {
    setActive(false);
  };
  return (
    <div className={isActive ? 'site-banner-visible' : 'site-banner-invisible'}>
      <h4>Take 20% off your next order with Code 20next at checkout</h4>

      <VscClose onClick={toggleBanner} className='cancel-button' />
    </div>
  );
}
export default SiteBanner;
