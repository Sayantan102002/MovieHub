import axios from 'axios';
let Api = null;

Api = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'c5bb393635msh1805b6d8bdacfc3p10c706jsn61a15068f4c5',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
});

// todo: setup interceptors

// Api.interceptors.request.use(
//     async function(config) {
//       // console.log(process.env,' is process env')
//       const token = localStorage.getItem('token');
//       // const token = await  Auth.currentUser.getIdToken(true)
//       config.data = {
//         ...(config.data || {}),
//         ...(token ? {token} : {}),
//       };
//       // //console.log(config.data,' is the data')
//       return config;
//     },
//     (error) => Promise.reject(error),
// );

Api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // console.log({ error });
    return false;
  },
);

export default Api;
