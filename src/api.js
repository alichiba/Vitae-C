import axios from 'axios'
const API_URL = "https://api.superparser.com"


export default function makeApiCall(resumeURL) {
    axios.post(API_URL + "/parse", {
        file_name: resumeURL
    }, { header: {
        'X-API-Key': process.env.API_KEY
    }}).then((res) => {
        console.log(res)
        return res;
    }).catch((err) => {
        console.error(err)
    })
}