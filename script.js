document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const charRemaining = document.getElementById('charRemaining');
    const maxChars = textInput.getAttribute('maxlength');

    textInput.addEventListener('input', function() {
        const currentLength = textInput.value.length;
        charCount.textContent = currentLength;
        charRemaining.textContent = maxChars - currentLength;
    });
});