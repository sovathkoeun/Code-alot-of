const url="https://jsonplaceholder.typicode.com/users";
const method ="GET";
const syncs = true;
const ajax = new XMLHttpRequest();
ajax.open(method, url, syncs);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    const result = document.querySelector('table');
    data.forEach(item => {
       result.innerHTML +=`
            <tr>
                <th>${item.id}</th>
                <th>${item.name}</th>
                <th>${item.username}</th>
            </tr>
        `;
    })
}
ajax.send();