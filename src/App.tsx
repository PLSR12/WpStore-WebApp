import GlobalStyle from 'common/styles/globalStyles'
import Theme from 'common/styles/Theme'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
