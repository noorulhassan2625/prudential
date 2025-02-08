import { Card, Divider, Typography } from 'antd'
import Contentbox from './Contentbox'

const { Text } = Typography

export default function CardBox ({ name, goal, review, image }) {
  return (
    <Card
      style={{ width: 300, textAlign: 'center' }}
      cover={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img width='70px' alt={name} style={{marginTop:'30px'}} src={image} />
        </div>
      }
    >
      <Contentbox 
        titleClass='testimonialsTitle' 
        titleContent={name} 
        textClass='testimonialsText' 
        textContent={goal} 
      />
      <Divider />
      <Text className='testimonialsText'>{review}</Text>
    </Card>
  )
}
