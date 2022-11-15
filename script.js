

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then((data) => {
        for(const key in data) {
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `<p>${data[key].name}</p>`
            document.body.append(newDiv)
            console.log(newDiv);
        }
    })   
    .catch(err => console.log(err)) 