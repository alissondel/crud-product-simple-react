import { Fragment } from 'react/jsx-runtime'
import { Navbar } from './components/navbar'
import { List } from './pages/product/list'
import { Footer } from './components/footer'

function App() {
  return (
    <Fragment>
      <Navbar />
      <List />
      <Footer />
    </Fragment>
  )
}

export default App
