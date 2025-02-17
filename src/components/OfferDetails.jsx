import { Typography, Table, Col } from 'antd';
import React from 'react';
import {  CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

const { Title } = Typography;

const OfferDetails = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'Traditional Sale',
      dataIndex: 'traditional',
      key: 'traditional',
      align: 'center',
    },
    {
      title: 'Prudential Homes of America®',
      dataIndex: 'prudential',
      key: 'prudential',
      align: 'center',
    },
  ];

  const data = [
    {
      key: '1',
      feature: 'Cash offer within a week',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '2',
      feature: 'No repairs or updates',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '3',
      feature: 'No listing or showings',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '4',
      feature: 'No offer negotiation or buyer demands',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '5',
      feature: 'No home sale contingency on next home purchase',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '6',
      feature: 'No expensive double mortgage, bridge loan, or interim housing',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
    {
      key: '7',
      feature: 'Close in as little as 10 days',
      traditional: <CloseCircleFilled style={{ color: '#C5C8CD' ,fontSize:'20px' }} />,
      prudential: <CheckCircleFilled style={{ color: '#1192E5',fontSize:'20px'}} />,
    },
  ];

  return (
    <div className="offerDetails" style={{ padding: '50px' }}>
      <Title className="sectionTitle">
        Prudential Homes of America has helped thousands of homeowners sell
        without the stress of open houses or the high commissions of traditional
        listings.
      </Title>
      <Col span={16} style={{ margin: '0 auto' , paddingTop:'20px'}}>
      
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        className='offerTable'
      />
      </Col>
    </div>
  );
};

export default OfferDetails;
