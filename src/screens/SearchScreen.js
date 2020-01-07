import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, errorMessage, results] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} search results.</Text>
        </View>
    );
};

export default SearchScreen;
