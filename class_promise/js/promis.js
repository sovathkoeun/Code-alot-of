const url="https://jsonplaceholder.typicode.com/users";
async function userInfo(){
    const response = await fetch(url); //promise [fullfill, pending, reject][future]
    const data =  await response.json();
    const table = document.querySelector('table');
    await data.forEach(item => {
        const {username, email, phone, website, company} = item;
            table.innerHTML += `
                <tr>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                    <td>
                    ${company.name}
                    ${company.catchPhrase}
                    ${company.bs}
                    </td>
                </tr>
            `;
            // console.log(email);
    })
}
//invoke function
userInfo();