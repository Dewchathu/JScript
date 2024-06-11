document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
