const URL_API = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json'
 
const HTMLresponse = document.querySelector("#table")
const tr = document.createElement('tr')

 fetch(URL_API)
   .then(response => response.json())
   .then((projects) => {
        projects.forEach((project) => {
            let elem = document.createElement('tr')
            elem.appendChild(
                document.createTextNode(`${project.location}`)
            )
            tr.appendChild(elem)
        })
        HTMLresponse.appendChild(tr)
   });
