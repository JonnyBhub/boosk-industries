import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { MyMenu } from './menu';

export const TopBar = ({ signOut, user }) => (
  <Flex justifyContent='space-between' alignItems='center'>
    <MyMenu />
    <Text style={{ marginRight: 'auto', width: '10%' }}>
      Welcome to this App
    </Text>
    <Heading level={1} style={{ margin: '0 auto', width: '60%' }}>
      {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}'s Hub
    </Heading>
    <Text style={{ marginRight: 'auto', width: '10%' }}>
      Signed in as: {user?.username}
    </Text>
    <Button onClick={signOut} style={{ width: '10%', marginRight: '1rem' }}>
      Sign Out
    </Button>
  </Flex>
);
