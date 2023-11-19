import React, { useState, useEffect } from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';

import MainApp from './pages/MainApp';
import { View, withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import ToggleDarkMode from './components/DarkMode';
import Notes from './pages/Notes';
import CardPage from './pages/CardPage';
import Footer from './components/Footer';
import Video from './pages/Video';

const socialProviders = [
  {
    id: 'facebook',
    label: 'Continue with Facebook',
    sort: 1,
    providerName: 'Facebook',
    icon: 'https://facebook.com/favicon.ico',
    active: true,
    signUpConfig: {
      hidden: true,
      signUpFields: [{ key: 'name' }],
    },
  },
  {
    id: 'google',
    label: 'Continue with Google',
    sort: 2,
    providerName: 'Google',
    icon: 'https://accounts.google.com/favicon.ico',
    active: true,
    signUpConfig: {
      hidden: true,
      signUpFields: [{ key: 'name' }],
    },
  },
  {
    id: 'amazon',
    label: 'Continue with Amazon',
    sort: 3,
    providerName: 'LoginWithAmazon',
    icon: 'https://www.amazon.com/favicon.ico',
    active: true,
    signUpConfig: {
      hidden: true,
      signUpFields: [{ key: 'name' }],
    },
  },
  {
    id: 'apple',
    label: 'Continue with Apple',
    sort: 4,
    providerName: 'SignInWithApple',
    icon: 'https://apple.com/favicon.ico',
    active: true,
    signUpConfig: {
      hidden: true,
      signUpFields: [{ key: 'name' }],
    },
  },
];

const App = ({ signOut }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <View className='App'>
        <TopBar signOut={signOut} user={user} />
        <div className='underline' style={{ marginTop: '1rem' }} />
        <br />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/App' element={<MainApp />} />
          <Route path='/Notes' element={<Notes />} />
          <Route path='/Theory' element={<CardPage />} />
          <Route path='/Cardano' element={<Cardano />} />
         {
         //<Route path='/Video' element={<Video />} />
         }
        </Routes>
        <View
          width='6rem'
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            margin: '1rem 1rem 1rem 1rem',
          }}
        >
          <ToggleDarkMode />
        </View>
      </View>
      <div className='underline' style={{ marginTop: '1rem' }} />
      <Footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#f5f5f5',
          padding: '1rem',
        }}
      />
    </BrowserRouter>
  );
};

export default App;
