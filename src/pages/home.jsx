import { View, Heading } from '@aws-amplify/ui-react';
import React from 'react';
import '../css/home.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <View className='home'>
      <Heading level={1}>Welcome to our website!</Heading>
      <Link to='/App'>
        <button className='login-button'>Login</button>
      </Link>
    </View>
  );
};

export default Home;
