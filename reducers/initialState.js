const initialState = {
	decks: {
		byId: {
			jasd123fas: {
				name: 'colors',
				cardsById: ['asd213', 'ggajkj123', 'oopuioasd323'],
			},
			gascvm213: {
				name: 'food',
				cardsById: ['asdasdpopo213', 'aczxnmn23'],
			},
		},
	},
	cards: {
		byId: {
			asd213: {
				question: 'what is the color of the sky?',
				answer: 'blue',
			},
			ggajkj123: {
				question: 'what is the color of lava?',
				answer: 'orange',
			},
			oopuioasd323: {
				question: 'what is the color of cloraphyll?',
				answer: 'green',
			},
			asdasdpopo213: {
				question: 'what is everyones food?',
				answer: 'pizza',
			},
			aczxnmn23: {
				question: 'what is the black syrup on sundaes?',
				answer: 'fudge',
			},
		},
	},
};

export default initialState;
