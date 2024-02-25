import { Button, Card, Col, Input, Progress, Row, Typography } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import { Form } from 'antd';

export const ThesisStep = () => {
  return (
    <Row style={{ minHeight: '100%' }}>
      <Col span={8} style={{ padding: '50px', paddingTop: 0 }}>
        <Progress steps={3} percent={66} showInfo={false} />
        <Typography.Title style={{ margin: 0, marginTop: '25px' }} level={3}>
          What's your paper about?
        </Typography.Title>
        <Typography.Title level={5} style={{ opacity: '0.5' }}>
          Let me know the paper's prompt and your thesis statement. I can generate
          one for you if you don't have one!
        </Typography.Title>
      </Col>
      <Col span={16}>
        <Card style={{ backgroundColor: 'white', padding: '25px' }}>
          <div style={{ padding: 0 }}>
            <Typography.Title style={{ margin: 0, marginBottom: '10px' }} level={5}>
              Topic
            </Typography.Title>
            <Form.Item name='prompt'>
              <Input.TextArea
                autoSize={{ minRows: 4, maxRows: 4 }}
                style={{ padding: '20px' }}
                placeholder='Examine the impact of the 19th-century Industrial Revolution on society and the economy. Discuss key innovations, social changes, and economic developments, considering both positive and negative effects on different social groups.'
              />
            </Form.Item>

            <Row
              style={{
                marginTop: '25px',
                marginBottom: '10px',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography.Title style={{ margin: 0 }} level={5}>
                Thesis statement
              </Typography.Title>
              <Button icon={<EditOutlined />}> Generate </Button>
            </Row>

            <Form.Item name='thesis'>
              <Input.TextArea
                autoSize={{ minRows: 4, maxRows: 4 }}
                style={{ padding: '20px' }}
                placeholder='The 19th-century Industrial Revolution had a big impact with new technology, social changes, and economic shifts, showing both progress and challenges.'
              />
            </Form.Item>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
