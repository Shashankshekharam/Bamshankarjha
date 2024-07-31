document.addEventListener('DOMContentLoaded', () => {
    fetch('data/horoscopes.json')
        .then(response => response.json())
        .then(data => displayHoroscopes(data));

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});

function displayHoroscopes(horoscopes) {
    const container = document.getElementById('horoscope-container');
    horoscopes.forEach(horoscope => {
        const div = document.createElement('div');
        div.classList.add('horoscope');
        div.innerHTML = `<h3>${horoscope.sign}</h3><p>${horoscope.prediction}</p>`;
        container.appendChild(div);
    });
}
