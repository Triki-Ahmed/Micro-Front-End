import { useState } from 'react';
import reactLogo from './assets/react.svg';
import angularLogo from './assets/angular.png';
import vueLogo from './assets/vue.png';
import { CardButton } from './components/CardButton/CardButton';
import AngularApp from './components/AngularApp/AngularApp';
import VueApp from './components/VueApp/VueApp';
import ReactApp from 'reactApp/AppReact';
import './App.css';

function App() {
  const [showReactApp, setShowReactApp] = useState('');

  const showByApp = () => {
    switch (showReactApp) {
      case 'react':
        return <ReactApp />;
      case 'angular':
        return <AngularApp />;
      case 'vue':
        return <VueApp />;
      default:
        return 'Host : React App';
    }
  };

  return (
    <div className='grid'>
      <div className='cards'>
        <div className='allCards'>
          <CardButton onClick={() => setShowReactApp('react')}>
            <img src={reactLogo} alt='react' width={60} />
            <span>React</span>
          </CardButton>
          <CardButton onClick={() => setShowReactApp('angular')}>
            <img src={angularLogo} alt='angular' width={60} />
            <span>Angular</span>
          </CardButton>
          <CardButton onClick={() => setShowReactApp('vue')}>
            <img src={vueLogo} alt='vue' width={60} />
            <span>Vue</span>
          </CardButton>
        </div>
      </div>

      <div className='content'>
        <h1>Poc Micro Front-End</h1>
        {showByApp()}
      </div>
    </div>
  );
}

export default App;
