document.addEventListener('DOMContentLoaded', function() {
    const rssFeedUrl = 'https://rss2json.com/api.json?rss_url=https%3A%2F%2Fwww.cshub.com%2Farticles';
    
    fetch(rssFeedUrl)
        .then(response => response.json())
        .then(data => {
            const rssFeedContainer = document.getElementById('rss-feed');
            if (data.status === 'ok') {
                data.items.forEach(item => {
                    const article = document.createElement('div');
                    article.className = 'article';
                    article.innerHTML = `
                        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p>${item.description}</p>
                    `;
                    rssFeedContainer.appendChild(article);
                });
            } else {
                rssFeedContainer.innerHTML = '<p>Failed to load news feed. Please try again later.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching the RSS feed:', error);
            const rssFeedContainer = document.getElementById('rss-feed');
            rssFeedContainer.innerHTML = '<p>Failed to load news feed. Please try again later.</p>';
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const footerImages = document.querySelector('.footer-images');
    const clone = footerImages.cloneNode(true);
    footerImages.parentElement.appendChild(clone);
});
