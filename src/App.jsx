import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AuthContext} from './context/AuthContext'
import { AppRouter } from './routes/AppRouter'
import { authreducer1 } from './reducers/Authreducer1'

function App() {
const usuario={
  username:'sofi',
  isLogged:true
}
  const [user, dispatch] = useReducer(authreducer1,usuario)

  return (
    <AuthContext.Provider
    value={{
     user, dispatch
    }}>
    <AppRouter/>
    </AuthContext.Provider>
)}

export default App
