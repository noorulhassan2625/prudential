import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

const logos = [
  '/media/ABIwhite.png',
  '/media/Fair_TradeWhite.png',
  '/media/HomeGoWhite.png',
  '/media/HomeVestorswhite.png',
  '/media/MJW_InvestmentsWhite.png',
  '/media/SundaeWhite.png',
  '/media/Tricon_LogoWhite.png',
]

function LogoSlider () {
  return (
    <div className='logo-slider-section'>
      <Title level={3} className='sectionTitle'>
        We have over 203 Cash Buyers near you. Enter your address to get
        started.
      </Title>
      <div style={{ padding: '0px 20px' }}>
        <Row>
          <Col span={6}>
            <Title
              level={3}
              className='titleBox'
              style={{ paddingBottom: '20px' }}
            >
              Compare offers from Cash Buyers including:
            </Title>
          </Col>
          <Col span={18}>
            <div className='logo-slider'>
              <div className='logo-track'>
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt='logo'
                    className='logo-item'
                    />
                ))}
              </div>
              <div className='logo-track'>
                {logos.map((logo, index) => (
                    <img
                    key={index + logos.length}
                    src={logo}
                    alt='logo'
                    className='logo-item'
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LogoSlider
