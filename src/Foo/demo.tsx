import React from 'react';

import { Form } from '@ant-design/compatible';
import { Input } from 'antd';

const App = ({ form }: { form: any }) => {
  const { getFieldDecorator } = form;
  return (
    <Form>
      <Form.Item label="Title">
        {getFieldDecorator('title', {})(<Input />)}
      </Form.Item>
      <Form.Item label="Title">
        {getFieldDecorator('title', {})(<Input />)}
      </Form.Item>
      <Form.Item label="age">
        {getFieldDecorator('age', {})(<Input />)}
      </Form.Item>
      {JSON.stringify(form.getFieldsValue(), null, 2)}
    </Form>
  );
};

const Demo = Form.create({})(App);

export default Demo;
