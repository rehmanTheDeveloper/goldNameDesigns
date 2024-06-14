import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Items } from '../utility';

const useItems = (
    categoryId,
    limit = 10
) => {
    console.log('Working useItems.jsx')
    console.log(categoryId)
    console.log(limit)

    return Items.filter((item) => { return item.category == categoryId; })
}

export default useItems