const url ="https://jsonplaceholder.typicode.com/users";
const method = "GET";
const synsc = true;
const api = new XMLHttpRequest();
api.open(method,url,synsc);
api.onload = () => {
    const data = JSON.parse(api.response);
    const result = document.querySelector('table');
      data.forEach(element => {
          const {id,name,email,phone,website} = element;
          if(id >=2 && id <= 8)
          result.innerHTML +=`
            <tr>
                <td>${id}<td>
                <td>${name}<td>
                <td>${email}<td>
                <td>${phone}<td>
                <td>${website}<td>
            </tr>
          `;
          
      });
}
api.send();