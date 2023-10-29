import { View ,Heading} from '@aws-amplify/ui-react';
import React from 'react';

import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/loggedIn');
    };

    return (
        <View className="home">
            <Heading level={1}>Welcome to our website!</Heading>
            <button className="login-button" onClick={handleLogin}>Login</button>
        </View>
    );
}

export default Home;
