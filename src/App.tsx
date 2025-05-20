import React from 'react';
import './App.css';
import { NavBar } from './components/layout/NavBar'
import { FeedProvider } from './context/FeedContext';
import { Layout } from './components/layout/Layout';
import { Footer } from './components/layout/Footer';

const Apps = () => {

  return (
    <div>
      <header className="App-header">
        
        <NavBar/>
        <main className="main-content">
          <div className='body'>
            <Layout />
          </div>
        </main>
    
        <Footer />
      </header>
    </div>
  );
}

function App() {
  return (
    // <AuthProvider>
    // <SessionProvider>
    // <ThemeProvider>
      <FeedProvider>
        {/* <ServiceProvider>
          <BackgroundProvider> */}
            <Apps />
          {/* </BackgroundProvider>
        </ServiceProvider> */}
      </FeedProvider>
    // </ThemeProvider>
    // </SessionProvider>
    // </AuthProvider>
  );
}

export default App;
