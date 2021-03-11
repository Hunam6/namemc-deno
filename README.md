<h1 align='center'><ins>namemc-deno</ins></h1>
<p align='center'><strong>A NameMC API/scraper for Deno</strong></p>

---

#### Example

```typescript
import {fetchProfile} from 'https://deno.land/x/namemc/mod.ts'
fetchProfile('ilyNess').then(res => console.log(res))
```

<details><summary>Output</summary>

  ```typescript
Profile {
  UUID: "cc3e777b-74fe-4bb5-a80a-fcac9b9c8120",
  names: [
    { username: "ilyNess", changeDate: 2021-03-01T21:48:15.000Z },
    { username: "Crau_", changeDate: 2021-01-28T07:21:21.000Z },
    { username: "N1Tee_", changeDate: 2020-12-29T04:24:04.000Z },
    { username: "iB4DBoy", changeDate: 2020-08-21T02:37:11.000Z },
    { username: "iMooh", changeDate: 2020-07-21T22:51:33.000Z },
    { username: "0hSword", changeDate: 2020-06-21T22:01:30.000Z },
    { username: "iHoneyPie_", changeDate: 2020-05-22T14:09:32.000Z },
    { username: "_NiTee_", changeDate: 0 },
    { username: "ilyNitee", changeDate: 0 },
    { username: "PvP Land", changeDate: 0 },
    { username: "Ghostly Network", changeDate: 0 },
    { username: "mc.universocraft.com", changeDate: 0 }
  ],
  skins: [
    {
      texture: "https://namemc.com/texture/d53b688fbc830d65.png",
      date: 2021-03-11T02:48:02.348Z
    },
    {
      texture: "https://namemc.com/texture/c4f2ac301361b2a3.png",
      date: 2021-03-11T02:01:33.234Z
    },
    {
      texture: "https://namemc.com/texture/a4eaf5f46753cf75.png",
      date: 2021-03-11T01:56:37.588Z
    },
    {
      texture: "https://namemc.com/texture/c869e2b8f51262ec.png",
      date: 2021-03-10T14:57:28.526Z
    },
    {
      texture: "https://namemc.com/texture/cc7fcb64f288ae24.png",
      date: 2021-03-10T14:56:12.725Z
    },
    {
      texture: "https://namemc.com/texture/24c852a376656ef9.png",
      date: 2021-03-10T14:54:35.397Z
    },
    {
      texture: "https://namemc.com/texture/d7fb69f45c2b4344.png",
      date: 2021-03-10T14:52:49.517Z
    },
    {
      texture: "https://namemc.com/texture/cad44f8fd39fe7c5.png",
      date: 2021-03-08T21:22:43.687Z
    },
    {
      texture: "https://namemc.com/texture/86522cf44fa2f59f.png",
      date: 2021-03-08T18:08:38.403Z
    },
    {
      texture: "https://namemc.com/texture/3e495914c27fa4f6.png",
      date: 2021-03-07T07:05:17.314Z
    },
    {
      texture: "https://namemc.com/texture/9aa6d87e0874166a.png",
      date: 2021-03-06T16:50:15.612Z
    },
    {
      texture: "https://namemc.com/texture/68afb1f3b6ac3ea4.png",
      date: 2021-03-06T16:49:01.807Z
    },
    {
      texture: "https://namemc.com/texture/b6cf56d845ebefc1.png",
      date: 2021-03-06T16:47:39.744Z
    },
    {
      texture: "https://namemc.com/texture/20f76cfe7d391338.png",
      date: 2021-03-06T16:47:14.572Z
    },
    {
      texture: "https://namemc.com/texture/eb7c7fefcd9d6f9c.png",
      date: 2021-03-05T00:20:48.024Z
    },
    {
      texture: "https://namemc.com/texture/7816ccfc6eb0653a.png",
      date: 2021-03-04T16:17:22.977Z
    },
    {
      texture: "https://namemc.com/texture/ac9b587ab9285b32.png",
      date: 2021-03-03T17:37:29.096Z
    },
    {
      texture: "https://namemc.com/texture/a5ac053b725bd649.png",
      date: 2021-03-03T00:41:11.314Z
    },
    {
      texture: "https://namemc.com/texture/70bd5537dee7fbeb.png",
      date: 2021-03-03T00:39:13.981Z
    },
    {
      texture: "https://namemc.com/texture/4febbfc99fc9fdf4.png",
      date: 2021-03-03T00:38:19.457Z
    },
    {
      texture: "https://namemc.com/texture/ed9b22ff118277b5.png",
      date: 2021-03-03T00:37:09.903Z
    },
    {
      texture: "https://namemc.com/texture/9fef7d7f2136cd0e.png",
      date: 2021-02-28T19:05:08.438Z
    },
    {
      texture: "https://namemc.com/texture/42572ca8fcdef3b3.png",
      date: 2021-02-28T14:10:40.198Z
    },
    {
      texture: "https://namemc.com/texture/a29effad8eb58066.png",
      date: 2021-02-26T21:01:14.970Z
    },
    {
      texture: "https://namemc.com/texture/9eb2ecec6cb8c53e.png",
      date: 2021-02-25T20:05:12.198Z
    },
    {
      texture: "https://namemc.com/texture/7b41130d7e8f3a71.png",
      date: 2021-02-25T19:40:15.301Z
    },
    {
      texture: "https://namemc.com/texture/66275c9f5441809f.png",
      date: 2021-02-25T19:26:39.885Z
    }
  ],
  NameMC: NameMC {
    views: 7415,
    rank: true,
    location: "au",
    accounts: [
      {
        name: "Discord",
        value: "ilyNess#0028",
        icon: "https://static.namemc.com/i/service/discord.svg"
      },
      {
        name: "Steam",
        value: "https://steamcommunity.com/profiles/76561199032116911",
        icon: "https://static.namemc.com/i/service/steam.svg"
      },
      {
        name: "YouTube",
        value: "https://www.youtube.com/Peppa%2520pig",
        icon: "https://static.namemc.com/i/service/youtube.svg"
      }
    ],
    friends: [ { username: "ilyNitee", rank: false } ],
    servers: [
      {
        name: "PvP Land",
        ip: "pvp.land",
        icon: "https://texture.namemc.com/3c/09/3c0913ec01b0babf.png"
      },
      {
        name: "Ghostly Network",
        ip: "ghostly.live",
        icon: "https://texture.namemc.com/3c/09/3c0913ec01b0babf.png"
      },
      {
        name: "mc.universocraft.com",
        ip: "mc.universocraft.com",
        icon: "https://texture.namemc.com/3c/09/3c0913ec01b0babf.png"
      }
    ]
  }
}
  ```

</details>

#### Doc

```typescript
fetchProfile(username: string)
```

**|** `username` is a Minecraft username

**↳** return infos about the player and it's NameMC profile

### Credits

Thanks [@b-fuze](https://github.com/b-fuze) for it's [Deno DOM](https://github.com/b-fuze/deno-dom).
