import React from 'react'
import { Typography } from 'antd'
const { Title, Text } = Typography
function Contentbox ({ titleClass, titleContent, textClass , textContent }) {
  return (
    <div>
      <Title className={titleClass}>{titleContent}</Title>
      <Text className={textClass}>{textContent}</Text>
    </div>
  )
}

export default Contentbox
