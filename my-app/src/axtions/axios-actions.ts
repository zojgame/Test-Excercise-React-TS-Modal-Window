import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

type UserData = {
    "name": string,
    "email": string,    
  }
// type UserData = {
//     "id": number,
//     "name": string,
//     "username": string,
//     "email": string,
//     "address": {
//       "street": string,
//       "suite": string,
//       "city": string,
//       "zipcode": string,
//       "geo": {
//         "lat": string,
//         "lng": string
//       }
//     },
//     "phone": string,
//     "website": string,
//     "company": {
//       "name": string,
//       "catchPhrase": string,
//       "bs": string
//     }
//   }
type SendDataProps = {
    FIO: string,
    EMail: string
}

function SendData({FIO, EMail} : SendDataProps):void {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const data : UserData = {name: FIO, email: EMail}
    axios.post(URL, data).then(function(response){
        console.log(response);
    });
}

export default SendData;