import { Button, Card, Col, Layout, Row, Typography } from 'antd';

import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Layout>
      <Layout.Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'white',
          width: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <Typography.Text> Paper Pilot </Typography.Text>
        <Button shape='circle' size='large'>
          <Typography.Text> R </Typography.Text>
        </Button>
      </Layout.Header>
      <Layout.Content style={{ minHeight: '100vh' }} className='container'>
        <Row
          style={{ display: 'flex', justifyContent: 'center' }}
          className='container'
        >
          <Col span={18}>
            <Outlet />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
