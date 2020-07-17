import {API_URL} from './config.js'
const searchInput = document.getElementById('input');
async function gettingnews() {
    try{
        const resp = await fetch(`${API_URL}`);
        const data = await resp.json();
        for(let i = 0; i < 12; i++){
            let users = await fetch(`${data[i].url}`)
            let usersData = await users.json()    
            document.getElementById('row').innerHTML += `<div class="card card${i}"></div>`;
            document.querySelector(`.card${i}`).innerHTML += `<img src="${usersData.avatar_url}">`;
            document.querySelector(`.card${i}`).innerHTML += `<div class="cont cont${i}"></div>`;
            document.querySelector(`.cont${i}`).innerHTML += `<h4><b>${usersData.name}</b></h4>`;
            document.querySelector(`.cont${i}`).innerHTML += `<p>Login : ${usersData.login}</p>`;
        }
    }catch (error){
        console.log(error,'catch')
    }
};
gettingnews()

document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();

    async function gettingUserInfo() {
        try {
            const resp = await fetch(`${API_URL}/${searchInput.value}`)
            const data = await resp.json();
            document.querySelector(`.usersList`).style.display = 'none';
            document.querySelector('.userinfo').style.display = 'block';

            document.getElementById('row2').innerHTML = `<div id="usercard"></div>`;
            document.getElementById('usercard').innerHTML += `<img src="${data.avatar_url}">`;
            document.getElementById('usercard').innerHTML += `<div id="contuser"></div>`;
            document.getElementById('contuser').innerHTML += `<h4><b>Name: ${data.name} </b></h4>`;
            document.getElementById('contuser').innerHTML += `<p>Login : ${data.login}</p>`;
            
            document.getElementById('row2').innerHTML += `<div id="usercard2"></div>`;
            document.getElementById('usercard2').innerHTML += `<p>Followers : ${data.followers}</p>`;
            document.getElementById('usercard2').innerHTML += `<p>Following : ${data.following}</p>`;
            document.getElementById('usercard2').innerHTML += `<p>Location : ${data.location}</p>`;
            document.getElementById('usercard2').innerHTML += `<p>Id : ${data.id}</p>`;
            document.getElementById('usercard2').innerHTML += `<p>Company : ${data.company}</p>`;

        }
        catch (error){
            alert('account does not exist')
            console.error(error)
        }
    }
        gettingUserInfo()
})