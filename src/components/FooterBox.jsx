import { Col, Row } from 'antd'
import React from 'react'
import { Typography } from 'antd'
import Link from 'antd/es/typography/Link'
const { Text } = Typography
function FooterBox () {
  return (
    <div className='footer'>
      <Col style={{margin:'0 auto'}} span={14}>
        <Text className={'footerText'}>
          Prudential Homes of America is only offered in select neighborhoods
          where we have buyers active. Not all homes will receive an offer and
          estimated offers presented will be validated and underwritten prior to
          completing a final transaction. Closing times may vary.
        </Text>
        <Row>
          <Col  xs={24} md={12}>
            <Text className={'footerText'}>
              © 2021 Prudential Homes of America. All rights reserved.
            </Text>
          </Col>
          <Col  xs={24} md={12}>
            <Text className={'footerText'}>
              <Link style={{margin:'0px 20px'}} href='#' >Privacy Policy</Link> | <Link style={{margin:'0px 20px'}} href='#'>Terms of Use</Link>
            </Text>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default FooterBox
