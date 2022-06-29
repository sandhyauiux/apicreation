import logo from './logo.svg';
import './App.css';
import { Link,Routes,Route } from 'react-router-dom';
import Chicos from './Globalnavs/chicos/Chicos';
import Account from './Account/Account';
import Logonav from './Logosnav/Logonav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Logonav/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </div>
  );
}

export default App;
