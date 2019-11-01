const url ="https://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = true;
const sk = new XMLHttpRequest;
sk.open(method,url,syncs);
sk.onload = () => {
    const data = JSON.parse(sk.response);
    const result = document.querySelector('table');
    data.forEach(element => {
        result.innerHTML +=`
            <tr>
                <th>${element.id}</th>
                <th>${element.title}</th>
                <th>${element.completed}</th>
            </tr>
        `;
    })
}
sk.send();