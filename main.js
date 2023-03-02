const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showAi(data.data.tools))
}

const showAi = data =>{
    // console.log(data);
    const dataContainer = document.getElementById('container');
    data.slice(1, 7).forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card" style="width: 16rem;">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">1.${element.features[0]}</p>
                <p class="card-text">2.${element.features[1]}</p>
                <p class="card-text">3.${element.features[2]}</p>
                <hr>
                <div class="d-flex justify-content-between">
                <div>
                <h4 class="card-text">${element.name}</h4>
                <p class="card-text"><i class="fa-solid fa-calendar-days"></i> ${element.published_in}</p>
                </div>
                <div>
                <i onclick="loadAidetail('${element.id}')" class="fa-solid fa-arrow-right-long" data-bs-toggle="modal" data-bs-target="#aiDetailModal"></i>
                </div>
                </div>

            </div>
        </div>
        `
        dataContainer.appendChild(div)
    });
}

const loadAidetail = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAidetail(data))
}

const displayAidetail = ai => {
    console.log(ai);
    const leftContainer = document.getElementById('left-container');
    leftContainer.innerHTML = '';
    const leftDiv = document.createElement('div')
    leftDiv.innerHTML = `
    <h6>${ai.data.description}</h6>
    <div class="row my-5">
        <div class="col-md-4">${ai.data.pricing[0].price}</div>
        <div class="col-md-4">${ai.data.pricing[1].price}</div>
        <div class="col-md-4">${ai.data.pricing[2].price}</div>
    </div>
    <div class="row">
        <div class="col-md-6">
        <h4>Features</h4>
        <p>${ai.data.features}</p>
        </div>
        <div class="col-md-6">
        <h4>Integrations</h4>
        <p>${ai.data.integrations[0]}</p>
        <p>${ai.data.integrations[1]}</p>
        <p>${ai.data.integrations[2]}</p>
        </div>
    </div>
    `
    leftContainer.appendChild(leftDiv)


    const rightContainer = document.getElementById('right-container')
    rightContainer.innerHTML='';
    const rightDiv = document.createElement('div');
    rightDiv.innerHTML=`
    <img class="img-fluid mt-5" src="${ai.data.image_link[0]}">
    `
    rightContainer.appendChild(rightDiv)

}