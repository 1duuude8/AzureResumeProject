window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter33.azurewebsites.net/api/GetResumeCounter?code=0j4JUmVS0skGYQQHC9sQw_n07oKgZ6P9oN9cP_eaLkWIAzFuoNmEBQ%3D%3D';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}