const url = "https://jsonplaceholder.typicode.com/users";
async function getdata(){
    const response =   await fetch(url);
    const data = await response.json();
    const result = document.querySelector('table');
    await data.forEach(element => {
        const {id,name,username,email,phone} = element;
        if(element.id <= 5){
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
getdata();