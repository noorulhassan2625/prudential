import { useState, useEffect, useCallback } from 'react';
import { Row, Col, Input, message, Button } from 'antd';
import ImageDisplay from './subComponents/ImageDisplay';
import Contentbox from './subComponents/Contentbox';

export default function HeroSection() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for the button

  const getUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('User Coordinates:', latitude, longitude);
        fetchAddress(latitude, longitude);
      }, (error) => {
        message.error('Location access denied!');
        console.error('Error getting location:', error);
      });
    } else {
      message.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const fetchAddress = async (lat, lng) => {
    try {
      setLoading(true); // Set loading to true when fetching the address
      const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY; // Accessing the API key from the environment variable
      console.log('api key:', apiKey);
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`);
      const data = await response.json();
      if (data.status === 'OK' && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        console.log('User Address:', formattedAddress);
        setAddress(formattedAddress); // This will set the address in the input field
        
        // Open the URL in a new tab with the address
        window.open(`https://checkout.alyson.ai/address=${encodeURIComponent(formattedAddress)}`, '_blank');
      } else {
        message.error('Failed to fetch address.');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      message.error('Error fetching address.');
    } finally {
      setLoading(false); // Set loading to false after the address is fetched
    }
  };

  return (
    <Row className='hero' justify='center' align='middle'>
      <Col className='hero-content' style={{ padding: '60px' }} xs={24} md={12}>
        <Contentbox
          titleClass={'mainTitle'}
          titleContent={'Who will win? Who can close in 7 days?'}
          textClass={'mainText'}
          textContent={'Compare the top real estate agents and the largest investor network to find out who will get you the best price and who will close the fastest.'}
        />
        <Input.Search
          placeholder='Enter property address'
          enterButton={
            <Button type='primary' loading={loading}>
              View your offers
            </Button>
          }
          size='large'
          className='searchBar addressInput'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Col>
      <Col xs={24} md={12}>
        <ImageDisplay
          className='logo'
          imageLink='/media/dual-path-hero-image.webp'
          width={'100%'}
          preview={false}
        />
      </Col>
    </Row>
  );
}
