const myForm = document.querySelector('.myForm');
const myText = document.querySelector('.country');
const submitBtn = document.querySelector('.btn');
let statistics = document.querySelector(".result");
myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let countryName = myText.value;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '863e5efd3emshcc9121c79463f32p11ce21jsn02606c91e7b9',
			'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
		}
	};
	const url = `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`;
	fetch(url, options)
		.then(response => response.json())
		.then((res) => {
			let response = res.response[0];
			let country = response.country;
			let population = response.population
			let cases = response.cases;
			let activeCases = cases.active;
			let totalCases = cases.total;
			let newCases = cases.new;
			if (newCases === null) {
				newCases = 0;
			}
			let recovered = cases.recovered;
			let deaths = response.deaths;
			let newDeaths = deaths.new;
			if (newDeaths === null) {
				newDeaths = 0;
			}
			let totalDeaths = deaths.total;
			statistics.innerHTML = `
			<h1 class="region">Country:${country}</h1>
			<p class="population">Population: ${population}</p>
			<p class="totalCases">TotalCases: ${totalCases}😷</p>
			<p class="newCases">NewCases: ${newCases}😷</p>
			<p class="activeCases">ActiveCases: ${activeCases}</p>
			<p class="recovered">RecoveredCases: ${recovered}</p>
			<p class="totalDeaths">TotalDeaths: ${totalDeaths}💔</p>
			<p class="newDeaths">NewDeaths: ${newDeaths}💔</p>
			`;
		})
		.catch(error => {
			statistics.innerHTML = `<p>Please Enter Coutry❌</p>`
		})
		myText.value = "";
})













