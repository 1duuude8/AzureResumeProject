window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter8.azurewebsites.net/api/GetResumeCounter?code=3CKmCBx-VYkJyEFOTaMpGOwVd55sHOZEVt0IVdM-gEUmAzFu-A22KA%3D%3D';
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