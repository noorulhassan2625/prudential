import React from 'react';
import { Col, Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const faqData = [
  { question: 'Who is buying my home?', answer: 'Your home is purchased by vetted real estate investors or institutional buyers.' },
  { question: 'Do I need an agent to participate?', answer: 'No, you do not need an agent, but you can choose to have one if you prefer.' },
  { question: 'Can I sell a home that\'s currently listed?', answer: 'Yes, you can sell a home that is currently listed, subject to any agreements with your agent.' },
  { question: 'Do I have to move right away?', answer: 'No, you can negotiate a move-out date that works for you.' },
  { question: 'Is there a cost to request offers?', answer: 'No, requesting an offer is completely free and comes with no obligation.' },
  { question: 'Am I obligated to accept an offer?', answer: 'No, you are not obligated to accept any offer.' }
];

const FAQ = () => {
  return (
    <div className='faq-section'>
      <Title level={3} className='sectionTitle' style={{paddingBottom: '20px'}}>Frequently Asked Questions</Title>
      <Col span={24} className='faq-description'>
      <Collapse accordion className='faq-collapse'>
        {faqData.map((item, index) => (
          <Panel header={item.question} key={index} className='faq-panel'>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
      </Col>
    </div>
  );
};

export default FAQ;
