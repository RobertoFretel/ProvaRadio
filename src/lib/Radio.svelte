<script lang="ts">
    import Carrousel from "$lib/Carrousel.svelte";
    import { audios } from "$lib/songs"
    import Programmazione from "./Programmazione.svelte";

    let loaded: boolean = false
    let url: string = ""
    let path: string = "http://www.sitodiroberto.tk:3000/media/"

    export let titolo: string
    
    audios.subscribe(value => {
        if(value != undefined) {
            console.log(titolo)
            if(titolo != "Ultima Registrazione") {
                url = path + titolo + ".mp3"
                loaded = true
            } else {
                url = value[0].url
                loaded = true
            }
        }
    })
</script>

<div id="supercontainer">
    <div id="container">
        <br>
        <Carrousel></Carrousel>
        <br>
        {#if loaded == true}
            <h4>{titolo}</h4>
            <audio src={url} controls></audio>
        {/if}
        <h4>Tabella Programmazione</h4>
        <Programmazione></Programmazione>
        <footer>
            <small>Sito creato da Roberto Fretel</small>
        </footer>
    </div>
</div>

<style>
    #supercontainer {
        position: absolute;
        width: 100%;
        height: 80%;
        left: 0px;
        top: 30%;
        overflow: scroll;
        background-color: white;
    }

    #container {
        margin-top: 1rem;
        width: 100%;
        height: auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    audio {
        display: flex;
        justify-content: cneter;
        margin-bottom: 2rem;
    }

    footer {
        width: 100%;
        min-height: 1rem;
        height: auto;
        text-align: center;
    }

    small {
        font-size: 0.6rem;
    }

    @media only screen and (min-width: 1000px){
        #container {
            width: calc(100% - 30%);
            padding: 0px 15%;
        }
    }
</style>