import { ConfigProvider } from 'antd'
import GlobalStyle from 'common/styles/globalStyles'
import { RouterProvider } from 'react-router-dom'
import { Router } from 'routes'

function App() {
  return (
    <ConfigProvider>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ConfigProvider>
  )
}

export default App
