<script lang="ts">
    import { page } from "$app/stores";
    import Nav from "$lib/Nav.svelte";
    import Radio from "$lib/Radio.svelte";
    
    let filename: string = $page.params.filename
    let path: string = "/audio/"
</script>

<svelte:head>
    <title>{filename}</title>
</svelte:head>

<Nav></Nav>
<Radio titolo={filename}></Radio>