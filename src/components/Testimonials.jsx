import { Row, Col, Typography } from 'antd'
import CardBox from './subComponents/CardBox'

const { Title } = Typography

const testimonials = [
  { 
    name: 'William S.', 
    goal: 'Sold with Prudential Homes of America', 
    review: 'My experience with Prudential Homes of America was quick, seamless, and offered the flexibility I needed. By providing an all-cash offer with a quick and flexible closing date, they made things very easy for me.', 
    image: '/media/person1.webp' 
  },
  { 
    name: 'Bao W.', 
    goal: 'Sold with QuickSell Realty', 
    review: 'Selling with QuickSell Realty was straightforward and stress-free. I got a competitive cash offer and closed on my own terms.', 
    image: '/media/person2.webp' 
  },
  { 
    name: 'Russell E.', 
    goal: 'Sold with Trusted Home Buyers', 
    review: 'A smooth process from start to finish! The team was professional, and I appreciated the flexibility in choosing my closing date.', 
    image: '/media/person3.webp' 
  }
]

export default function Testimonials () {
  return (
    <div className='testimonials-container'>
      <Title className='sectionTitle'>
        Compare cash offers from the biggest investors and cash buyers in the USA
      </Title>
      <Row gutter={[16, 16]} justify='center'>
        {testimonials.map((testi, index) => (
          <Col key={index} xs={24} md={8}>
            <div className="card-wrapper">
              <CardBox 
                name={testi.name} 
                goal={testi.goal} 
                review={testi.review} 
                image={testi.image} 
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
