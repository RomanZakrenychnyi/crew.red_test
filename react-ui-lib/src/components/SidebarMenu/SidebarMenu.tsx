import { useState } from 'react';
import styles from './SidebarMenu.module.css';

export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <MenuList items={items} />
      </div>
    </>
  );
};

const MenuList = ({ items }: { items: MenuItem[] }) => {
  return (
    <ul className={styles.menu}>
      {items.map((item, idx) => (
        <MenuItemComponent key={idx} item={item} />
      ))}
    </ul>
  );
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div className={styles.menuItem} onClick={() => hasChildren && setOpen(!open)}>
        {item.label} {hasChildren && <span>{open ? '▼' : '▶'}</span>}
      </div>
      {hasChildren && open && (
        <ul className={styles.subMenu}>
          {item.children!.map((child, idx) => (
            <MenuItemComponent key={idx} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
