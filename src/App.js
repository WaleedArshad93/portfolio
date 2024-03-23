import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Common from './components/common';

function App() {
  return (
    <div className="App bg-background px-10 md:px-20 sm:px-40 text-white">
      <Landing/>
      <AboutMe/>
    </div>
  );
}

export default App;
