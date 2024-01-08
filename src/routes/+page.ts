export async function load({ fetch }) {
	try {
		const url = new URL(
			'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,continents,population,subregion,flags'
		);

		const res = await fetch(url);
		const countries = await res.json();

		return { countries };
	} catch (_) {
		console.log('An error occured');
	}
}
