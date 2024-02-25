import { Card, Col, Form, Progress, Radio, Row, Typography } from 'antd';

import { RequiredFormItem } from '../../../components/Form';

export const SubjectStep = () => {
  return (
    <Row style={{ minHeight: '100%' }}>
      <Col span={8} style={{ padding: '50px', paddingTop: 0 }}>
        <Progress steps={3} percent={33} showInfo={false} />
        <Typography.Title style={{ margin: 0, marginTop: '25px' }} level={3}>
          Let's kick things off!
        </Typography.Title>
        <Typography.Title level={5} style={{ opacity: '0.5' }}>
          Choose your education level and pick a subject. This will help me make your
          paper journey as breezy as possible.
        </Typography.Title>
      </Col>
      <Col span={16}>
        <Card style={{ backgroundColor: 'white', padding: '25px' }}>
          <div style={{ padding: 0 }}>
            <Typography.Title
              style={{ marginTop: 0, marginBottom: '15px' }}
              level={5}
            >
              Subject
            </Typography.Title>
            <Form>
              <RequiredFormItem>
                <Radio.Group>
                  <Radio.Button value='English' style={{ marginRight: '10px' }}>
                    <Typography.Text> English </Typography.Text>
                  </Radio.Button>
                  <Radio.Button value='History'>
                    <Typography.Text> History </Typography.Text>
                  </Radio.Button>
                </Radio.Group>
              </RequiredFormItem>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
