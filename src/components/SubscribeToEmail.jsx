import React from 'react'
import { Col, Input, Row, Typography } from 'antd'
import Contentbox from './subComponents/Contentbox'
const { Title } = Typography
function SubscribeToEmail () {
  return (
    <div className='subscribeToEmail'>
      <Title style={{color:'white'}} className='sectionTitle'>
      See your estimated offer now
      </Title>
      <Col style={{justifyContent:'center',  margin:'0 auto'}} span={12}>
      <Input.Search
          placeholder='Enter property address'
          enterButton='View your offers'
          size='large'
          className='searchBar'
        />
      </Col>
      <Row>
        <Col span={8} style={{textAlign:'center'}}>
        <Contentbox
          titleClass={'counterTitle'}
          titleContent={'100K+'}
          textClass={'counterText'}
          textContent={
            'Offers Made'
          }
        />
        </Col>
        <Col span={8} style={{textAlign:'center'}}>
        <Contentbox
          titleClass={'counterTitle'}
          titleContent={'20K+'}
          textClass={'counterText'}
          textContent={
            'Homes Sold'
          }
        />
        </Col>
        <Col span={8} style={{textAlign:'center'}}>
        <Contentbox
          titleClass={'counterTitle'}
          titleContent={'$1B+'}
          textClass={'counterText'}
          textContent={
            'Home Value'
          }
        />
        </Col>
      </Row>
      
    </div>
  )
}

export default SubscribeToEmail
