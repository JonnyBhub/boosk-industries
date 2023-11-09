import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../css/flashCard.css';
import { View } from '@aws-amplify/ui-react';

const FlashCard = ({ front, back, isFront }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <View
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <View className='front'>
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          {front}
        </View>
      </View>
      <View className='back'>
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          {back}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10px',
          transition: 'left 0.5s ease-in-out',
          left: `${front ? 'auto' : flipped ? 'auto' : '10px'}`,
          right: `${front ? '10px' : flipped ? '10px' : 'auto'}`,
        }}
      >
        <Icon icon={'fluent:arrow-turn-down-right-20-filled'} />
      </View>
    </View>
  );
};

export default FlashCard;
