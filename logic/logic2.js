const name = localStorage.getItem('name');
const lat = localStorage.getItem('lat');
const lon = localStorage.getItem('lon');

document.querySelector('h1')
.appendChild
(document.createTextNode(`${name} :`))

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m,apparent_temperature&timezone=auto`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        let div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(`Timezone : ${data.timezone}`))
        let parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)
        console.log(data);

        div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(`Time : ${data.current.time}`))
        parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)
        
        div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(` Temperature : ${data.current.temperature_2m} ${data.current_units.temperature_2m}`))
        parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)
        
   
        div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(`Apparent Temperature: ${data.current.apparent_temperature} ${data.current_units.apparent_temperature} `))
        parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)
        
        div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(`Humidity : ${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m} `))
        parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)

        div= document.createElement('div')
        div.classList.add('childInfo') 
        div.appendChild(document.createTextNode(`windspeed 10m : ${data.current.windspeed_10m} ${data.current_units.windspeed_10m} `))
        parentdiv= document.querySelector('.parentInfo')
        parentdiv.appendChild(div)
            
    }
    )

document.querySelector('button').addEventListener('click',()=>{
    window.location.href = 'page1.html'
})