import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key) => {

    const [value, setValue] = useLocalStorage(key)

    const body = document.getElementsByTagName('body');

    if (value === true){
        body.classList.add('.dark-mode')
    }else{
        body.classList.remove('.dark-mode')
    }

    return [];
}