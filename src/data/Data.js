const allProducts = [
    // mise
  {
    url: "https://assets3.razerzone.com/1xpBL9w6vPnrGGcn5w3wWd_Y80o=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh60%2Fh8a%2F9234033246238%2Fbasiliskv3-500x500.png",
    namePc: "Razer Basilisk V3",
    characterPc: "Customizable Gaming Mouse with Razer Chroma™ RGB",
    price: 69,
    category: "mise",
    id: 1,
  },
  {
    url: "https://assets3.razerzone.com/GJtqDS-4sJJ3ZaXJE0uIHq3UCfQ=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb4%2Fhec%2F9081076809758%2FBasilisk-X-Hyperspeed-500x500.png",
    namePc: "Razer Basilisk X HyperSpeed",
    characterPc: "Wireless Gaming Mouse with Razer™ HyperSpeed Technology",
    price: 59,
    category: "mise",
    id: 2,
  }, 
  {
    url: "https://assets3.razerzone.com/IoXgV1vgcFcXBGRiLbioQ1XSZ0c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh71%2F9080617041950%2FBasilisk-V2-500x500.png",
    namePc: "Razer Basilisk V2",
    characterPc: "Wired Gaming Mouse with 11 Programmable Buttons",
    price: 49,
    category: "mise",
    id: 3,
  },
  {
    url: "https://assets3.razerzone.com/ni6IkpRDZKsPpoLc2lq79sovF_A=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh19%2Fh61%2F9080617500702%2FBasilisk-Essential-500x500.png",
    namePc: "Razer Basilisk Essential",
    characterPc: "Ergonomic Gaming Mouse with Multi-function Paddle",
    price: 49,
    category: "mise",
    id: 4,
  },
  {
    url: "https://assets3.razerzone.com/umK2N1SIPOW2G3KTzUhN2fRhZcU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh18%2Fh7a%2F9086238556190%2F500x500-deathadderV2pro.png",
    namePc: "Razer DeathAdder V2 Pro",
    characterPc: "Wireless gaming mouse with best-in-class ergonomics",
    price: 89,
    category: "mise",
    id: 5,
  },
  {
    url: "https://assets3.razerzone.com/m1jjQGDMeBBXD_onWs4TknM2Jy8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhcd%2Fh6b%2F9264375267358%2Fgenshin-impact-deathadder-v2-pro-500x500.png",
    namePc: "Razer DeathAdder V2 Pro - Genshin Impact Edition",
    characterPc: "Wireless gaming mouse with best-in-class ergonomics", 
    price: 139,
    category: "mise",
    id: 6,
  },
  {
    url: "https://assets3.razerzone.com/3cR6OItMvFgshAC1kTnM6qGtE0c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe1%2Fhb0%2F9245748920350%2Fhalo-deathadder-v2-500x500.png",
    namePc: "Razer DeathAdder V2 - Halo Infinite",
    characterPc: "Wired Gaming Mouse with Best-in-class Ergonomics",
    price: 79,
    category: "mise",
    id: 7,
  }, 
  {
    url: "https://assets3.razerzone.com/FjczhMDawLw1d46otr6yIXo9ZTY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh74%2Fh12%2F9199722594334%2FDeathAdder-Essential-White-500x500-V2.png",
    namePc: "Razer DeathAdder Essential",
    characterPc: "Essential gaming mouse with 6,400 DPI optical sensor",
    price: 79 ,
    category: "mise",
    id: 8,
  },
  {
    url: "https://assets3.razerzone.com/8hxWWCZYPAt97KYGhSjU7jAYHvA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh09%2Fh7d%2F9398870278174%2Fviper-v2-pro-black-500x500.png",
    namePc: "Razer Viper V2 Pro",
    characterPc: "Ultra-lightweight, Ultra-fast Wireless Esports Mouse",
    price: 149,
    category: "mise",
    id: 9,
  },
  {
    url: "https://assets3.razerzone.com/xe_HpCcKTmeOh8PW4r7x6Rd3oVo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh99%2Fh56%2F9325793378334%2Fesl-viper-8khz-500x500.png",
    namePc: "Razer Viper 8KHz - ESL Edition",
    characterPc: "Ambidextrous Esports Gaming Mouse with 8000Hz Polling Rate",
    price: 99,
    category: "mise",
    id: 10,
  },
  {
    url: "https://assets3.razerzone.com/xe_HpCcKTmeOh8PW4r7x6Rd3oVo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh99%2Fh56%2F9325793378334%2Fesl-viper-8khz-500x500.png",
    namePc: "Razer Viper Mini",
    characterPc: "Ultra-Lightweight Gaming Mouse with Razer™ Chroma RGB",
    price: 39,
    category: "mise",
    id: 11,
  },
  {
    url: "https://assets3.razerzone.com/xe_HpCcKTmeOh8PW4r7x6Rd3oVo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh99%2Fh56%2F9325793378334%2Fesl-viper-8khz-500x500.png",
    namePc: "Razer Naga Pro",
    characterPc: "Modular Wireless Mouse with Swappable Side Plates",
    price: 149,
    category: "mise",
    id: 12,
  },
  {
    url: "https://assets3.razerzone.com/4GIkIBFCVFbq9od9GdTcyZhhQY8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh82%2Fh19%2F9081099550750%2FNaga-Trinity-500x500.png",
    namePc: "Razer Naga Trinity",
    characterPc: "Modular MOBA/MMO gaming mouse",
    price: 149,
    category: "mise",
    id: 13,
  },
  {
    url: "https://assets3.razerzone.com/VQWe_InMlTaxqKpUlH4RlnPwt7s=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh58%2Fh3a%2F9171072155678%2Forochi-v2-white-500x500.png",
    namePc: "Razer Orochi V2",
    characterPc: "Mobile Wireless Gaming Mouse with up to 950 Hours of Battery Life",
    price: 69,
    category: "mise",
    id: 14,
  },
  {
    url: "https://assets3.razerzone.com/1meZiRb7uRydibEHXuvhpzzqZTo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd6%2Fhd3%2F9078198435870%2Frazer-pro-click-500x500.png",
    namePc: "Razer Pro Click",
    characterPc: "High-precision ergonomic wireless mouse for productivity",
    price: 99,
    category: "mise",
    id: 15,
  },
  {
    url: "https://assets3.razerzone.com/a3Ybm8jEE5HfEXz-3W70ZqDehUs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh22%2Fh08%2F9447199080478%2Fbasilisk-v3-pro-white-500x500.png",
    namePc: "Razer Basilisk V3 Pro White",
    characterPc: "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
    price: 99,
    category: "mise",
    id: 16,
  },
    // keyboard
  {
    url: "https://assets3.razerzone.com/P4uX00Gx4HQZw5IAizXrTbNDZOg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fh89%2F9422803435550%2Fdeathstalker-v2-pro-2-500x500.png",
    namePc: "Razer DeathStalker V2 Pro - Linear Optical Switch - US",
    characterPc: "Wireless Low-Profile RGB Optical Gaming Keyboard",
    price: 249,
    category: "keyboard",
    id: 17,
  },
  {
    url: "https://assets3.razerzone.com/-KOFAqQm72zTlTzshkJLZ0Cru3U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhde%2Fhf6%2F9422671118366%2Fdeathstalker-v2-pro-tenkeyless-500x500.png",
    namePc: "Razer DeathStalker V2 Pro Tenkeyless - US",
    characterPc: "Wireless Low-Profile RGB Optical Gaming Keyboard",
    price: 219,
    category: "keyboard",
    id: 18,
  },
  {
    url: "https://assets3.razerzone.com/16i2UZfus0sZx4JBfQlLMf23LO0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh46%2Fh03%2F9143301505054%2Frazer-huntsman-v2-analog-500x500.png",
    namePc: "Razer Huntsman V2 Analog",
    characterPc: "Gaming Keyboard with Razer™ Analog Optical Switches",
    price: 249,
    category: "keyboard",
    id: 19,
  },
  {
    url: "https://assets3.razerzone.com/16i2UZfus0sZx4JBfQlLMf23LO0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh46%2Fh03%2F9143301505054%2Frazer-huntsman-v2-analog-500x500.png",
    namePc: "Razer Huntsman V2",
    characterPc: "Optical Gaming Keyboard with Near-zero Input Latency",
    price: 189,
    category: "keyboard",
    id: 20,
  },
  {
    url: "https://assets3.razerzone.com/02qciF5cWDrRcrL9CxzbHC017No=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fhd7%2F9239675600926%2Fhuntsman-v2-tkl-500x500.png",
    namePc: "Razer Huntsman V2 Tenkeyless",
    characterPc: "Tenkeyless Optical Gaming Keyboard by Razer.com",
    price: 149,
    category: "keyboard",
    id: 21,
  },
  {
    url: "https://assets3.razerzone.com/A1rk14Tikp9uFf5GNpx0zSMiA20=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh55%2F9325793312798%2Fesl-huntsman-v2-tkl-500x500.png",
    namePc: "Razer Huntsman V2 Tenkeyless - Linear Optical Switch - US - ESL Edition",
    characterPc: "Tenkeyless Optical Gaming Keyboard by Razer.com",
    price: 179,
    category: "keyboard",
    id: 22,
  },
  {
    url: "https://assets3.razerzone.com/UL-pRJQaMYYdLTXGwfiMt7UFOQg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh79%2Fh55%2F9374925029406%2Fhuntsman-mini-analog-500x500.png",
    namePc: "Razer Huntsman Mini Analog - US",
    characterPc: "60% Gaming Keyboard with Analog Optical Switches by Razer.com",
    price: 149,
    category: "keyboard",
    id: 23,
  },
  {
    url: "https://assets3.razerzone.com/osFftXSrpcWTP2fa_rDKAOniGYU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf5%2Fh0b%2F9178922123294%2Fhuntsman-te-se-500x500.png",
    namePc: "Razer Huntsman Tournament Edition",
    characterPc: "Compact Gaming Keyboard with Razer™ Linear Optical Switches",
    price: 89,
    category: "keyboard",
    id: 24,
  },
  {
    url: "https://assets3.razerzone.com/Ieg_GHSv5HjDVCD2s-b6sNJAccE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fh53%2F9420855967774%2Fbape-blackwidow-v3-500x500.png",
    namePc: "Razer x *A Bathing Ape® BlackWidow V3 - Green Switch - US",
    characterPc: "Mechanical Gaming Keyboard with Razer Chroma RGB by Razer.com",
    price: 199,
    category: "keyboard",
    id: 25,
  },
  {
    url: "https://assets3.razerzone.com/fJjdyKQcm84F3VvGt9MeppIFJMc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6e%2Fh7a%2F9086238588958%2Frazer-blackwidow-v3-pro-500x500.png",
    namePc: "Razer BlackWidow V3 Pro",
    characterPc: "Wireless Full-height Mechanical Gaming Keyboard with Razer Chroma RGB",
    price: 229,
    category: "keyboard",
    id: 26,
  },
  {
    url: "https://assets3.razerzone.com/lG472mJG7VRIpB9wSLK1tWJykRg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh66%2Fhed%2F9090120679454%2Fblackwidow-v3-500x500.png",
    namePc: "Razer BlackWidow V3",
    characterPc: "Mechanical Gaming Keyboard with Razer Chroma RGB",
    price: 139,
    category: "keyboard",
    id: 27,
  },
  {
    url: "https://assets3.razerzone.com/TuvJd5SGiPHD1VzeimjkN7nrtPA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fhe7%2F9245362159646%2Fblackwidow-v3-halo-infinite-500x500.png",
    namePc: "Razer BlackWidow V3 - Green Switch - US - Halo Infinite",
    characterPc: "Mechanical Gaming Keyboard with Razer Chroma RGB",
    price: 179,
    category: "keyboard",
    id: 28,
  },
  {
      url: "https://assets3.razerzone.com/d0HHBAEXR1eA4SxOfJ0h7J7bHao=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh92%2Fh6c%2F9179780055070%2Fblackwidow-v3-mini-hyperspeed-500x500.png",
    namePc: "Razer BlackWidow V3 Mini HyperSpeed",
    characterPc: "Wireless 65% Mechanical Gaming Keyboard with Razer Chroma™ RGB",
    price: 179,
    category: "keyboard",
    id: 29,
  },
  {
    url: "https://assets3.razerzone.com/hx0Mq1e2vMuB0PUuQ-phNFdJ0Ys=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc1%2Fhb3%2F9411491332126%2Fornata-v3-3-500x500.png",
    namePc: "Razer Ornata V3 - US",
    characterPc: "Low-profile Mecha-membrane RGB Keyboard",
    price: 69,
    category: "keyboard",
    id: 30,
  },
  {
    url: "https://assets3.razerzone.com/OIO4GRol7t1vVcIOHQ95KdsGyLo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh37%2Fhda%2F9257514041374%2F211102-pro-type-ultra-500x500.png",
    namePc: "Razer Pro Type Ultra - US",
    characterPc: "Wireless Mechanical Keyboard for Productivity",
    price: 159,
    category: "keyboard",
    id: 31,
  },
  {
    url: "https://assets3.razerzone.com/dQYzSUl_SaroHtVRhqJcuuO4KDM=/500x500/https%3A%2F%2Fapi-p1.phoenix.razer.com%2Fmedias%2FTurret-Xbox-One-Base-500x500.png%3Fcontext%3DbWFzdGVyfHJvb3R8OTAzNDF8aW1hZ2UvcG5nfGg2My9oYTEvOTA1NTQzODM3Mjg5NC9UdXJyZXQtWGJveC1PbmUtQmFzZS01MDB4NTAwLnBuZ3w3MzE0Y2M3MzY2NTc3N2YyMTk5ZjEwNTMzZmQ5NGE4MmU5N2I1MzJiMGYwNzMxOWEwMGMwYWY4MjMyNjE2NWU3",
    namePc: "Razer Turret for Xbox One - US",
    characterPc: "Designed for Wireless Comfort by Razer.com",
    price: 249,
    category: "keyboard",
    id: 32,
  },
  {
    url: "https://assets3.razerzone.com/kZAUFpuXfW98-Pmd1dphEmS6DN4=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe0%2Fh0e%2F9447199277086%2Fhuntsman-v2-tkl-quartz-500x500.png",
    namePc: "Razer Huntsman V2 Tenkeyless Pink",
    characterPc: "Tenkeyless Optical Gaming Keyboard",
    price: 159,
    category: "keyboard",
    id: 33,
  },
//  HEADSETS
  {
    url: "https://assets3.razerzone.com/BUeifXajBHcmrh2rR5dQYv06nR0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh83%2Fh7e%2F9399589666846%2F2-blackshark-v2-pro-black-500x500.png",
    namePc: "Razer BlackShark V2 Pro",
    characterPc: "Wireless esports headset",
    price: 149,
    category: "headset",
    id: 34,
  },
  {
    url: "https://assets3.razerzone.com/5JoJ3xIZ8uh7j1LBVvtc48__a28=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha4%2Fhfc%2F9188463181854%2Fblackshark-v2-pro-six-siege-se-500x500.png",
    namePc: "Razer BlackShark V2 Pro - Six Siege Special Edition",
    characterPc: "Wireless esports headset",
    price: 149,
    category: "headset",
    id: 35,
  },
  {
    url: "https://assets3.razerzone.com/dvtquq1AAPKkgNShT759U9HyVfs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhdf%2Fh6d%2F9196212355102%2FBlackShark-V2-CourageJD-Edition-500x500.png",
    namePc: "Razer BlackShark V2 CouRageJD Edition",
    characterPc: "Multi-platform wired esports headset",
    price: 54,
    category: "headset",
    id: 36,
  },
  {
    url: "https://assets3.razerzone.com/xe4P8Y_ajpV36genrpU6hTr64fM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh71%2Fh7b%2F9399589732382%2F2-blackshark-v2-black-se-500x500.png",
    namePc: "Razer BlackShark V2 Special Edition",
    characterPc: "Multi-platform wired esports headset",
    price: 109,
    category: "headset",
    id: 37,
  },
  {
    url: "https://assets3.razerzone.com/v3xJu-XCeU4ZGrT47dycI20VyNE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fh59%2F9325793411102%2Fesl-blackshark-v2-500x500.png",
    namePc: "Razer BlackShark V2 - ESL Edition",
    characterPc: "Multi-platform wired esports headset",
    price: 119,
    category: "headset",
    id: 38,
  },
  {
    url: "https://assets3.razerzone.com/0hfUawch_bcD6BssG6F0x0l9m4U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9c%2Fh79%2F9431346348062%2Fblackshark-v2-x-usb-500x500.png",
    namePc: "Razer BlackShark V2 X USB - Black",
    characterPc: "Wired esports headset with noise-cancelling mic",
    price: 59,
    category: "headset",
    id: 39,
  },
  {
    url: "https://assets3.razerzone.com/eY_PQPH1wakpUwz0Ge0sdDlQW70=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbb%2Fhe8%2F9412836753438%2Fbarracuda-2-500x500.png",
    namePc: "Razer Barracuda Pro",
    characterPc: "Wireless Gaming Headset with Hybrid ANC",
    price: 249,
    category: "headset",
    id: 40,
  },
  {
    url: "https://assets3.razerzone.com/uYwMFn3aDCeHnO2rWAmm2au853g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fhe5%2F9412836851742%2Fbarracuda-x-2022-2-500x500.png",
    namePc: "Razer Barracuda X",
    characterPc: "Wireless Multi-platform Gaming and Mobile Headset",
    price: 99,
    category: "headset",
    id: 41,
  },
   {
    url: "https://assets3.razerzone.com/U96cxEcqLPKUhuxPw3KO7xSNqYk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fhff%2F9397630140446%2Fkraken-v3-pro-3-500x500.png",
    namePc: "Razer Kraken V3 Pro",
    characterPc: "Wireless Gaming Headset with Haptic Technology",
    price: 199,
    category: "headset",
    id: 42,
  },
  {
    url: "https://assets3.razerzone.com/KdUz9FtltIjBetXrd7yTIzZkwdo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhde%2Fh88%2F9081143656478%2Frz04-02830300-r3m1.png",
    namePc: "Razer Kraken",
    characterPc: "Multi-Platform Wired Gaming Headset",
    price: 79,
    category: "headset",
    id: 43,
  },
  {
    url: "https://assets3.razerzone.com/dJ7iPsPB7A_fTjy4RQWRtDefZOA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4f%2Fhe4%2F9397630926878%2Fkraken-x-mercury-3-500x500.png",
    namePc: "Razer Kraken X",
    characterPc: "Multi-Platform Wired Gaming Headset",
    price: 49,
    category: "headset",
    id: 44,
  },
  { 
    url: "https://assets3.razerzone.com/sMm8-XuEO05TjGseoWNr3_9xNmI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhfb%2Fh01%2F9081100337182%2FKraken-Ultimate-500x500.png",
    namePc: "Razer Kraken Ultimate",
    characterPc: "USB Surround Sound Headset with ANC Microphone",
    price: 64,
    category: "headset",
    id: 45,
  },
  { 
    url: "https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png",
    namePc: "RAZER KAIRA FOR XBOX",
    characterPc: "Wireless Xbox Series X|S headset with cutting-edge drivers and mic",
    price: 99,
    category: "headset",
    id: 46,
  },
  { 
    url: "https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/kaira-pro-white-500x500.png",
    namePc: "RAZER KAIRA PRO FOR XBOX",
    characterPc: "Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming",
    price: 149,
    category: "headset",
    id: 47,
  },
  { 
    url: "https://assets3.razerzone.com/7MJCA7sU9fQ0-jkESN2pr2Xg51k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fh07%2F9447199047710%2Fbarracuda-quartz-500x500.png",
    namePc: "Razer Barracuda",
    characterPc: "Wireless Multi-platform Gaming and Mobile Headset",
    price: 159,
    category: "headset",
    id: 48,
  },
  { 
    url: "https://assets3.razerzone.com/jA9Omndn724bgd2f4MhGamIhdW0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha7%2Fhaa%2F9445641224222%2Fkaira-hyperspeed-ps-2022-500x500.png",
    namePc: "Razer Kaira HyperSpeed - PlayStation Licensed",
    characterPc: "Wireless Multi-Platform Gaming Headset",
    price: 129,
    category: "headset",
    id: 49,
  },
  { 
    url: "https://assets3.razerzone.com/j4lJXHfCggPYfh283ShPN-Jk1SY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe9%2Fh33%2F9397620211742%2Fkaira-pro-ps-2-500x500.png",
    namePc: "Razer Kaira Pro for PlayStation (2021)",
    characterPc: "Dual Wireless PlayStation 5 Headset with Haptics",
    price: 199,
    category: "headset",
    id: 50,
  },
  // STREAMING DEVICES
  { 
    url: "https://assets3.razerzone.com/j4lJXHfCggPYfh283ShPN-Jk1SY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe9%2Fh33%2F9397620211742%2Fkaira-pro-ps-2-500x500.png",
    namePc: "Razer Kiyo Pro",
    characterPc: "USB Camera with High-Performance Adaptive Light Sensor",
    price: 99,
    category: "streamingdevices",
    id: 51,
  },
  { 
    url: "https://assets3.razerzone.com/EweKh4R7HKhnGWfIwThsBI4Fc6A=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fhb5%2F9079776870430%2FKiyo-500x500.png",
    namePc: "Razer Kiyo",
    characterPc: "Show the World Who You Are",
    price: 69,
    category: "streamingdevices",
    id: 52,
  },
  { 
    url: "https://assets3.razerzone.com/BU6TJJmrn6viYt-sO7WQP9xiSIs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb4%2Fhb5%2F9243056603166%2Fkiyo-x-5005x500.png", 
    namePc: "Razer Kiyo X",
    characterPc: "USB Webcam for Full HD Streaming",
    price: 49,
    category: "streamingdevices",
    id: 53,
  },  
  { 
    url: "https://assets3.razerzone.com/ppbkpoPa1gH7KYo-_eAgCaQW1fc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhd6%2Fh1a%2F9248849231902%2FSeiren-V2-Pro-500x500.png", 
    namePc: "Razer Seiren V2 Pro",
    characterPc: "Professional-grade USB Microphone for Streamers",
    price: 149,
    category: "streamingdevices",
    id: 54,
  }, 
  { 
    url: "https://assets3.razerzone.com/VbPo3AKa1En5DnIg-8TU0KHlpS0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fh1d%2F9248849166366%2FSeiren-V2-X-500x500.png",
    namePc: "Razer Seiren V2 X",
    characterPc: "USB Microphone for Streamers",
    price: 99,
    category: "streamingdevices",
    id: 55,
  },
  {
    url: "https://assets3.razerzone.com/cyTf-b3wZn8n3m84oW-zQDdGy1c=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh53%2Fh59%2F9394153160734%2Fseiren-bt-3-500x500.png", 
    namePc: "Razer Seiren BT",
    characterPc: "Bluetooth Microphone for Mobile Streaming",
    price: 99,
    category: "streamingdevices",
    id: 56,
  },
  {
    url: "https://assets3.razerzone.com/pIaxstViEYeGRCSj84gjDRu6r5U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8f%2Fh8d%2F9090915631134%2Fseiren-mini-black-500x500.png",
    namePc: "Razer Seiren Mini",
    characterPc: "Ultra-compact Streaming Microphone",
    price: 49,
    category: "streamingdevices",
    id: 57,
  },
  {
    url: "https://assets3.razerzone.com/qUDunF8KFBg1r-j_5ngTt0Uv06g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh47%2Fhf6%2F9081144770590%2FRZ82-02300100-B3U1_500x500.png",
    namePc: "Razer Ifrit",
    characterPc: "Stream Wherever You Go",
    price: 99,
    category: "streamingdevices",
    id: 58,
  },
  {
    url: "https://assets3.razerzone.com/pdFWIsnhyEEJJJZCH2Ey26UPZdo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh21%2Fh0b%2F9447199146014%2Fblue-screen-500x500.png",
    namePc: "Razer Blue Screen",
    characterPc: "Collapsible Chroma Key Backdrop for Streaming",
    price: 149,
    category: "streamingdevices",
    id: 59,
  },
  {
    url: "https://assets3.razerzone.com/b-HSwOeYGsTPtypQ2Gs4iqWdDwc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh96%2F9419375149086%2Fstream-controller-500x500.png",
    namePc: "Razer Stream Controller",
    characterPc: "All-in-one Control Deck for Streaming",
    price: 269,
    category: "streamingdevices",
    id: 60,
  },
  {
    url: "https://assets3.razerzone.com/SBSJ9zQ8dddQ0-8mMXM6V-VrlqA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2b%2Fha8%2F9375767101470%2Faudio-mixer-500x500.png",
    namePc: "Razer Audio Mixer",
    characterPc: "All-in-one Digital Mixer for Broadcasting and Streaming",
    price: 249,
    category: "streamingdevices",
    id: 61,
  },
  {
    url: "https://assets3.razerzone.com/iCQRmPsX29mvhQVjV7bltlyUauI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh60%2Fh14%2F9081142312990%2Fripsaw-hd-base.png",
    namePc: "Razer Ripsaw HD",
    characterPc: "Next Level Streaming",
    price: 159,
    category: "streamingdevices",
    id: 62,
  },
  {
    url: "https://assets3.razerzone.com/Q1Vb-zFuSSHzItjh9UylxseO1oM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh62%2Fhb6%2F9243056668702%2Fripsaw-x-500x500.png",
    namePc: "Razer Ripsaw X",
    characterPc: "USB Capture Card with Camera Connection for Full 4K Streaming",
    price: 139,
    category: "streamingdevices",
    id: 63,
  },
  {
    url: "https://assets3.razerzone.com/aDWrNbQpgcGS2W6KiF7Yvn3i_iw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh7d%2Fha7%2F9375767167006%2Fkey-light-chroma-500x500.png",
    namePc: "Razer Key Light Chroma",
    characterPc: "Razer Chroma™ RGB Key Light for Streaming",
    price: 299,
    category: "streamingdevices",
    id: 64,
  },
  {
    url: "https://assets3.razerzone.com/unhyjOlKs5rGFeNXFXZUhu09bS8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe1%2Fh8e%2F9151223005214%2Fring-light-500x500.png",
    namePc: "Razer Ring Light",
    characterPc: "12” USB LED Ring Light for PC and Mobile Streaming",
    price: 79,
    category: "streamingdevices",
    id: 65,
  },
  {
    url: "https://assets3.razerzone.com/b9_J4fEdu8Go9JOPLqisOL8Ts2g=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh50%2Fh99%2F9081145950238%2FRZ19-03120100-R3M1_500x500.png",
    namePc: "Razer Emote Display",
    characterPc: "Engage, Emote, Entertain",
    price: 49,
    category: "streamingdevices",
    id: 66,
  },
//  CHAIRS BY RAZER
  {
    url: "https://assets3.razerzone.com/R3uCcugMuuPu18L1LxiapmDCLAU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4e%2Fh74%2F9424953245726%2Fenki-pro-koenigsegg-500x500.png",
    namePc: "Razer Enki Pro - Koenigsegg Edition",
    characterPc: "Premium Gaming Chair with Alcantara® Leather for All-Day Comfort",
    price: 1299,
    category: "chairs",
    id: 67,
  },
  {
    url: "https://assets3.razerzone.com/12_4OfwAQ3B5jY_PQs1UmwQQL7k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf7%2Fh73%2F9424953278494%2Fenki-pro-williams-esports-500x500.png",
    namePc: "Razer Enki Pro - Williams Esports Edition",
    characterPc: "Premium Gaming Chair with Alcantara® Leather for All-Day Comfort",
    price: 1299,
    category: "chairs",
    id: 68,
  },
  {
    url: "https://assets3.razerzone.com/XJ9Uzl3II-rq8cxdLPoCNGM4SbI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh87%2Fh01%2F9420856262686%2Fbape-iskur-x-500x500.png",
    namePc: "Razer x *A Bathing Ape® Iskur X",
    characterPc: "Ergonomic Gaming Chair",
    price: 699,
    category: "chairs",
    id: 69,
  },
  {
    url: "https://assets3.razerzone.com/u48G7v4pZP8brfewjOYct-TaVTc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf2%2Fh01%2F9420856229918%2Fbape-iskur-x-quartz-500x500.png",
    namePc: "Razer x *A Bathing Ape® Iskur X - Quartz",
    characterPc: "Ergonomic Gaming Chair",
    price: 699,
    category: "chairs",
    id: 70,
  },
  {
    url: "https://assets3.razerzone.com/7dgnImhDVIQZfiITYhn9-miNpoA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh37%2F9275302641694%2Fiskur-x-genshin-impact-500x500.png",
    namePc: "Razer Iskur X - Genshin Impact Edition",
    characterPc: "Ergonomic Gaming Chair",
    price: 499,
    category: "chairs",
    id: 71,
  },
  {
    url: "https://assets3.razerzone.com/rrDZ6vN5I6bABI8R6d1yhaRvt6k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh97%2Fh5e%2F9313025196062%2Fiskur-x-hello-kitty-500x500.png",
    namePc: "Razer Iskur X - Hello Kitty and Friends Edition",
    characterPc: "Ergonomic Gaming Chair",
    price: 499,
    category: "chairs",
    id: 72,
  },
  {
    url: "https://assets3.razerzone.com/quvWc1_YeefR-uO44Y4FtkgQONE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh15%2Fh72%2F9407543672862%2Fenki-pro-500x500.png",
    namePc: "Razer Enki Pro",
    characterPc: "Premium Gaming Chair with Alcantara® Leather for All-Day Comfort",
    price: 999,
    category: "chairs",
    id: 73,
  },
  {
    url: "https://assets3.razerzone.com/y453D_RMc62OvR6krHZwpN0WBqo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh92%2F9151223103518%2Fiskur-black-500x500.png",
    namePc: "Razer Iskur - Black - XL",
    characterPc: "Gaming Chair with Built-in Lumbar Support",
    price: 636,
    category: "chairs",
    id: 74,
  },
  {
    url: "https://assets3.razerzone.com/rsh7Wz1NBc2rXy1eKcob92JFSBw=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8a%2Fhb0%2F9090587590686%2F500x500-iskur.png",
    namePc: "Razer Iskur - Black / Green - XL",
    characterPc: "Gaming Chair with Built-in Lumbar Support",
    price: 536,
    category: "chairs",
    id: 75,
  },
  {
    url: "https://assets3.razerzone.com/S31mMc9u5dw0E-RaJ0pX9oTjJmc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe6%2Fhe4%2F9235792920606%2Fiskur-fabric-dark-gray-500x500.png",
    namePc: "Razer Unleashed Snapback Capssetetwrtfgdff",
    characterPc: "Gaming Chair with Built-in Lumbar Support",
    price: 536,
    category: "chairs",
    id: 76,
  },
  {
    url: "https://assets3.razerzone.com/y453D_RMc62OvR6krHZwpN0WBqo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh92%2F9151223103518%2Fiskur-black-500x500.png",
    namePc: "Razer Iskur - Black",
    characterPc: "Gaming Chair with Built-in Lumbar Support",
    price: 447,
    category: "chairs",
    id: 77,
  },
  {
    url: "https://assets3.razerzone.com/vV3lbT0sZdNZ1M-fELCe1JGfcgY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh58%2Fh5f%2F9183237373982%2Fiskur-x-500x500.png",
    namePc: "Razer Iskur X",
    characterPc: "Ergonomic Gaming Chair",
    price: 357,
    category: "chairs",
    id: 78,
  },
//  LAPTOPS BY RAZER
  {
    url: "https://assets3.razerzone.com/YHF3HVs3KUYyyV2fvy5lsTFNFIg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh06%2F9286402375710%2Fblade14-p8-fhd-500x500.png",
    namePc: "Razer Blade 14 - QHD 165Hz - GeForce RTX 3080 Ti - Black",
    characterPc: "14-inch Gaming Laptop with AMD Ryzen™ 6900HX",
    price: 3499,
    category: "laptop",
    id: 79,
  },
  {
    url: "https://assets3.razerzone.com/K9_bAKZ-lMMLAJR-ssJbrEHfqbU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc8%2Fh0c%2F9188929437726%2FBlade14-Piper-FHD.png",
    namePc: "Razer Blade 14 - QHD 165Hz - GeForce RTX 3080 - Black",
    characterPc: "14-inch Gaming Laptop with AMD Ryzen™ 5900HX",
    price: 2299,
    category: "laptop",
    id: 80,
  },
   {
    url: "https://assets3.razerzone.com/UUODnE8z5w_1YhkDj3Gzf2wPwO8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    namePc: "Razer Blade 15 - UHD 144Hz - GeForce RTX 3080 Ti - Black",
    characterPc: "Flagship 15-inch Laptop for Power and Portability",
    price: 3999,
    category: "laptop",
    id: 81,
  },
  {
    url: "https://assets3.razerzone.com/nu_cx2Px8X99ayBPPq2Z_1vldcM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh71%2Fh9a%2F9392074063902%2Fblade17-d8-fhd-2-500x500.png",
    namePc: "Razer Blade 17 - 4K 144Hz - GeForce RTX 3080 Ti - Black",
    characterPc: "Desktop Replacement Laptop with 12th Gen Processors",
    price: 4299,
    category: "laptop",
    id: 82,
  },
  {
    url: "https://assets3.razerzone.com/22-8drH54QUn_0UKha1XHbXua4Q=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh93%2F9392074293278%2Frazerbook-quartz-m15-2-500x500.png",
    namePc: "Razer Book - UHD Touch 60Hz - Intel® Iris® Xe Graphics - Quartz",
    characterPc: "Performance Meets Productivity",
    price: 1799,
    category: "laptop",
    id: 83,
  },
  {
    url: "https://assets3.razerzone.com/RUT81q8lMx6xtiHQooa438Bvfr0=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9d%2Fh0a%2F9421204062238%2Fblade14-razercare-500x500.png",
    namePc: "Razer Blade 14 Bundle V1 Essential",
    characterPc: "·Razer Blade 14 GeForce RTX 3070 Ti ·RazerCare Essential For Blade 14",
    price: 2599,
    category: "laptop",
    id: 84,
  },
  {
    url: "https://assets3.razerzone.com/hIBWWy-iWluf9ersxDFTkGL3UEs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9b%2Fh0d%2F9421204127774%2Fblade15-razercare-recon-500x500.png",
    namePc: "Razer Blade 15 Bundle V5 Essential",
    characterPc: "· Razer Blade 15 GeForce RTX 3080 Ti ·Razer Recon 15 Rolltop Backpack ·RazerCare Essential For Blade 15",
    price: 4999,
    category: "laptop",
    id: 85,
  },
  {
    url: "https://assets3.razerzone.com/IZvVjgOMBVfhlSEBRZq_qddNzsY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh33%2Fh0a%2F9421204029470%2Fblade14-razercare-recon-500x500.png",
    namePc: "Razer Blade 14 Bundle V2 Elite",
    characterPc: "· Razer Blade 14 GeForce RTX 3080 Ti ·Razer Recon 15 Rolltop Backpack ·RazerCare Elite For Blade 14",
    price: 3619,
    category: "laptop",
    id: 86,
  },
  {
    url: "https://assets3.razerzone.com/0Ab864eqnrTXT7wnKgsRTZZCIvk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
    namePc: "Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury",
    characterPc: "14-inch Gaming Laptop with AMD Ryzen™ 6900HX",
    price: 1924,
    category: "laptop",
    id: 87,
  },
  // CONSOLE BY RAZER
 {
    url: "https://assets3.razerzone.com/aLwGyvXk95FEBJKRpoqAIOkJsUc=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbf%2Fh51%2F9445020237854%2Funiversal-quick-charging-stand-xbox-500x500.png",
    namePc: "Razer Wireless Controller & Quick Charging Stand for Xbox Razer Limited Edition",
    characterPc: "Officially Licensed Xbox Controller and Quick Charging Stand",
    price: 199,
    category: "consoledevice",
    id: 88,
  },
   {
    url: "https://assets3.razerzone.com/PNQYZ8IqZm-nYDM4nzUFh2aUU4o=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh88%2Fh65%2F9414109724702%2Fcaptain-america-controller-charging-stand-2-500x500.png",
    namePc: "Captain America Razer Wireless Controller & Quick Charging Stand for Xbox",
    characterPc: "Officially Licensed Xbox Controller and Quick Charging Stand",
    price: 179,
    category: "consoledevice",
    id: 89,
  },
  {
    url: "https://assets3.razerzone.com/bqVtzLXwJ2ZL9cnqGJtolPY7j1M=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh7e%2Fh6f%2F9414104940574%2Fboba-fett-controller-2-500x500.png",
    namePc: "Boba Fett™ Edition Razer Wireless Controller & Quick Charging Stand For Xbox",
    characterPc: "Officially Licensed Xbox Controller and Quick Charging Stand",
    price: 179,
    category: "consoledevice",
    id: 90,
  },


]

export default allProducts