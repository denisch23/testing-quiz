document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let score = 0;
        // Example for checking answers
        if (formData.get('q1') === 'correct-answer') {
            score++;
        }
        alert('Your score is: ' + score);
    });
});
