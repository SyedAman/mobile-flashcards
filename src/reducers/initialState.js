const initialState = {
  decks: {
    byId: {
      jasd123fas: {
        id: 'jasd123fas',
        name: 'React',
        cardsById: ['asd213', 'ggajkj123'],
      },
      gascvm213: {
        id: 'gascvm213',
        name: 'JavaScript',
        cardsById: ['oopuioasd323'],
      },
    },
  },
  cards: {
    byId: {
      asd213: {
        id: 'asd213',
        deckId: 'jasd123fas',
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      ggajkj123: {
        id: 'ggajkj123',
        deckId: 'jasd123fas',
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      oopuioasd323: {
        id: 'oopuioasd323',
        deckId: 'gascvm213',
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    },
  },
};

export default initialState;
