import React from 'react';
import '../App.css';
import '@aws-amplify/ui-react/styles.css';
import { Flex, View, withAuthenticator } from '@aws-amplify/ui-react';
import { Notes } from './Notes';
import FlashCard from '../components/FlashCard/flashCard';

const MainApp = () => {
  return (
    <View className='MainApp'>
      <Notes />
      <Flex direction='row' alignContent={"center"}>
        <FlashCard front='Front' back='Back' />
        <FlashCard front='Front' back='Back' />
        <FlashCard front='Help' back="I'm okay" />
      </Flex>
    </View>
  );
};

export default withAuthenticator(MainApp);
