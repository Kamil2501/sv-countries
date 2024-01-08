<script lang="ts">
	import CountryCard from "$lib/components/CountryCard.svelte";
	import type { PageData } from "./$types";
    import { type card } from "$lib/index"
    export let data: PageData;
    
    let countries = data.countries;

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
      countries = data.countries.filter((x: any) => x.name.common.toLowerCase().includes((ev.target as HTMLInputElement).value.toLowerCase()))  
    }
</script>

<div class="mx-auto w-[40%] flex flex-col items-center gap-y-5 py-14">
    <h1 class="text-4xl">Countries</h1>
    <div>
        <label for="search-country">Search country</label>
        <input on:input={filterCountries} type="text" class="w-full p-1 rounded-md bg-gray-300" id="search country">
    </div>
</div>
<div class="mx-5 mb-10 grid justify-center gap-5 grid-cols-[repeat(auto-fit,430px)]">
    {#each countries as country}
       {@const cardData = processData(country) }
       <CountryCard data={cardData} />
    {/each}
</div>