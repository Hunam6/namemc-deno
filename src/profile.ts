import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'

export async function fetchProfile(username: string) {
  const doc = new DOMParser().parseFromString(await fetch(`https://mine.ly/${username}`).then(res => res.text()), 'text/html')!

  class NameMC {
    rank = (doc.querySelector('a[href*="store"].namemc-rank')! === null) ? false : true
    location = 'Location not set'
    accounts: Record<string, string>[] = []
    friends: Record<string, string | boolean>[] = []
    constructor() {
      if (doc.querySelector('.emoji.mr-1')! !== null)
        this.location = doc
          .querySelector('.emoji.mr-1')!
          .getAttribute('alt')!
          .replace(/../g, cp => String.fromCharCode(cp.codePointAt(0)! - 127397))
          .toLowerCase()
      if (doc.querySelector('.text-lg-left')! !== null) {
        for (let i = 0; i < doc.querySelector('.text-lg-left')!.children.length; i++) {
          this.accounts.push({
            name: doc.querySelector('.text-lg-left')!.children[i].getAttribute('data-original-title') === null ? doc.querySelector('.text-lg-left')!.children[i].getAttribute('title')! : doc.querySelector('.text-lg-left')!.children[i].getAttribute('data-original-title')!,
            value: doc.querySelector('.text-lg-left')!.children[i].getAttribute('data-content') === null ? doc.querySelector('.text-lg-left')!.children[i].getAttribute('href')! : doc.querySelector('.text-lg-left')!.children[i].getAttribute('data-content')!,
            icon: doc.querySelector('.text-lg-left')!.children[i].children[0].getAttribute('src')!
          })
        }
      }
      if (doc.querySelector('.player-list')! !== null) {
        for (let i = 0; i < doc.querySelector('.player-list')!.children.length; i++) {
          this.friends.push({
            username: doc.querySelector('.player-list')!.children[i].textContent,
            rank: doc.querySelector('.player-list')!.children[i].getAttribute('class') === 'namemc-rank namemc-rank-10' ? true : false,
          })
        }
      }
    }
  }

  class Profile {
    UUID = doc.querySelector('samp')!.textContent
    names: Record<string, string | Date | number>[] = []
    skins: Record<string, string | Date>[] = []
    NameMC: string | NameMC = 'Profile not claimed'

    constructor() {
      for (let i = 0; i < doc.querySelectorAll('a[translate="no"]').length; i++) {
        this.names.push({
          username: doc.querySelectorAll('a[translate="no"]')[i].textContent,
          changeDate: doc.querySelectorAll('time')[i] === undefined ? 0 : new Date(doc.querySelectorAll('time')[i].textContent)
        })
      }
      for (let i = 0; i < doc.querySelectorAll('.card-body.text-center')[1].children.length; i++) {
        this.skins.push({
          texture: `https://namemc.com/texture${doc.querySelectorAll('.card-body.text-center')[1].children[i].getAttribute('href')!.substring(5)}.png`,
          date: new Date(doc.querySelectorAll('.card-body.text-center')[1].children[i].children[0].getAttribute('title')!)
        })
      }
      if (doc.querySelector('.alert-info') === null) this.NameMC = new NameMC()
    }
  }

  return new Profile()
}
