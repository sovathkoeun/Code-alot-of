const url= "https://jsonplaceholder.typicode.com/users";
async function getdata (){
    const response = await fetch(url);
    const data   = await response.json();
    const result = document.querySelector('table');
    data.forEach(item => {
        const {id,username,email,phone,website} = item;
        if(id % 2 == 0 && id >= 6){
            result.innerHTML +=`
                <tr>
                    <td>${id}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                </tr>
            `;
        }
    });
}
getdata();