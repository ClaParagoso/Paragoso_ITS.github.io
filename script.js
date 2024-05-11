document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });

    const testimonials = [
        { name: "John", content: "I really enjoyed my stay at Alejandro's condo. The unit itself is beautiful with great views and is very spacious with all amenities needed. The condo is situated a block away from Ayala Central Bloc and a seven-eleven which was very useful for buying anything we needed. There was also a coffee shop conveniently across the street. Communication with the host was also great, very responsive and answered all my questions. Will definitely stay here again in the future." },
        { name: "Jhoana Mae", content: "Communication was seamless! The Host was responsive and considerate, ensuring our stay was comfortable. A very tidy and lovely Airbnb flat equipped with everything you need. Would absolutely recommend staying there! ⭐️⭐️⭐️⭐️⭐️" },
    ];

    const carouselIndicators = testimonials.map((_, index) => {
        const isActive = index === 0 ? 'active' : '';
        return `<li data-target="#testimonials" data-slide-to="${index}" class="${isActive}"></li>`;
    });
    $('.carousel-indicators').html(carouselIndicators.join(''));

    const carouselItems = testimonials.map((testimonial, index) => {
        const isActive = index === 0 ? 'active' : '';
        return `
            <div class="carousel-item ${isActive}">
                <div class="testimonial">
                    <h3>${testimonial.name}</h3>
                    <p>${testimonial.content}</p>
                </div>
            </div>
        `;
    });
    $('.carousel-inner').html(carouselItems.join(''));

    $('.carousel').carousel();
});

document.addEventListener('DOMContentLoaded', function() {
    const dreamForm = document.getElementById('dreamForm');
    const dreamsContainer = document.getElementById('dreams');

    dreamForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('dreamTitle').value;
        const description = document.getElementById('dreamDescription').value;
        if (title && description) {
            const dream = document.createElement('div');
            dream.classList.add('dream');
            dream.innerHTML = `
                <div class="dream-content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            `;
            dreamsContainer.appendChild(dream);
            document.getElementById('dreamTitle').value = '';
            document.getElementById('dreamDescription').value = '';
        } else {
            alert('Please enter both title and description for your dream.');
        }
    });
});
