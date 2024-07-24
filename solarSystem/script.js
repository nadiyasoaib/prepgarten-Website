

function playSound(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);   

}
