import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCards from './Components/AllCards/AllCards';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div className="App container">
      <div>
        <Header></Header>
      </div>
      <AllCards></AllCards>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App