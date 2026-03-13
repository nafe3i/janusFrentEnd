const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let forme = this;
    let formdata = new FormData(forme);

    // console.log(formdata)

    let data = {}

    formdata.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data)

    const raw = JSON.stringify(data);
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("http://13.62.45.197/api/register", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
});