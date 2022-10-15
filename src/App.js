import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <Header/>
        </div>
      </div>
      <div className="row">
        <div>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
