import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer YrSpZpEpROCZJzw9Ow60z9qseMNjoPoKrxUCoa-mbTEZ6oQdcMDpYMztCcQas1JggIsqnjwumppsM1fOHfYBMLvzhdgOxMOHVmA-V9EQ1Htkl181aB4Jw9v4TREVXnYx',
    },
});
