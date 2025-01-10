const emojis = [
    {
        symbol: '👽',
        letter: 'a',
        name: 'alien',
        categories: [
            'face',
        ],
    },
    {
        symbol:'👶',
        letter: 'b',
        name: 'baby',
        categories: [
            'face',
        ],
    },
    {
        symbol:'🌵',
        letter: 'c',
        name: 'cactus',
        categories: [
            'plant'
        ],
    },
    {
        symbol: '🍩',
        letter: 'd',
        name: 'doughnut',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🐘',
        letter: 'e',
        name: 'elephant',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '🍟',
        letter: 'f',
        name: 'fries',
        categories: [
            'food'
        ],
    },
    {
        symbol: '👻',
        letter: 'g',
        name: 'ghost',
        categories: [
            'face',
        ],
    },
    {
        symbol: '💜',
        letter: 'h',
        name: 'heart',
        categories: [],
    },
    {
        symbol: '🍦',
        letter: 'i',
        name: 'ice-cream',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🤹',
        letter: 'j',
        name: 'juggler',
        categories: [
            'face',
        ],
    },
    {
        symbol: '🥝',
        letter: 'k',
        name: 'kiwi',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🐞',
        letter: 'l',
        name: 'ladybug',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '🍄',
        letter: 'm',
        name: 'mushroom',
        categories: [],
    },
    {
        symbol: '📰',
        letter: 'n',
        name: 'news',
        categories: [],
    },
    {
        symbol: '🐙',
        letter: 'o',
        name: 'octopus',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '💩',
        letter: 'p',
        name: 'poop',
        categories: [
            'face',
        ],
    },
    {
        symbol: '❓',
        letter: 'q',
        name: 'question',
        categories: [],
    },
    {
        symbol: '🤖',
        letter: 'r',
        name: 'robot',
        categories: [
            'face',
        ],
    },
    {
        symbol: '💀',
        letter: 's',
        name: 'skull',
        categories: [
            'face',
        ],
    },
    {
        symbol: '👅',
        letter: 't',
        name: 'tongue',
        categories: [],
    },
    {
        symbol: '🦄',
        letter: 'u',
        name: 'unicorn',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '🌋',
        letter: 'v',
        name: 'volcano',
        categories: [],
    },
    {
        symbol: '🐋',
        letter: 'w',
        name: 'whale',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '❗',
        letter: 'x',
        name: 'exclamation',
        categories: [],
    },
    {
        symbol: '☯',
        letter: 'y',
        name: 'yinyang',
        categories: [],
    },
    {
        symbol: '🤐',
        letter: 'z',
        name: 'zipper',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😁',
        name: 'grin',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😎',
        name: 'sunglasses',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😆',
        name: 'laugh',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😠',
        name: 'mad',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😭',
        name: 'cry',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😜',
        name: 'silly',
        categories: [
            'face',
        ],
    },
    {
        symbol: '😱',
        name: 'whoops',
        categories: [
            'face',
        ],
    },
    {
        symbol: '💻',
        name: 'computer',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: '✅',
        name: 'check',
        categories: [],
    },
    {
        symbol: '🙌',
        name: 'hands',
        categories: [],
    },
    {
        symbol: '💔',
        name: 'heartbreak',
        categories: [],
    },
    {
        symbol: '🐕',
        name: 'dog',
        categories: [
            'animal',
        ],
    },
    {
        symbol: '🍔',
        name: 'burger',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍹',
        name: 'cocktail',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '🍕',
        name: 'pizza',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🌯',
        name: 'burrito',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🌮',
        name: 'taco',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍇',
        name: 'grapes',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍓',
        name: 'strawberry',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍍',
        name: 'pineapple',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍉',
        name: 'watermelon',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍌',
        name: 'banana',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍣',
        name: 'sushi',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍿',
        name: 'popcorn',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍱',
        name: 'bento',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍰',
        name: 'cake',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍺',
        name: 'beer',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '🍷',
        name: 'wine',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '🍖',
        name: 'meat',
        categories: [
            'food',
        ],
    },
    {
        symbol: '🍫',
        name: 'chocolate',
        categories: [
            'food',
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
        symbol: '🍾',
        name: 'champagne',
        categories: [
            'holiday',
        ],
    },
    {
        symbol: '🍸',
        name: 'martini',
        categories: [
            'food',
            'drink',
        ],
    },
    {
        symbol: '🍽',
        name: 'dinner',
        categories: [],
    },
    {
        symbol: '🏎',
        name: 'car',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '🚅',
        name: 'train',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '🛫',
        name: 'plane',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '🌎',
        name: 'earth',
        categories: [],
    },
    {
        symbol: '⛵',
        name: 'boat',
        categories: [
            'vehicle',
        ],
    },
    {
        symbol: '🌧',
        name: 'rain',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '🌨',
        name: 'snow',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '🌩',
        name: 'thunderstorm',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '🌞',
        name: 'sun',
        categories: [
            'weather',
            'face',
        ],
    },
    {
        symbol: '🌪',
        name: 'tornado',
        categories: [
            'weather',
        ],
    },
    {
        symbol: '🔥',
        name: 'fire',
        categories: [],
    },
    {
        symbol: '🎃',
        name: 'halloween',
        categories: [
            'face',
            'holiday',
        ],
    },
    {
        symbol: '🎄',
        name: 'christmas',
        categories: [
            'holiday',
            'plant',
        ],
    },
    {
        symbol: '📺',
        name: 'tv',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: '🎶',
        name: 'music',
        categories: [
            'entertainment',
        ],
    },
    {
        symbol: '🎬',
        name: 'movie',
        categories: [
            'entertainment',
        ],
    },
    {
        symbol: '🎂',
        name: 'birthday',
        categories: [
            'holiday',
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
    {
        symbol: '🔑',
        name: 'key',
        categories: [
            'device',
        ],
    },
    {
        symbol: '🛠',
        name: 'fix',
        categories: [
            'device',
        ],
    },
    {
        symbol: '📱',
        name: 'phone',
        categories: [
            'device',
            'entertainment',
        ],
    },
    {
        symbol: '📞',
        name: 'call',
        categories: [
            'device',
        ],
    },
]


module.exports = emojis;