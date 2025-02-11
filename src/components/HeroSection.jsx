import { Row, Col, Input, Typography } from 'antd'
import ImageDisplay from './subComponents/ImageDisplay'
import Contentbox from './subComponents/Contentbox'

export default function HeroSection () {
  return (
    <Row className='hero' justify='center' align='middle'>
      <Col className='hero-content' style={{ padding: '60px' }} xs={24} md={12}>
        <Contentbox
          titleClass={'mainTitle'}
          titleContent={'Who will win? Who can close in 7 days?'}
          textClass={'mainText'}
          textContent={
            'Compare the top real estate agents and the largest investor network to find out who will get you the best price and who will close the fastest.'
          }
        />
        <Input.Search
          placeholder='Enter property address'
          enterButton='View your offers'
          size='large'
          className='searchBar'
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
  )
}
