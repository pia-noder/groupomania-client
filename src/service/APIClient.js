//DCréation d'une nouvelle instance d'axios
//Configuration de l'URL de l'API du serveur = connecteur au backend

import axios from 'axios';

if (localStorage.getItem('userToken')) {
    //applying token
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    } else {
    //deleting the token from header
    delete axios.defaults.headers.common['Authorization'];
    }

export default () => {
    return axios.create({
        baseURL: `https://groupomania-app-ca.herokuapp.com/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           },
    });
    
};

