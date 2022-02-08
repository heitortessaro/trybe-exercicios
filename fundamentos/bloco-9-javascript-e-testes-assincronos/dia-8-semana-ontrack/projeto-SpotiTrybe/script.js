const CLIENT_ID = '460f5f47bb564c1bbe6f61e0dd50407f';
const CLIENT_SECRET = 'c82f485d94d0472b8c01c00e05dde9f0';
const BASE_URL = 'https://accounts.spotify.com/';

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
}

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
    console.log(data);
}

window.onload = async () => {
    token = await getToken();
    await getGenre(token);
    // console.log(token);
}