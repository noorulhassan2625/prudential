import React from 'react';
import { Card, Typography, Tag } from 'antd';
import { HomeOutlined, CarOutlined, ArrowsAltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const properties = [
  {
    price: '$777,000',
    address: '1131 W Orangethorpe Avenue Fullerton, CA',
    beds: 3,
    baths: 2,
    size: 1280,
    daysSold: 30,
    image: '/media/propertyBg1.webp',
  },
  {
    price: '$769,000',
    address: '29889 Smugglers Point Drive Canyon Lake, CA',
    beds: 4,
    baths: 3,
    size: 3700,
    daysSold: 27,
    image: '/media/propertyBg2.webp',
  },
  {
    price: '$1,039,999',
    address: '10928 Caminito Cerezo San Diego, CA',
    beds: 4,
    baths: 2,
    size: 1784,
    daysSold: 10,
    image: '/media/propertyBg3.webp',
  },
];

const RecentlySold = () => {
  return (
    <div className='recently-sold-section'>
      <Title level={3} className='sectionTitle' style={{paddingBottom: '20px'}}>
        Recently Sold with Prudential Homes of America.
      </Title>
      <div className='recently-sold-container'>
        {properties.map((property, index) => (
          <Card
            key={index}
            className='recently-sold-card'
            cover={<img alt='Property' src={property.image} className='property-image' />}
          >
            <Tag color='blue' className='sold-tag'>
              Sold in under {property.daysSold} days
            </Tag>
            <Title level={4}>{property.price}</Title>
            <Text>{property.address}</Text>
            <div className='property-info'>
              <Text><HomeOutlined /> {property.beds}</Text>
              <Text><CarOutlined /> {property.baths}</Text>
              <Text><ArrowsAltOutlined /> {property.size}</Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlySold;
