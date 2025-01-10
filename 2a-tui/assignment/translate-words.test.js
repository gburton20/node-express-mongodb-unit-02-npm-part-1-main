const translateWords = require('./translate-words.js');

describe('translateWords', () => {
    it('gives back the emoji version of the given string', () => {
        const sentence1 = 'elephant news poop';
        const emojiSentence1 = '🐘 📰 💩'
        const sentence2 = 'robot unicorn computer';
        const emojiSentence2 = '🤖 🦄 💻'

        expect(translateWords(sentence1)).toBe(emojiSentence1);
        expect(translateWords(sentence2)).toBe(emojiSentence2);
    })

    it('if there is no emoji for that word, returns the original word', () => {
        const sentence1 = 'help me please';
        const sentence2 = 'I have no emojis';
        const sentence3 = 'my life is poor';

        expect(translateWords(sentence1)).toBe(sentence1);
        expect(translateWords(sentence2)).toBe(sentence2);
        expect(translateWords(sentence3)).toBe(sentence3);
    })

    it('handles sentences with emojis and regular words', () => {
        const sentence1 = 'i heart computer';
        const sentence2 = 'i ate a tv dinner';
        const sentence3 = 'i drink beer in a bottle';

        expect(translateWords(sentence1)).toBe('i 💜 💻')
        expect(translateWords(sentence2)).toBe('i ate a 📺 🍽')
        expect(translateWords(sentence3)).toBe('i drink 🍺 in a 🍼')
    })

    it('is case-insensitive', () => {
        const sentence1 = "ever played the board game Skull"
        const sentence2 = 'you are SILLY'
        const sentence3 = 'i have a qUeStIoN'

        expect(translateWords(sentence1)).toBe('ever played the board game 💀');
        expect(translateWords(sentence2)).toBe('you are 😜');
        expect(translateWords(sentence3)).toBe('i have a ❓');
    })
})
