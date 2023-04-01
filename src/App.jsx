import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCards from './Components/AllCards/AllCards';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog/Blog';


function App() {
  
  return (
    <div className="App container">
      <div>
        <Header></Header>
      </div>
      <AllCards></AllCards>
      <Blog></Blog>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
// thanks