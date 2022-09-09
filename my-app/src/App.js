import './App.css';
import ModalWindow from './components/Modal';
import mainPageImg from './img/Main Screenmain-screen.png';
import {useState} from 'react';

function App() {
  const [isModal, setModal] = useState(false);
const handleEnrollClick = () => {
  setModal(true);
}

  return (
    <div className="App">
      <header className="App-header">
        <div className='main-content'>
          <img src={mainPageImg} alt='huinya'/> 
          <div className='enroll-btn' onClick={handleEnrollClick}>Записаться</div>     
        </div>  
        {isModal ? <ModalWindow setModal={setModal}/> : null}        
      </header>
    </div>
  );
}

export default App;
