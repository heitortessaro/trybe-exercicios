const CLIENT_ID = '460f5f47bb564c1bbe6f61e0dd50407f';
const CLIENT_SECRET = 'c82f485d94d0472b8c01c00e05dde9f0';
const BASE_URL = 'https://accounts.spotify.com/';

// REQUESTS

const getToken = async () => {
    const requestInfo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
        },
        body: 'grant_type=client_credentials',
    };
    const response = await fetch(`https://accounts.spotify.com/api/token`, requestInfo);
    const data = await response.json();
    return data.access_token;
};

const getGenre = async (token) => {
    const requestInfo = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const url = 'https://api.spotify.com/v1/browse/categories?locale=pt-br';
    const response = await fetch(url, requestInfo);
    const data = await response.json();
    return data.categories.items;
    // console.log(data);
};

// HELPERS

const getElementOrClosest = (sectionClass, target) =>
    target.classList.contains('sectionClass')
        ? target
        : target.closest(sectionClass);


const clearSelectedItem = (containerSelector) => {
    const element = document.querySelector(`${containerSelector} .item-selected`);
    if (element) {
        element.classList.remove('item-selected');
    };
}


//  HENDLERS

const handleGenreCardClick = (event) => {
    const genreSection = getElementOrClosest('.genre', event.target);
    const id = genreSection.id;
    clearSelectedItem('.genre-cards');
    genreSection.classList.add('item-selected');
};

// RENDERS

const renderGenres = (genres) => {
    const genresCards = document.querySelector('.genre-cards');

    genres.forEach((genre) => {
        const section = document.createElement('section');
        section.className = 'genre';
        section.id = genre.id;

        const paragraph = document.createElement('p');
        paragraph.className = 'genre-title';
        paragraph.innerHTML = genre.name;

        const image = document.createElement('img');
        image.src = genre.icons[0].url;
        image.className = 'genre-image';

        section.appendChild(image);
        section.appendChild(paragraph);
        section.addEventListener('click', handleGenreCardClick);

        genresCards.appendChild(section);
    });
};

window.onload = async () => {
    try {
        const token = await getToken();
        const genres = await getGenre(token);
        renderGenres(genres);
    } catch (error) {
        console.log(error);
    }
};