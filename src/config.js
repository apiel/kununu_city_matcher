import urljoin from 'url-join';

const API_BASE_URL = process.env.API_BASE_URL  || process.env.STORYBOOK_API_BASE_URL || '';

export const api = {
    cities: urljoin(API_BASE_URL, '/v1/cities'),
    autocomplete: urljoin(API_BASE_URL, '/v1/autocomplete?q='),
};
