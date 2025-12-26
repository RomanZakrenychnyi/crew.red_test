import { useState } from 'react';
import { Input } from './Input';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
};

export default meta;

export const Text = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={setValue} placeholder="Text input" />;
};

export const Password = () => {
  const [value, setValue] = useState('');
  return <Input type="password" value={value} onChange={setValue} placeholder="Password" />;
};

export const Clearable = () => {
  const [value, setValue] = useState('Hello');
  return <Input value={value} onChange={setValue} clearable />;
};
