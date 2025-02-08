import { Typography, Table, Col } from 'antd';
import React from 'react';
import { CheckCircleTwoTone, CloseCircleOutlined } from '@ant-design/icons';

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
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '2',
      feature: 'No repairs or updates',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '3',
      feature: 'No listing or showings',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '4',
      feature: 'No offer negotiation or buyer demands',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '5',
      feature: 'No home sale contingency on next home purchase',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '6',
      feature: 'No expensive double mortgage, bridge loan, or interim housing',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
    },
    {
      key: '7',
      feature: 'Close in as little as 10 days',
      traditional: <CloseCircleOutlined style={{ color: 'gray' }} />,
      prudential: <CheckCircleTwoTone twoToneColor="#1890ff" />,
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
        bordered
        className='offerTable'
      />
      </Col>
    </div>
  );
};

export default OfferDetails;
