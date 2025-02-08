import { Row, Col, Typography } from 'antd';
import ImageDisplay from './subComponents/ImageDisplay';
import ActionButton from './subComponents/ActionButton';

const { Title } = Typography;

const logos = [
  '/media/ABI.png',
  '/media/FairTrade.png',
  '/media/HomeGo.png',
  '/media/HomeVestors.png',
  '/media/ibuyhomes.png',
  '/media/MJWInvestments.png',
  '/media/Sundae.png',
  '/media/TriconLogo.png'
];

export default function InvestorLogos() {
  return (
    <div className="investorsLogo" style={{ overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
      <Title className="sectionTitle">
        Compare cash offers from the biggest investors and cash buyers in the USA
      </Title>
      
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
        {logos.slice(0, 4).map((logo, index) => (
          <Col key={index} xs={12} sm={6}>
            <ImageDisplay className="logo" imageLink={logo} width={'160PX'} preview={false} />
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
        {logos.slice(4, 8).map((logo, index) => (
          <Col key={index} xs={12} sm={6}>
            <ImageDisplay className="logo" imageLink={logo} width={'160PX'} preview={false} />
          </Col>
        ))}
      </Row>
      <div style={{ margin: '50px 0px'  }}>
          <ActionButton
            buttonClass={'simpleButton'}
            buttonText={
              <>
               View your offers
              </>
            }
          />
        </div>
    </div>
  );
}
