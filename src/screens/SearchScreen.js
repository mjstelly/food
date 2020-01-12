import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, errorMessage, results] = useResults();
    const filterByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <KeyboardAvoidingView>
                <ResultsList
                    title="Cost Effective"
                    results={filterByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterByPrice('$$$')}
                />
            </KeyboardAvoidingView>
        </>
    );
};

export default SearchScreen;
