import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCards from './Components/AllCards/AllCards';
import Header from './Components/Header/Header';
import CardDetaile from './Components/CardDetailes/CardDetaile';
import { useState } from 'react';

function App() {
  const [readTime, setreadTime] = useState(0);

  const handlereadTime = (time) => {
    const previousreadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousreadTime) {
      const sum = previousreadTime + time;
      console.log(sum)
      localStorage.setItem("readTime", sum);
      setreadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setreadTime(time);
    }
  };
  return (
    <div className="App container">
      <div>
        <Header></Header>
      </div>
      <div className="main row">
        <div className="allCard-contianer col-md-8">
          <AllCards handlereadTime={handlereadTime}></AllCards>
        </div>
        <div className="cardDetailes col-md-4">
          <CardDetaile readTime={readTime}></CardDetaile>
        </div>
      </div>
    </div>
  )
}

export default App