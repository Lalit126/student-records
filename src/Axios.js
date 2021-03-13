import axios from 'axios';


let baseURL = process.env.REACT_APP_BACKEND_URL

export default axios.create({

   baseURL

});