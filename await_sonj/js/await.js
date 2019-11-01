const url = "https://jsonplaceholder.typicode.com/todos";
async function getdata(){
    const response = await fetch(url);
    const data = await response.json();
    const result = document.querySelector('table');
    await data.forEach(element => {
        const {id, title, completed} = element;
       if(element.id <= 20){
           result.innerHTML +=`
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed}</td>
            </tr>
         `;
       }
    })
}
getdata();