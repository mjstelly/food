import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer tFU3mJaVjqgYEiPcnJjR_IhSwuqVGKaPOnnfF4EBz0xiO7DdoVjk9FMURUNcAmLX3ej7GgNrwNZg8ZOxp6LnumdfCUKpbvicKIMPLqiXBM_CNLoei2GmLybgK30SXnYx',
    },
});
