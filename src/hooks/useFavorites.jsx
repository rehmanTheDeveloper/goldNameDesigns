import React from 'react';
import { Items } from '../utility';

const useFavorites = () => {

    console.log('Working useFavorites.jsx.')
    return Items.filter((item) => { return item.favorite == 1 });
}

export default useFavorites