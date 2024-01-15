<script lang="ts">
    export let data;
    console.log(data.countryData.area)
</script>

<section>
    <h1 class="">{data.countryName}</h1>
    <img src={data.countryFlag.img} alt={data.countryFlag.alt}>
</section>