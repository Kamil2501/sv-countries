<script lang="ts">
	import CountryCard from "$lib/components/CountryCard.svelte";
	import type { PageData } from "./$types";
    import { type card } from "$lib/index"
    export let data: PageData;
    
    let countries = data.countries;
    let continent = 'All'

    const processData = (country: any) => {
        const cardData: card = {
            flagURL: country.flags.png,
            flagAlt: country.flags.alt,
            name: country.name.common,
            capitals: country.capital,
            population: country.population,
            continents: country.continents, 
       }

       return cardData
    }

    const filterCountries = (ev: Event) => {
      countries = data.countries.filter((x: any) => x.name.common.toLowerCase().includes((ev.target as HTMLInputElement).value.toLowerCase()) && (continent === 'All' || x.continents.includes(continent)))  
    }

    const filterContinents = (ev: Event) => {
        continent = (ev.target as HTMLSelectElement)!.value;
        countries = data.countries.filter((x: card) => x.continents.includes(continent) || continent === 'All')
    }
</script>

<div class="mx-auto w-[40%] flex flex-col items-center gap-y-5 py-14">
    <h1 class="text-4xl">Countries</h1>
    <div>
        <label for="search-country">Search country</label>
        <input on:input={filterCountries} type="text" class="w-full p-1 rounded-md bg-gray-200 text-black" id="search country">
    </div>
    <div>
        <label for="continent">Continent</label>
        <select id="continent" on:change={filterContinents} bind:value={continent} class="text-black">
            <option value="All">All</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
        </select>
    </div>
</div>
<div class="mx-5 pb-10 grid justify-center gap-5 grid-cols-[repeat(auto-fit,430px)]">
    {#each countries as country}
       {@const cardData = processData(country) }
       <a href={`/${cardData.name}`}><CountryCard data={cardData} /></a>
    {/each}
</div>