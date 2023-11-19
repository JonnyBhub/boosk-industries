import React, { useEffect, useState } from 'react';
import {
  View,
  Flex,
  withAuthenticator,
  Button,
  SearchField,
} from '@aws-amplify/ui-react';
import FlashCard from '../components/FlashCard/flashCard';
import flashcardData from '../JSON/flashcards.json';

const refresh = () => {
  window.location.reload();
};

const CardPage = () => {
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false); 
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    // Shuffle the array of flashcard objects
    const shuffled = flashcardData.flashcards.sort(() => 0.5 - Math.random());
    setShuffledFlashcards(shuffled);
  }, []);

  const handleSearch = event => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      const term = event.target.value;
      if (term !== '') {
        const filtered = flashcardData.flashcards.filter(card =>
          card.front.toLowerCase().includes(term.toLowerCase())
        );
        setShuffledFlashcards(filtered);
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    }
  };

  return (
    <View
      width='100%'
      height='100%'
      padding='1rem'
      justifyContent='center'
      alignItems='center'
    >
      <h1>Flashcards</h1>
      <br />
      <Flex justifyContent='center' alignItems='center' width='100%' flexDirection='column' textAlign='center'>
        <SearchField 
          width='40%'
          alignSelf='center'
          placeholder='Search flashcards'
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </Flex>
      <br />
      {focused ? ( searchActive ? (
        <Flex justifyContent='center' alignItems='center' width='100%' flexDirection='column' textAlign='center'>
          {shuffledFlashcards.map(flashcard => (
            <FlashCard
              front={flashcard.front}
              back={flashcard.back}
              key={flashcard.front}
              style={{ margin: '0.5rem' }}
            />
          ))}
        </Flex>
        ) : (
          <View></View>
      )) : (
        <Flex justifyContent='center' alignItems='center' width='100%' flexDirection='column' textAlign='center'>
          {shuffledFlashcards.slice(0, 3).map(flashcard => (
            <FlashCard
              front={flashcard.front}
              back={flashcard.back}
              key={flashcard.front}
            />
          ))}
        </Flex>
      )}
      <br />
      <View alignItems='center'>
        <Button onClick={refresh}>New Questions</Button>
      </View>
    </View>
  );
};

export default withAuthenticator(CardPage);
