import axios from "axios";

const apiRequest = axios.create({
    baseURL: `http://192.168.0.141/api/shipment/`,
    // baseURL: `http://192.168.0.141:8080/`,
    headers: { 
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

// 門市查詢
export const apiPostStoreInfo = (data: JSON) => apiRequest.post('store/storeInfo', data);












// // 攔截 request
// apiRequest.interceptors.request.use(request => {
//     return request;
// }, error => {
//     return Promise.reject(error);
// });

// // 攔截 response
// apiRequest.interceptors.response.use(response => {
//     return Promise.resolve(response);
// }, error => {
//     return Promise.reject(error.response.data);
// });


