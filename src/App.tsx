import './App.css';
import Login from './components/account/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login loginFailed={true}/>
      </header>
    </div>
  );
}

export default App;
