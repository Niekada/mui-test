import Routes from './routes/Routes'
import NavBar from './components/NavBar/NavBar'
import { Rating } from '@mui/material'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes />
      <Rating />
    </div>
  )
}

export default App