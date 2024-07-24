// script.js

document.addEventListener('DOMContentLoaded', function() {
  const numberContainer = document.getElementById('number-container');
  const imageContainer = document.getElementById('image-container');

  for (let i = 1; i <= 100; i++) {
      const numberBox = document.createElement('div');
      numberBox.className = 'number-box';
      numberBox.innerHTML = `<h2>${i}</h2><p>${numberToWord(i)}</p>`;
      numberBox.addEventListener('click', () => {
          playSound(numberToWord(i));
          showImage(i);
      });
      numberContainer.appendChild(numberBox);
  }

  function numberToWord(number) {
      const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                     "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", 
                     "Eighteen", "Nineteen", "Twenty", "Twenty-One", "Twenty-Two", "Twenty-Three", 
                     "Twenty-Four", "Twenty-Five", "Twenty-Six", "Twenty-Seven", "Twenty-Eight", 
                     "Twenty-Nine", "Thirty", "Thirty-One", "Thirty-Two", "Thirty-Three", "Thirty-Four", 
                     "Thirty-Five", "Thirty-Six", "Thirty-Seven", "Thirty-Eight", "Thirty-Nine", "Forty", 
                     "Forty-One", "Forty-Two", "Forty-Three", "Forty-Four", "Forty-Five", "Forty-Six", 
                     "Forty-Seven", "Forty-Eight", "Forty-Nine", "Fifty", "Fifty-One", "Fifty-Two", 
                     "Fifty-Three", "Fifty-Four", "Fifty-Five", "Fifty-Six", "Fifty-Seven", "Fifty-Eight", 
                     "Fifty-Nine", "Sixty", "Sixty-One", "Sixty-Two", "Sixty-Three", "Sixty-Four", 
                     "Sixty-Five", "Sixty-Six", "Sixty-Seven", "Sixty-Eight", "Sixty-Nine", "Seventy", 
                     "Seventy-One", "Seventy-Two", "Seventy-Three", "Seventy-Four", "Seventy-Five", 
                     "Seventy-Six", "Seventy-Seven", "Seventy-Eight", "Seventy-Nine", "Eighty", 
                     "Eighty-One", "Eighty-Two", "Eighty-Three", "Eighty-Four", "Eighty-Five", 
                     "Eighty-Six", "Eighty-Seven", "Eighty-Eight", "Eighty-Nine", "Ninety", 
                     "Ninety-One", "Ninety-Two", "Ninety-Three", "Ninety-Four", "Ninety-Five", 
                     "Ninety-Six", "Ninety-Seven", "Ninety-Eight", "Ninety-Nine", "One Hundred"];
      return words[number - 1];
  }

  function playSound(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
  }

  function showImage(number) {
      const imageUrl = `https://source.unsplash.com/200x200/?number,${number}`;
      imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image for number ${number}">`;
  }
});
