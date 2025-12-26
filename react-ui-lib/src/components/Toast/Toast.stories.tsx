import { useState } from 'react';
import { Toast } from './Toast';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
};

export default meta;

export const InfoToast = () => {
  const [show, setShow] = useState(true);
  return show ? <Toast message="This is an info toast" type="info" onClose={() => setShow(false)} /> : null;
};

export const SuccessToast = () => {
  const [show, setShow] = useState(true);
  return show ? <Toast message="Operation successful!" type="success" onClose={() => setShow(false)} /> : null;
};

export const ErrorToast = () => {
  const [show, setShow] = useState(true);
  return show ? <Toast message="Something went wrong" type="error" onClose={() => setShow(false)} /> : null;
};
