const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
.then(response => response.json())
.then(data =>{
    const result = document.querySelector('table');
 data.forEach(item => {
     if(item.id <= 30){
        result.innerHTML +=`
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.completed}</td>
        </tr>   
        `;
     } 
 })
})
.catch(() => console.error("code error !!!!"))
.finally(() => console.warn("code error"))