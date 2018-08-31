import urljoin from 'url-join';

const API_BASE_URL = 'http://localhost:8080';

export const api = {
    cities: urljoin(API_BASE_URL, '/v1/cities'),
    autocomplete: urljoin(API_BASE_URL, '/v1/autocomplete?q='),
};
