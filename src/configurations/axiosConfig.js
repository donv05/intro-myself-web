import localStorageService from './LocalStorageService'
// First we need to import axios.js
import axios from 'axios';
axios.defaults.baseURL = 'https://app1user1cv.herokuapp.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'https://app1user1cv.herokuapp.com',
});



// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = `Bearer ` +  localStorageService.getRefreshToken();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Also add/ configure interceptors && all the other cool stuff
instance.interceptors.request.use(request => {
    // console.log('Request', request);
    // const token = localStorageService.getRefreshToken();
    // if(token) {
    //     return request;
    // } else {
    //     window.location = '/'
    // }
    
    // request.headers.Authorization =  token;
    // console.log('Request', request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    // Edit response config
    return response;
}, (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        
        return axios.post('/auth/token',
        {
          "refresh_token": localStorageService.getRefreshToken()
        })
        .then(res => {
            if (res.status === 201) {
                // 1) put token to LocalStorage
                localStorageService.setToken(res.data.token);
                // 2) Change Authorization header
                instance.defaults.headers.common['Authorization'] = `Bearer ` +  localStorageService.getRefreshToken();
                originalRequest.headers['Authorization'] = `Bearer ` +  localStorageService.getRefreshToken();
                // 3) return originalRequest object with Axios.
                return axios(originalRequest);
            }
        })
    }
    console.log('error', error.response.status, originalRequest);
    return Promise.reject(error);
});

export default instance;