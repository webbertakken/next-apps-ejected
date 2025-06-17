import type { ItemType } from 'antd/es/menu/interface';

import { useRouter } from 'next/router';
import { Menu } from 'antd';

const menuItems: ItemType[] = [
  { label: 'Main shop', key: '/shop' },
  { label: 'Product A', key: '/shop/products/A' },
  { label: 'Product B', key: '/shop/products/B' },
  { label: 'Exposed pages', key: '/shop/exposed-pages' },
  {
    label: 'Exposed components',
    type: 'group',
    children: [
      { label: 'shop/WebpackSvg', key: '/shop/test-webpack-svg' },
      { label: 'shop/WebpackPng', key: '/shop/test-webpack-png' },
    ],
  },
];

export default function AppMenu() {
  const routerShop = useRouter();
console.log(routerShop)
  return (
    <>
      <div
        style={{ padding: '10px', fontWeight: 600, backgroundColor: '#fff' }}
      >
        Shop App Menu
      </div>
      <Menu
        mode="inline"
        selectedKeys={[routerShop.asPath]}
        style={{ height: '100%' }}
        onClick={({ key }) => routerShop.push(key)}
        items={menuItems}
      />
    </>
  );
}
