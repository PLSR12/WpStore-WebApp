import { ConfigProvider } from "antd"
import pt_BR from "antd/locale/pt_BR"
import GlobalStyle from "common/styles/globalStyles"
import { RouterProvider } from "react-router-dom"
import { Router } from "routes"

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ConfigProvider>
  )
}

export default App
