import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Text,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Text>We are cooking</Text>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);