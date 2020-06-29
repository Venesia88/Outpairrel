import axios from "axios";

function getProduct() {
    let url = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=30";
    console.log(`Making GET request to ${url}`);
    return axios.get(url, {
        headers: {
            "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            "x-rapidapi-key": "a0341803fcmshe7196dd3218061ep15ec25jsn5e1fb7202402"
        }
    }).then(res => {
        return res.data.results;
    }).catch(err => {
        console.log(err);
    });
}

export default getProduct;