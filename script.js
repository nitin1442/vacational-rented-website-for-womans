document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.querySelector('#countdown span');
    const eventDate = new Date('2024-12-31T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = eventDate - now;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
            document.querySelector(`#${this.dataset.target}`).style.display = 'block';

            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set default tab
    document.querySelector('.tab-button').click();
});
