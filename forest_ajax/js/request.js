const url ="https://jsonplaceholder.typicode.com/posts";
const method = "GET";
const synsc = true;
const ajax = new XMLHttpRequest();
ajax.open(method,url,synsc);
ajax.onlaod = () =>{
    const data = JSON.parse(ajax.response);
    const result = document.querySelector('table');
    data.forEach(item => {
     if(item.id <= 50){
         result.innerHTML +=`
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>
         `;
       }
    })
}
ajax.send();