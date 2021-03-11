import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export async function fetchProfile(username: string) {
  const doc = new DOMParser().parseFromString(await fetch(`https://mine.ly/${username}`).then(res => res.text()), 'text/html')!

  class Profile {
    UUID = doc.querySelector('samp')!.textContent
    nameHistory: Record<string, string | Date | number>[] = []
    

    constructor() {
      for (let i = 0; i < doc.querySelectorAll('a[translate="no"]').length; i++) {
        this.nameHistory.push({
          username: doc.querySelectorAll('a[translate="no"]')[i].textContent,
          changeDate: doc.querySelectorAll('time')[i] === undefined ? 0 : new Date(doc.querySelectorAll('time')[i].textContent)
        })
      }
    }
  }

  return new Profile()
}
