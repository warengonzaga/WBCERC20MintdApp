import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Footer, Header, Main } from './components'
import { coin2 } from './assets'
import './App.css';


function App() {
  return (
    <ThirdwebProvider>
    <div className='app__wrapper'>
      <img src={coin2} />
            <div className='upper__spacer'></div>
            <div className='app__container'>
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    </ThirdwebProvider>
  );
}

export default App;
