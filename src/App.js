import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App bg-zinc-800 px-40">
      <Landing/>
      <AboutMe/>
    </div>
  );
}

export default App;
