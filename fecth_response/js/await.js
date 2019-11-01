const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(response => response.json())
.then(data => {
    const result = document.querySelector('table');
    data.forEach(element => {
        const {id,name, username,email,phone} = element;
        if(element.id <= 6){
            result.innerHTML +=`
            <tr>
                <td>${id}</th>
                <td>${name}</th>
                <td>${username}</th>
                <td>${email}</th>
                <td>${phone}</th>
            </tr>
            `;
        }
    });
})
.catch(() => console.error("get data from browser"))
.finally(() => console.warn("data cannot!!!!!!!!"))