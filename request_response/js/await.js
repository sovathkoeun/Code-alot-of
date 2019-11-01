const url = "https://jsonplaceholder.typicode.com/users";
const method = "GET";
const syncs = true;
const api = new XMLHttpRequest();
api.open(method, url, syncs);
api.onload = () => {
    const data = JSON.parse(api.response);
    const result = document.querySelector('table');
        data.forEach(element => {
            const {id,name,username,email,phone} = element;
            if(element.id <= 5 ){
                result.innerHTML +=`
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${username}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                    </tr>
                `;
            }
        });
    }
api.send();