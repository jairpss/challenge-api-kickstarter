// fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json'
const table = document.querySelector("table")

async function fillTable() {
    const tableHead = table.querySelector("th")
    const tableBody = table.querySelector("tr")
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
}

fillTable(url, table)