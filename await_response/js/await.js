const url = "https://jsonplaceholder.typicode.com/users";
async function data(){
    const response = await fetch(url);
    const data = await response.json();
    const result = document.querySelector('table');
    await data.forEach(element => {
        if (element.id <= 5){
            result.innerHTML +=`
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                </tr>
            `;
        }
    });
}
data();