import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import ImageDisplay from './subComponents/ImageDisplay';
import ActionButton from './subComponents/ActionButton';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`topHeader ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(55, 106, 206, 0.1)' : 'none',
        padding: '10px 20px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <Row gutter={[16, 16]} justify='space-between' align='middle' style={{ margin: 0, width: '100%', flexWrap: 'nowrap' }}>
        <span style={{ flexShrink: 0 }}>
          <ImageDisplay
            className='logo'
            imageLink='https://start.prudentialhomes.org/assets/logo_normal.webp'
            width={'160px'}
            preview={false}
          />
        </span>
        <div style={{ flexShrink: 0, maxWidth: '100%' }}>
          <ActionButton
            buttonClass={'simpleButton'}
            buttonText={
              <>
                Get Your Offer Faster <br /> (903) 300-5677
              </>
            }
          />
        </div>
      </Row>
    </div>
  );
}

export default Header;