import React from 'react';
import { View } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ opacity: '0.8' }}>
      <View>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          © 2023 Booskindustries. All rights reserved.
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
            <a href='mailto:big@booskindustries.com'>Contact us</a>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to='/the-legal-bit'>The Legal Bit</Link>
          </li>
        </ul>
      </View>
    </footer>
  );
};

export default Footer;
