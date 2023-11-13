import './App.css'
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div>
      { code ? <Dashboard code={code} /> : <Login />}
    </div>
  )
}

export default App
