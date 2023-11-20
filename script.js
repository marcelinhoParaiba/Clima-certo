const requestOptions={
  method:'GET',
  redirect:'follow'
}


fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5446/current?token=c8d658c4b5da8010aaba4b57cc193ca3",requestOptions,{mode:'no-cors'})
.then(response => response.json())
  .then(tempoJson => {
    console.log(tempoJson);
    render(tempoJson);
  })
  .catch(error => console.log('error', error));

function render(tempoJson) {
  const ul = document.getElementById("previsao-tempo");
  ul.innerHTML = "";

  ul.insertAdjacentHTML("beforeend", `
  <li id="${tempoJson.id}">
            <div class="local">
                <p>Tempo agora em </p>
                <p class="cidade">${tempoJson.name}, ${tempoJson.state}</p>
            </div>
            <div class="temperatura">
                <img src= "https://www.climatempo.com.br/dist/images/v2/svg/${tempoJson.data.icon}.svg"></img>
                <p class="p-temperatura">${tempoJson.data.temperature}º</p>
            </div>
            <div class ="condi-sens">
            <div class="condicao">
                <img src= "https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg"></img>
                <p>${tempoJson.data.condition}</p>
            </div>
            <div class="sensacao">
                <img src= "https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg"></img>
                <p>${tempoJson.data.sensation}º</p>
            </div>
            </div>
            <div class="vento">
                <p>Vento</p>
                <p>${tempoJson.data.wind_velocity} km/h</p>
            </div>
            <div class="humidade">
                <p>Umidade</p>
               
                <p>${tempoJson.data.humidity} %</p>
               
            </div>
                
                
            </li>
   
  `);
}
