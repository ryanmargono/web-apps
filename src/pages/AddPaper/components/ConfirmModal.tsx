import { Button, Flex, Modal, Typography } from 'antd';

import { useState } from 'react';

export const ConfirmModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}> Generate essay </Button>
      <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
        <Flex vertical>
          <Typography.Title style={{ margin: 0, marginTop: '25px' }} level={3}>
            Ready to go?
          </Typography.Title>
          <Typography.Title level={5} style={{ opacity: '0.5' }}>
            Enjoy your free time / Save yourself the endless hours of planning,
            research, and writing
          </Typography.Title>
          <Typography.Title level={5} style={{ opacity: '0.5' }}>
            Due in an hour? No problem! / We'll have your essay delivered in minutes
          </Typography.Title>
          <Typography.Title level={5} style={{ opacity: '0.5' }}>
            All for the price of a cup of coffee
          </Typography.Title>
          <Button block>
            <Flex justify='space-between'>
              <Typography.Text> Generate my essay </Typography.Text>

              <Typography.Text> $5 </Typography.Text>
            </Flex>
          </Button>
        </Flex>
      </Modal>
    </>
  );
};
