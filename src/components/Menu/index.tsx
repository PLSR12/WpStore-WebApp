import { Menu as MenuAntd } from 'antd'

export const Menu: React.FC = () => {
  return (
    <MenuAntd
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={[{ key: '1', label: 'Produtos' }]}
    />
  )
}
