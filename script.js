// -------------------------------------For Toggle Plus Button Question And Answer--------------------------------
    
      function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        const sign = button.querySelector('span:nth-child(2)');
        answer.classList.toggle('hidden');
        sign.textContent = answer.classList.contains('hidden') ? '+' : '-';
      }
