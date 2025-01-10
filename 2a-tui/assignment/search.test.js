let search = require('./search.js');

describe('search', () => {
    it(`returns an array containing the emoji whose name matches the given word`, () => {
        const word1 = 'mushroom'
        const searchResult1 = [
            {
                symbol: '🍄',
                letter: 'm',
                name: 'mushroom',
                categories: [],
            },
        ]
        const word2 = 'alien'
        const searchResult2 = [
            {
                symbol: '👽',
                letter: 'a',
                name: 'alien',
                categories: [
                    'face',
                ],
            },
        ]
        const word3 = 'unicorn'
        const searchResult3 = [
            {
                symbol: '🦄',
                letter: 'u',
                name: 'unicorn',
                categories: [
                    'animal',
                ],
            },
        ]

        expect(search(word1)).toEqual(searchResult1);
        expect(search(word2)).toEqual(searchResult2);
        expect(search(word3)).toEqual(searchResult3);
    })

    it(`given a partial word, returns the emoji whose name contains that word`, () => {
        const searchTerm1 = 'piz'
        const searchTerm2 = 'za'
        const emoji1 = [
            {
                symbol: '🍕',
                name: 'pizza',
                categories: [
                    'food',
                ],
            },
        ];

        const searchTerm3 = 'burr'
        const searchTerm4 = 'urri'
        const emoji2 = [
            {
                symbol: '🌯',
                name: 'burrito',
                categories: [
                    'food',
                ],
            },
        ];

        const searchTerm5 = 'thun'
        const searchTerm6 = 'storm'
        const emoji3 = [
            {
                symbol: '🌩',
                name: 'thunderstorm',
                categories: [
                    'weather',
                ],
            },
        ];

        expect(search(searchTerm1)).toEqual(emoji1);
        expect(search(searchTerm2)).toEqual(emoji1);
        expect(search(searchTerm3)).toEqual(emoji2);
        expect(search(searchTerm4)).toEqual(emoji2);
        expect(search(searchTerm5)).toEqual(emoji3);
        expect(search(searchTerm6)).toEqual(emoji3);
    })

    it(`can return multiple matches`, () => {
        const searchTerm1 = 'heart'
        const emojis1 = [
            {
                symbol: '💜',
                letter: 'h',
                name: 'heart',
                categories: [],
            },
            {
                symbol: '💔',
                name: 'heartbreak',
                categories: [],
            },
        ];
        const searchTerm2 = 'corn'
        const emojis2 = [
            {
                symbol: '🦄',
                letter: 'u',
                name: 'unicorn',
                categories: [
                    'animal',
                ],
            },
            {
                symbol: '🍿',
                name: 'popcorn',
                categories: [
                    'food',
                ],
            },
        ];
        const searchTerm3 = 'bo';
        const emojis3 = [
            {
                symbol: '🤖',
                letter: 'r',
                name: 'robot',
                categories: [
                    'face',
                ],
            },
            {
                symbol: '🍼',
                name: 'bottle',
                categories: [
                    'food',
                    'drink',
                ],
            },
            {
                symbol: '⛵',
                name: 'boat',
                categories: [
                    'vehicle',
                ],
            },
            {
                symbol: '📖',
                name: 'book',
                categories: [
                    'entertainment',
                ],
            },
            {
                symbol: '📓',
                name: 'notebook',
                categories: [],
            },
        ]

        expect(search(searchTerm1)).toEqual(emojis1);
        expect(search(searchTerm2)).toEqual(emojis2);
        expect(search(searchTerm3)).toEqual(emojis3);
    })

    it('is case-insensitive', () => {
        const searchTerm1 = 'Robot';
        const searchTerm2 = 'pOpCoRn';
        const searchTerm3 = 'HEARTBREAK';

        const emojis1 = [
            {
                symbol: '🤖',
                letter: 'r',
                name: 'robot',
                categories: [
                    'face',
                ],
            },
        ];

        const emojis2 = [
            {
                symbol: '🍿',
                name: 'popcorn',
                categories: [
                    'food',
                ],
            },
        ];

        const emojis3 = [
            {
                symbol: '💔',
                name: 'heartbreak',
                categories: [],
            },
        ];

        expect(search(searchTerm1)).toEqual(emojis1);
        expect(search(searchTerm2)).toEqual(emojis2);
        expect(search(searchTerm3)).toEqual(emojis3);

    })
})
