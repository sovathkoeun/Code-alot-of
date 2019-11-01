const url = "https://jsonplaceholder.typicode.com/posts";
const method = "GET";
const synsc = true;
const sl = new XMLHttpRequest();
sl.open(method,url,synsc);
sl.onload  = () =>{
    const data = JSON.parse(sl.response)
    const result = document.querySelector('table');
    
    data.forEach(element => {
        result.innerHTML +=`
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
            </tr>
        `;
    });
}
sl.send();