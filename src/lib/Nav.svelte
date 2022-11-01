<script lang="ts">
    import { onMount } from "svelte";
    import { audios } from "$lib/songs"

    let menu: HTMLElement
    let container: HTMLDivElement
    let opened: boolean = false
    let loaded: boolean = false
    let path = "http://www.sitodiroberto.tk:5173/recs/"

    const openMenu = () => {
        opened = !opened
        if(opened == true) {
            menu.style.left = "0px"
        } else {
            menu.style.left = "-100%"
        }
    }

    audios.subscribe(value => {
        if(value != undefined) {
            loaded = true
        }
    })
</script>

<nav>
    <ul>
        <li>
            <h4>
                <a href="http://www.sitodiroberto.tk:5173">Radio Web Alessi</a>
            </h4>
        </li>
    </ul>
    <ul>
        <li on:click={() =>openMenu()} on:keypress={() => {}}>
            <i class="fa-solid fa-bars"></i>
        </li>
    </ul>
</nav>
<div id="sfondo"></div>
<div id="menu" bind:this={menu}>
    {#if loaded == true}
        <div id="container" bind:this={container}>
            <h4>
                <span>Archivio Trasimissioni</span>
                <i on:click={() =>openMenu()} on:keypress={() => {}}
                    class="fa-solid fa-bars">
                </i>
            </h4>
            {#each $audios as audio}
                <li>
                    <a target="_self" href={path + audio.filename.split(".")[0]}>
                        {audio.filename.split(".")[0]}
                    </a>
                </li>
            {/each}
        </div>
    {/if}
</div>

<style>
    nav {
        position: fixed;
        top: 0px;
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        background-color: white;
        z-index: 1;
    }

    nav ul {
        height: 100%;
        padding: 0px;
        margin: 0px;
    }

    nav ul li {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    nav ul li:first-child {
        padding-left: 1rem;
    }

    nav ul li:last-child {
        padding-right: 1rem;
    }

    i {
        cursor: pointer;
    }

    #sfondo {
        width: 100%;
        aspect-ratio: 2;
        background-image: url(/sfondo.jpg);
        background-size: 100% 100%;
    }

    #menu {
        position: absolute;
        top: 0px;
        left: -100%;
        width: 100%;
        max-width: 600px;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        z-index: 2;
    }

    #container {
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
    }

    #container h4 {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #container h4 i {
        width: 10%;
    }

    #container li {
        width: 100%;
        height: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    a {
        color: black;
        text-decoration: none;
        white-space: nowrap;
    }

    a:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 600px) {
        #menu {
            min-width: 600px;
        }
    }
</style>