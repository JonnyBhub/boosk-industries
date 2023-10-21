import logo from './logo.svg';
import './App.css';
import { Text } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Text
          variation="primary"
          as="p"
          lineHeight="1.5em"
          fontWeight={400}
          fontSize="1em"
          fontStyle="normal"
          textDecoration="none"
          width="30vw"
        >
          Hello from AWS Amplify
      </Text>
    </div>
  );
}

export default App;
