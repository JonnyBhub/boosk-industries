import React from 'react';
import { View } from '@aws-amplify/ui-react';

const Footer = () => {
  return (
    <footer style={{ opacity: '0.8' }}>
      <View>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          © 2021 Your Company Name. All rights reserved.
        </p>
      </View>
      <View>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            justifyContent: 'center',
          }}
        >
          <li style={{ margin: '0 10px' }}>
            <a href='#'>Contact us</a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href='#'>The Legal Bit</a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <a href='#'></a>
          </li>
        </ul>
      </View>
    </footer>
  );
};

export default Footer;
