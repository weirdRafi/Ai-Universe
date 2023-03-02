const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAi(data.data.tools))
}

const showAi = data =>{
    // console.log(data);
    const dataContainer = document.getElementById('container');
    data.slice(1, 7).forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card" style="width: 16rem;">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">1.${element.features[0]}</p>
                <p class="card-text">2.${element.features[1]}</p>
                <p class="card-text">3.${element.features[2]}</p>
                
            </div>
        </div>
        `
        dataContainer.appendChild(div)
    });
}