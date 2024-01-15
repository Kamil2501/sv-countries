export async function load({params, fetch}) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${params.country}`)
    const countryData = await response.json();
    console.log(countryData[0])
    return {
        countryName: params.country,
        countryFlag: {
            img: countryData[0].flags.png,
            alt: countryData[0].flags.alt
        },
        countryData
    }
}