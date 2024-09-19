// Task 1 - Mirror Text
const inputElement = document.getElementById("input-box")
const mirror = document.getElementById('mirror');
inputElement.addEventListener('keyup', (e)=>{
    mirror.textContent = e.target.value;
})

// Task 2 - Getting data from API
const posts = document.getElementById("posts");
const fetchData = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Error fetching data from api, Error Code" + response.status)
        }
        return response.json();
    })
    .then(data=>updateUI(data))
    .catch(error=> console.error(error));
}

const updateUI = (data) => {
    posts.innerHTML = "";

    for(let post of data){
        const container = document.createElement("div");
        const title = document.createElement("h3");
        const content = document.createElement("p");

        title.textContent = `Post #${post.id}: ${post.title}`
        content.textContent = post.body;
        
        container.appendChild(title);
        container.appendChild(content);
        posts.appendChild(container);
    }
}

window.onload = fetchData

// Task 3 - Celcius to Farenheit
const celcius = document.getElementById('celcius');
const farenheit = document.getElementById('farenheit');
const toCelcius = (f) => (5/9)*(f-32);
const toFarenheit = (c) => ((9/5)*c)+32;

celcius.addEventListener('change',(e)=>{
    farenheit.value = toFarenheit(Number.parseFloat(e.target.value));
})

farenheit.addEventListener('change',(e)=>{
    celcius.value = toCelcius(Number.parseFloat(e.target.value));
})

// Task 4 - Password
const password = document.getElementById("password");
const viewPassword = document.getElementById('view-password');
const togglePassword = (type) => type==='password'?'text':'password';

viewPassword.addEventListener('click', ()=>{
    const type = password.type;
    password.type = togglePassword(type);
})

// Task 5 - No of characters typed
const countChars = document.getElementById('count-chars');
var count=0;

document.addEventListener('keydown', ()=>{
    countChars.textContent = ++count;
})
