import React from 'react';
import { View } from '@aws-amplify/ui-react';

const CardPage = ({ children }) => {
    return (
        <View
            width="100%"
            height="100%"
            padding="1rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </View>
    );
};

export default CardPage;
