const url = "https://jsonplaceholder.typicode.com/posts";
async function getdata(){
    const response = await fetch(url);
    const data = await response.json();
    const result = document.querySelector('table');
    await data.forEach(item => {
        const {id, title, body} = item;
        result.innerHTML +=`
        <tr>
           <td>${id}</td>
           <td>${title}</td>
           <td>${body}</td>
        </tr>
        `;
    });
}
getdata();


// async function getdata (){
//     const response = await fetch(url);
//     const data = await response.json();
//     const result = document.querySelector('table');
//     await data.forEach(element => {
//         result.innerHTML +=`
//             <tr>
//                 <td>${element.id}</td>
//                 <td>${element.title}</td>
//                 <td>${element.body}</td>
//             </tr>
//         `;
//     });
// }
// getdata();
