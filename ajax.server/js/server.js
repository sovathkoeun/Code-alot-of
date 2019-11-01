const url ="https://jsonplaceholder.typicode.com/comments";
fetch(url)
.then((response) => response.json())
.then(data =>{
    const result = document.querySelector('table');
    data.forEach(element => {
        if(element.id <= 23){
            result.innerHTML +=`
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.body}</td>
            </tr>
        `;
        }
    })
})
.catch(() => console.error("this is a success!!!!"))
.finally(() => console.warn("cacth cannot successfully!!!!"))