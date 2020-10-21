const vielasPoga = document.querySelector('.vielas-poga');
const aprikojumsPoga = document.querySelector('.aprikojums-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
const vielasRindas = document.getElementsByClassName('viela');

vielasPoga.addEventListener('click', function() {
		raditDatus(2);
});

aprikojumsPoga.addEventListener('click', function() {
raditDatus(1);
});

async function iegutAprikojumuNoApi(){
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/inventars')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function iegutVielasNoApi(){
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/vielas')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function raditDatus(ko){
    let aprikojumuJson = await iegutAprikojumuNoApi();
    let vielasJson = await iegutVielasNoApi();
	let produktiKopa=[];
	switch(ko) {
	  case 1:
		produktiKopa = aprikojumuJson;
		  break;
	  case 2:
		produktiKopa = vielasJson;
		  break;
	   default:
		produktiKopa = aprikojumuJson.concat(vielasJson);
	}
let dati=document.getElementById("data");
        dati.innerHTML="";
    for (let i = 0; i < produktiKopa.length; i++){
		let text=`<tr class="aprikojums"><td>${produktiKopa[i]['id']}</td>
		<td>${produktiKopa[i]['nosaukums']}</td>
		<td>${produktiKopa[i]['tips']}</td>
		<td>${produktiKopa[i]['apakstips']}</td>
		<td>${produktiKopa[i]['skaits']}</td>`;

		text+=`<td>`;
		if(typeof produktiKopa[i]['daudzums']=== "undefined"){
		}else{
			text+=produktiKopa[i]['daudzums']+ " "+produktiKopa[i]['mervienibas'];	

		}
		text+=`</td>
		<td>`;
		if(produktiKopa[i]['komentari']!=""){
		text+=`<abbr title="${produktiKopa[i]['komentari']}">Daži komentāri</abbr>`;
		}else{
			text+="&nbsp;";
		}
		text+=`</td></tr>
		`;
		//${produktiKopa[i]['komentari']}
        dati.innerHTML+=text;

    }
    
}
raditDatus(0);