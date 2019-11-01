const url ="https://jsonplaceholder.typicode.com/users";
async function getdata(){
    const response =  await fetch(url);
    const data = await response.json();
    const result = document.querySelector('table');
    data.forEach(item => {
        const {id,name,email,phone,website} = item;
        if(id % 2 == 0){
            result.innerHTML +=`
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
            </tr>
           `;
        }
    });
}
getdata();