<script lang="ts">
    import { type card } from "$lib/index"
    export let data: card;
</script>

<article class="p-6 border-black border-[1.8px] rounded-md grid gap-x-5 items-center grid-cols-2 transition cursor-pointer hover:scale-105">
    <img src={data.flagURL} alt={data.flagAlt}>
    <section>
        <h2 class="text-2xl">{data.name}</h2>
        <p>Capital(s): {data.capitals.join(", ")}</p>
        <p>Population: {data.population}</p>
        <p>Continent(s): {data.continents.join(", ")}</p>
    </section>
</article>