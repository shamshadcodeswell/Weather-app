function debounce(fn,delay){
    let timerId;
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            search(...args);
        },delay) 
    }
}
let coordinates = [];
const search = function(input){
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=5`)
    .then((Response)=>{       
        return Response.json()        
    })
    .then((data)=>{
        document.querySelector('.parentSuggestions').innerHTML='';
        console.log(data);
        const parentDiv = document.querySelector('.parentSuggestions')
        for(let i=0; i<data.results.length; i++){
        const div = document.createElement('div')
        div.classList.add('suggestion');

        div.appendChild(document.createTextNode(data.results[i].name))
            div.addEventListener('click',()=>{
                coordinates = [data.results[i].latitude, data.results[i].longitude];
                localStorage.setItem('lat', data.results[i].latitude);
                localStorage.setItem('lon', data.results[i].longitude);
                localStorage.setItem('name', data.results[i].name);
                console.log(coordinates);
                window.location.href = 'searchResult.html'
                
            })
            
        parentDiv.appendChild(div)
        }
        
        
    })
}





const searchWithDebounce= debounce(search,500)


document.querySelector('#searchBar').addEventListener('input',(e)=>{
    searchWithDebounce(e.target.value);
})