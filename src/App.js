import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from 'aws-amplify';
import ToggleDarkMode from "./components/toggleDarkMode";
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
import { TopBar } from "./components/topBar";
import { Notes } from "./pages/notes";
import FlashCard from "./components/flashCard";

const App = ({ signOut }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);


  return (
    <View className="App">
      <TopBar signOut={signOut} user={user} />
      <div class="underline" style={{marginTop:"1rem"}} />
      <br />
      <Notes />
      <View width="6rem" className="App" style={{ position: 'fixed', bottom: 0, right: 0 , margin:'1rem 1rem 1rem 1rem'}}>
        <ToggleDarkMode />
      </View>
      <Flex direction="row">
        <FlashCard front="Front" back="Back" />
        <FlashCard front="Front" back="Back" />
        <FlashCard front="Help" back="I'm okay" />
      </Flex>
    </View>
   
  );
};

export default withAuthenticator(App);