import { browser } from "$app/environment"
import { writable } from "svelte/store"

let fetchSong = async (path: string) => {
    let res = await fetch(path)
    let json = await res.json()

    return json.docs.map((value: {
        filename: string,
        url: string
    }) => {
        return {
            filename: value.filename,
            url: value.url
        }
    })
}

fetchSong("http://www.sitodiroberto.tk:3000/api/media?sort=-createdAt").then((res) => {
    audios.set(res)
})

export let audios = writable<Array<{
    url: string,
    filename: string
}>>()
