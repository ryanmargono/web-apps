import { Card, Col, Form, Progress, Row, Select, Switch, Typography } from 'antd';

export const DetailsStep = () => {
  return (
    <Row style={{ minHeight: '100%' }}>
      <Col span={8} style={{ padding: '50px', paddingTop: 0 }}>
        <Progress steps={3} percent={100} showInfo={false} />
        <Typography.Title style={{ margin: 0, marginTop: '25px' }} level={3}>
          Almost there...
        </Typography.Title>
        <Typography.Title level={5} style={{ opacity: '0.5' }}>
          Give me some final details and I'll get this written for you!
        </Typography.Title>
      </Col>
      <Col span={16}>
        <Card style={{ backgroundColor: 'white', padding: '25px' }}>
          <div style={{ padding: 0 }}>
            <Form.Item
              name='usePrimarySources'
              label={
                <Typography.Title style={{ margin: 0 }} level={5}>
                  Use primary sources
                </Typography.Title>
              }
            >
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item
              name='citationFormat'
              label={
                <Typography.Title style={{ margin: 0 }} level={5}>
                  Citation format
                </Typography.Title>
              }
            >
              <Select>
                <Select.Option value='MLA'>MLA</Select.Option>
                <Select.Option value='Chicago'>Chicago</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
