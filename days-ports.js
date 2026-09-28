window.PORT_DAYS = [
  {
    id: "nagasaki",
    date: "Port day",
    weekday: "",
    kind: "Port",
    port: "Nagasaki",
    summary: "Peace Park and museum, Chinatown lunch, Dejima, Glover Garden, back along the waterfront.",
    hours: "10:00 – 18:30",
    stay: "Ship",
    map: "https://maps.google.com/?q=Nagasaki+Atomic+Bomb+Museum",
    plan: [
      { time: "10:00–10:25", title: "Tram north", detail: "Ourakaigandori, transfer at Shinchi Chinatown.", link: "https://maps.google.com/?q=Ourakaigandori+tram+Nagasaki" },
      { time: "10:25–12:30", title: "Peace Park, Hypocenter, Atomic Bomb Museum", detail: "", link: "https://maps.google.com/?q=Nagasaki+Atomic+Bomb+Museum" },
      { time: "12:30–13:45", title: "Shinchi Chinatown + lunch", detail: "Champon, sara udon, castella.", link: "https://maps.google.com/?q=Nagasaki+Shinchi+Chinatown" },
      { time: "13:45–14:45", title: "Dejima", detail: "Five–ten minutes from Chinatown.", link: "https://maps.google.com/?q=Dejima+Nagasaki" },
      { time: "14:45–16:45", title: "Glover Garden + Oura Cathedral", detail: "Short tram or walk uphill.", link: "https://maps.google.com/?q=Glover+Garden+Nagasaki" },
      { time: "16:45–18:30", title: "Waterfront back to the ship", detail: "Glover Street, Dejima Wharf.", link: "https://maps.google.com/?q=Dejima+Wharf+Nagasaki" }
    ],
    options: [
      { name: "Full loop", effort: "High", timeNeeded: "8+ hrs", items: ["Museum first", "Chinatown lunch", "Glover last"] }
    ],
    food: [
      { name: "Champon", note: "The Nagasaki noodle.", link: "https://maps.google.com/?q=Nagasaki+champon+Shinchi" },
      { name: "Sara udon", note: "Crispy noodles with pour-over sauce.", link: "https://maps.google.com/?q=Sara+udon+Nagasaki" },
      { name: "Castella", note: "Portuguese sponge cake. Fukusaya if you see it.", link: "https://maps.google.com/?q=Fukusaya+Nagasaki+castella" },
      { name: "Kakuni manju", note: "Braised-pork bun near Chinatown." }
    ],
    logistics: ["Start at Ourakaigandori tram", "Stay south after 16:45"]
  },
  {
    id: "busan",
    date: "Port day",
    weekday: "",
    kind: "Port",
    port: "Busan",
    summary: "Suni booked. Temple, skywalk, markets, lunch, Gamcheon, back by 3:00.",
    hours: "8:00 AM – 3:00 PM",
    stay: "Ship",
    map: "https://maps.google.com/?q=Busan+cruise+terminal",
    plan: [
      { time: "8:00", title: "Meet Suni at the cruise terminal", detail: "", link: "https://maps.google.com/?q=Busan+Port+International+Passenger+Terminal" },
      { time: "Morning", title: "Haedong Yonggungsa", detail: "Seaside temple.", link: "https://maps.google.com/?q=Haedong+Yonggungsa" },
      { time: "Morning", title: "Cheongsapo Daritdol Skywalk", detail: "Glass skywalk.", link: "https://maps.google.com/?q=Cheongsapo+Daritdol+Skywalk" },
      { time: "Late morning", title: "BIFF Square + Gukje Market", detail: "Street food and market.", link: "https://maps.google.com/?q=Gukje+Market+Busan" },
      { time: "Lunch", title: "Lunch with Suni", detail: "Follow her pick." },
      { time: "Afternoon", title: "Gamcheon Culture Village", detail: "Hillside lanes.", link: "https://maps.google.com/?q=Gamcheon+Culture+Village" },
      { time: "By 3:00", title: "Return to the cruise terminal", detail: "", link: "https://maps.google.com/?q=Busan+Port+International+Passenger+Terminal" }
    ],
    options: [
      { name: "With Suni as written", effort: "Medium", timeNeeded: "7 hrs", items: ["Hard stop 3:00"] }
    ],
    food: [
      { name: "Ssiat hotteok", note: "Seed-filled hotteok. Busan street snack.", link: "https://maps.google.com/?q=BIFF+Square+hotteok" },
      { name: "Eomuk / fish cake", note: "Cups of broth at Gukje." },
      { name: "Dwaeji gukbap", note: "Pork-rice soup. The Busan bowl.", link: "https://maps.google.com/?q=Dwaeji+gukbap+Busan" },
      { name: "Sundae + tteokbokki", note: "Market stall plates." }
    ],
    logistics: ["Meet Suni at 8:00", "Back by 3:00 PM"]
  },
  {
    id: "hiroshima",
    date: "Port day",
    weekday: "",
    kind: "Port",
    port: "Hiroshima",
    summary: "Dome and Peace Park early, museum, okonomiyaki, then garden or castle if time.",
    hours: "7:00 AM onward",
    stay: "Ship",
    map: "https://maps.google.com/?q=Hiroshima+Atomic+Bomb+Dome",
    plan: [
      { time: "7:00–8:00", title: "Off ship + into town", detail: "Dome by 08:00–08:15." },
      { time: "8:00–9:00", title: "Atomic Bomb Dome + Peace Memorial Park", detail: "", link: "https://maps.google.com/?q=Hiroshima+Atomic+Bomb+Dome" },
      { time: "9:00–11:15", title: "Peace Memorial Museum", detail: "", link: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Museum" },
      { time: "11:15–12:15", title: "Okonomiyaki", detail: "Hiroshima-style: layered, noodles in the stack.", link: "https://maps.google.com/?q=Okonomimura+Hiroshima" },
      { time: "Afternoon", title: "If time remains", detail: "Shukkeien or the castle, then Hondori.", link: "https://maps.google.com/?q=Shukkeien+Garden+Hiroshima" }
    ],
    options: [
      { name: "Memorial morning only", effort: "Medium", timeNeeded: "Until lunch", items: ["Dome, park, museum, okonomiyaki"] }
    ],
    food: [
      { name: "Hiroshima okonomiyaki", note: "The city's plate. Okonomimura if you want many grills.", link: "https://maps.google.com/?q=Okonomimura+Hiroshima" },
      { name: "Momiji manju", note: "Maple-leaf cake on Hondori." },
      { name: "Oyster snack", note: "If a stall is open." }
    ],
    logistics: ["Dome by 8:00–8:15"]
  },
  {
    id: "aburatsu",
    date: "Oct 25",
    weekday: "",
    kind: "Port",
    port: "Aburatsu / Nichinan",
    summary: "Sedan booked. Udo Jingu, Namikiri, Obi lunch, castle town, back to port.",
    hours: "8:30 AM – about 1:45 PM",
    stay: "Ship",
    map: "https://maps.google.com/?q=Udo+Jingu+Nichinan",
    plan: [
      { time: "8:30", title: "Pickup at Aburatsu Port", detail: "Coastal drive toward Nichinan.", link: "https://maps.google.com/?q=Aburatsu+Port" },
      { time: "8:50–10:15", title: "Udo Jingu", detail: "Cave shrine. Undama toss toward Turtle Rock.", link: "https://maps.google.com/?q=Udo+Jingu+Nichinan" },
      { time: "10:15–11:00", title: "Namikiri Shrine", detail: "Quieter cave shrine by the water.", link: "https://maps.google.com/?q=Namikiri+Shrine+Nichinan" },
      { time: "11:20–12:30", title: "Lunch in Obi", detail: "Guide picks once allergies are shared.", link: "https://maps.google.com/?q=Obi+Castle+Town+Nichinan" },
      { time: "12:30–1:20", title: "Obi Castle Town", detail: "Samurai streets and stone walls.", link: "https://maps.google.com/?q=Obi+Castle+Nichinan" },
      { time: "1:20–1:45", title: "Drive back to Aburatsu Port", detail: "", link: "https://maps.google.com/?q=Aburatsu+Port" }
    ],
    options: [
      { name: "Full private loop", effort: "Medium", timeNeeded: "~5 hrs", items: ["Udo + Namikiri + Obi"] }
    ],
    food: [
      { name: "Chicken nanban", note: "Miyazaki fried chicken, tartar, sweet vinegar.", link: "https://maps.google.com/?q=Chicken+nanban+Obi+Nichinan" },
      { name: "Mango or sweet potato snack", note: "Miyazaki produce." },
      { name: "Udo Jingu shrine snack", note: "Whatever the cave stall is selling." }
    ],
    logistics: ["Pickup 8:30", "Back about 1:45", "Send allergies to the guide"]
  },
  {
    id: "tokushima",
    date: "Port day",
    weekday: "Monday lunch note",
    kind: "Port",
    port: "Tokushima",
    summary: "Puppet theater, downtown lunch, Awa Odori, Bizan ropeway, shop in the Kaikan, taxi to pier.",
    hours: "9:00 AM – 4:30 PM",
    stay: "Ship",
    map: "https://maps.google.com/?q=Awa+Jurobe+Yashiki",
    plan: [
      { time: "9:00", title: "Off the ship, drive north", detail: "" },
      { time: "10:15–11:50", title: "Awa Jurobe Yashiki", detail: "11:00 show. Monday uses recorded music. Do not eat on site.", link: "https://maps.google.com/?q=Awa+Jurobe+Yashiki" },
      { time: "12:10–1:30", title: "Lunch downtown", detail: "Taxi to JR Tokushima Station. Finish by 1:30.", link: "https://maps.google.com/?q=JR+Tokushima+Station" },
      { time: "1:45–2:45", title: "Awa Odori Kaikan", detail: "2:00 dance, about 1,300 yen.", link: "https://maps.google.com/?q=Awa+Odori+Kaikan" },
      { time: "2:50–3:50", title: "Mt. Bizan ropeway", detail: "Same building, 5th floor.", link: "https://maps.google.com/?q=Bizan+Ropeway+Tokushima" },
      { time: "3:50–4:30", title: "Arudeyo Tokushima shop", detail: "Indigo, sudachi, Naruto Kintoki sweets.", link: "https://maps.google.com/?q=Arudeyo+Tokushima+Awa+Odori+Kaikan" },
      { time: "4:30", title: "Taxi to the pier", detail: "From the Kaikan or the station." }
    ],
    options: [
      { name: "Tokushima ramen", effort: "Lunch", timeNeeded: "Station area", items: ["Inotani is closed Mondays"] },
      { name: "Clement Plaza", effort: "Safest", timeNeeded: "Short", items: ["Station food court"] }
    ],
    food: [
      { name: "Tokushima ramen", note: "Brownish pork broth, raw egg. Inotani closed Monday.", link: "https://maps.google.com/?q=Tokushima+ramen+station" },
      { name: "Sudachi", note: "Local citrus. Buy at Arudeyo.", link: "https://maps.google.com/?q=Arudeyo+Tokushima" },
      { name: "Naruto Kintoki sweets", note: "Sweet-potato cakes." }
    ],
    logistics: ["Monday: Inotani closed", "Shop at the Kaikan before 4:30"]
  },
  {
    id: "shimizu",
    date: "Port day",
    weekday: "",
    kind: "Port",
    port: "Shimizu (Mt. Fuji)",
    summary: "Plan not added yet. Food notes are here so you know what the port is known for.",
    hours: "TBD",
    stay: "Ship",
    map: "https://maps.google.com/?q=Shimizu+Port",
    plan: [
      { time: "TBD", title: "Details coming", detail: "Placeholder so the port stays on the list.", link: "https://maps.google.com/?q=Shimizu+Port+Shizuoka" }
    ],
    options: [],
    food: [
      { name: "Sakura ebi", note: "Cherry shrimp. The Shimizu / Yui don't-miss.", link: "https://maps.google.com/?q=Sakura+ebi+Shimizu" },
      { name: "Shizuoka oden", note: "Black broth and fish cakes." },
      { name: "Unagi", note: "Hamamatsu / Shizuoka eel." },
      { name: "Green tea sweet", note: "Shizuoka tea country." }
    ],
    logistics: ["Add the Shimizu walking plan when it is ready"]
  }
];
