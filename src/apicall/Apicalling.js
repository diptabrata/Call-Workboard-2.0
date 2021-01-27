import axios from 'axios';

const API_URL="http://localhost:4000/cms/tovo/v1/getUserCallWorkbook.do"

export const getData=async()=>{
    const response=await axios.post(API_URL);
    // console.log("API",response.data);
    return response.data;
    
}
