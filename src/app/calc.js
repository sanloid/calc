// const axios = require("axios");

import axios from "axios";
const calculate = (expression, setState) => {
    console.log(expression);

    const options = {
        method: 'GET',
        url: 'http://api.mathjs.org/v4/',
        params: { expr: expression },
    };

    axios.request(options).then(function (response) {
        setState(response.data);
    }).catch(function (error) {
        setState("Неверное выражение");
    });
}

export default calculate