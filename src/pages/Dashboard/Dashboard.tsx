import { Button, Card, Col, Progress, Row, Spin, Table, Typography } from 'antd';

import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '50px',
        }}
      >
        <Typography.Title style={{ margin: 0 }} level={3}>
          My papers
        </Typography.Title>
        <Link to='/new'>
          <Button> + Add Paper </Button>
        </Link>
      </div>
      <Row gutter={50}>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Card.Meta title='Essay prompt' description='Shortened Thesis' />
            <Progress style={{ marginTop: '25px' }} percent={100} status='active' />
          </Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};
