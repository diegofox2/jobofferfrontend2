import './App.css';
import LoginModal from './components/account/login/LoginModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginModal show></LoginModal>
      </header>
    </div>
  );
}

export default App;
