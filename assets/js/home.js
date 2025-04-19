document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const textToType = textElement.textContent;
    textElement.textContent = ''; 

    let index = 0;
    const typingSpeed = 100; 

    function typeWriter() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});