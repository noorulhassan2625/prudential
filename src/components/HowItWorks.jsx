import { Image, Steps } from 'antd'
import Title from 'antd/es/typography/Title'

const { Step } = Steps

const stepsData = [
  {
    title: 'Tell us about your home and speak to our offer specialist',
    description:
      'This helps us get the best possible offer for your home from our networks of investors and cash buyers.',
    image: '/media/agentImage.png'
  },
  {
    title: 'We use your local neighborhood data',
    description:
      'We use your local neighborhood data and our extensive investor network to find the best offer for your home.',
    image: '/media/findhome.png'
  },
  {
    title: 'Accept your cash offer and choose your move date',
    description:
      'Get paid in as few as 10 days, with no additional fees, agent commission, or prep-work required.',
    image: '/media/cashwallet.png'
  }
]

const HowItWorks = () => {
  return (
    <div className="steps-container" style={{ textAlign: 'center', padding: '20px 90px' }}>
      <Title className="sectionTitle">
        Sell your home for a competitive price in as few as 10 days, with no additional fees, agent commission, or prep-work.
      </Title>

      {/* Images centered above each step */}
      <div className="steps-wrapper" style={{ display: 'flex', justifyContent: 'center', gap: '70px', marginBottom: '20px' }}>
        {stepsData.map((step, index) => (
          <div key={index} style={{ flex: 1, textAlign: 'center', maxWidth: '300px' }}>
            <Image width={100} src={step.image} preview={false} />
          </div>
        ))}
      </div>

      {/* Steps with properly centered text */}
      <Steps current={1} labelPlacement="vertical" style={{ maxWidth: '100%', margin: '0 auto' }}>
        {stepsData.map((step, index) => (
          <Step 
            key={index} 
            title={<div className='stepTitle' style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>{step.title}</div>} 
            description={<div className='stepText' style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>{step.description}</div>} 
          />
        ))}
      </Steps>
    </div>
  )
}

export default HowItWorks
