const year = document.querySelector("#year");

fetch("https://whatyearisit-backend-nwqn.vercel.app/")
    .then((response) => response.json())
    .then((data) => {
        year.textContent(data.year);
    });
// test 2
// test
