import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Text } from '@aws-amplify/ui-react'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
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
    </Text>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
