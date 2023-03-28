import { Menu as MenuAntd } from "antd"
import { useLocation, useNavigate } from "react-router-dom"

export const Menu: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    {
      key: "1",
      label: "Home",
      onClick: () => {
        navigate("/")
      },
    },
    {
      key: "2",
      label: "Produtos",
      onClick: () => {
        navigate("/products")
      },
    },
    {
      key: "3",
      label: "Carrinho",
      icon: "",
      onClick: () => {
        navigate("/cart")
      },
    },
  ]

  let selected: string = "1"

  if (location.pathname === "/") {
    selected = "1"
  } else {
    const item: any = items.find((item: any) => {
      if (!item.label.props) {
        return false
      }

      if (item.label.props && item.label.props.to === "/") {
        return false
      }

      return location.pathname.startsWith(item.label.props.to)
    })

    if (item) {
      selected = item.key
    }
  }

  return <MenuAntd theme="dark" mode="horizontal" defaultSelectedKeys={[selected]} items={items} />
}
