import { useState } from 'react';
import { SidebarMenu } from './SidebarMenu';
import type { MenuItem } from './SidebarMenu';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
};

export default meta;

const items: MenuItem[] = [
  { label: 'Home' },
  { label: 'Products', children: [
      { label: 'Laptops' },
      { label: 'Phones' },
    ]
  },
  { label: 'About' },
];

export const Opened = () => {
  const [isOpen, setOpen] = useState(true);
  return <SidebarMenu items={items} isOpen={isOpen} onClose={() => setOpen(false)} />;
};

export const Closed = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <SidebarMenu items={items} isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
