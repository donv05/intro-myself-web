import localStorageService from './LocalStorageService'
// First we need to import axios.js
import axios from 'axios';

const url = "http://localhost:3000"
// const url = "https://app1user1cv.herokuapp.com"
axios.defaults.baseURL = url;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: url,
});



// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = `Bearer ` +  localStorageService.getRefreshToken();
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Also add/ configure interceptors && all the other cool stuff
instance.interceptors.request.use(request => {
    // const token = localStorageService.getRefreshToken();
    // if(token) {
    //     return request;
    // } else {
    //     window.location = '/'
    // }
    
    // request.headers.Authorization =  token;
    // Edit request config
    return request;
    
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    // Edit response config
    return response.data
}, (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry && localStorageService.getRefreshToken()) {
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
    return Promise.reject(error.response);
});

export default instance;