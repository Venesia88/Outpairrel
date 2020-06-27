import axios from "axios";

function getProduct() {
    let url = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?currentpage=0&pagesize=30";
    console.log(`Making GET request to ${url}`);
    return axios.get(url, {
        headers: {
            "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            "x-rapidapi-key": "6555a7d138msha5a289652d20176p1790a3jsn577cdb6a8b03"
        }
    }).then(res => {
        return res.data.results;
    }).catch(err => {
        console.log(err);
    });
}

export default getProduct;