let indexOfLetter = 0
let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"
let alphabetLetters: string[] = []
for (let index = 0; index <= alphabet.length - 1; index++) {
    alphabetLetters.push(alphabet.charAt(index))
}
let userInput = game.askForString("Type a word to encrypt:")
let lettersToEncrypt: string[] = []
for (let index = 0; index <= userInput.length - 1; index++) {
    lettersToEncrypt.push(userInput.charAt(index))
}
let key = 3
let ceaserCipher: string[] = []
for (let value of lettersToEncrypt) {
    indexOfLetter = alphabetLetters.indexOf(value)
    indexOfLetter += key
    ceaserCipher.push(alphabetLetters[indexOfLetter])
}
game.splash(ceaserCipher)
