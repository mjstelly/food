import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new york',
                },
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
            // console.log(e);
        }
    };
    useEffect(() => {
        searchApi('pasta');
    });
    return [searchApi, errorMessage, results];
};
