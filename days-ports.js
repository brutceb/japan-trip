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
        { time: "13:45–14:45", title: "Dejima", detail: "Five–ten minutes on foot from Chinatown.", link: "https://maps.google.com/?q=Dejima+Nagasaki" },
        { time: "14:45–16:45", title: "Glover Garden + Oura Cathedral", detail: "Short tram or a 15–20 minute walk uphill.", link: "https://maps.google.com/?q=Glover+Garden+Nagasaki" },
        { time: "16:45–18:30", title: "Waterfront back to the ship", detail: "Glover Street, Dejima Wharf, walk to Matsugae.", link: "https://maps.google.com/?q=Dejima+Wharf+Nagasaki" }
      ],
      options: [
        { name: "Full loop", effort: "High", timeNeeded: "8+ hrs", items: ["Museum first", "Lunch in Chinatown", "Glover last because it is closest to the ship"] },
        { name: "Short day", effort: "Medium", timeNeeded: "Until ~15:00", items: ["Peace Park + museum", "Chinatown lunch", "Skip Glover"] }
      ],
      food: [
        { name: "Champon", note: "The Nagasaki noodle. Thick broth, seafood, veg. Eat this in Chinatown.", link: "https://maps.google.com/?q=Nagasaki+champon+Shinchi" },
        { name: "Sara udon", note: "Crispy fried noodles with a pour-over sauce. The other local plate.", link: "https://maps.google.com/?q=Sara+udon+Nagasaki" },
        { name: "Castella", note: "Portuguese sponge cake. Buy a box at Fukusaya if you see it.", link: "https://maps.google.com/?q=Fukusaya+Nagasaki+castella" },
        { name: "Kakuni manju", note: "Braised-pork bun from street windows near Chinatown.", link: "https://maps.google.com/?q=Kakuni+manju+Nagasaki+Chinatown" },
        { name: "Nagasaki Turkish rice", note: "Local plate if you want a sit-down instead of noodles: pilaf, spaghetti, tonkatsu.", link: "https://maps.google.com/?q=Turkish+rice+Nagasaki" }
      ],
      logistics: ["Start at Ourakaigandori tram", "Transfer at Shinchi Chinatown", "Stay south after 16:45"]
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
        { time: "Morning", title: "Haedong Yonggungsa", detail: "Seaside Buddhist temple.", link: "https://maps.google.com/?q=Haedong+Yonggungsa" },
        { time: "Morning", title: "Cheongsapo Daritdol Skywalk", detail: "Ocean-view glass skywalk.", link: "https://maps.google.com/?q=Cheongsapo+Daritdol+Skywalk" },
        { time: "Late morning", title: "BIFF Square + Gukje Market", detail: "Old downtown street food and market browsing.", link: "https://maps.google.com/?q=Gukje+Market+Busan" },
        { time: "Lunch", title: "Lunch with Suni", detail: "Follow her local recommendation." },
        { time: "Afternoon", title: "Gamcheon Culture Village", detail: "Hillside lanes, shops, viewpoints.", link: "https://maps.google.com/?q=Gamcheon+Culture+Village" },
        { time: "By 3:00", title: "Return to the cruise terminal", detail: "", link: "https://maps.google.com/?q=Busan+Port+International+Passenger+Terminal" }
      ],
      options: [
        { name: "With Suni as written", effort: "Medium", timeNeeded: "7 hrs", items: ["Let her order the driving sequence", "Hard stop 3:00 at the terminal"] }
      ],
      food: [
        { name: "Ssiat hotteok", note: "Seed-filled hotteok. The Busan street snack.", link: "https://maps.google.com/?q=BIFF+Square+hotteok" },
        { name: "Eomuk / fish cake", note: "Cups of broth on every Gukje corner.", link: "https://maps.google.com/?q=Gukje+Market+Busan+eomuk" },
        { name: "Dwaeji gukbap", note: "Pork-rice soup. What Busan is known for if Suni sits you down.", link: "https://maps.google.com/?q=Dwaeji+gukbap+Busan" },
        { name: "Sundae + tteokbokki", note: "Market stall plates at BIFF / Gukje.", link: "https://maps.google.com/?q=BIFF+Square+tteokbokki" }
      ],
      logistics: ["Meet Suni at 8:00 at the cruise terminal", "Back by 3:00 PM"]
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
        { time: "7:00–8:00", title: "Off ship + into town", detail: "Aim to be at the Dome by 08:00–08:15.", link: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park" },
        { time: "8:00–9:00", title: "Atomic Bomb Dome + Peace Memorial Park", detail: "", link: "https://maps.google.com/?q=Hiroshima+Atomic+Bomb+Dome" },
        { time: "9:00–11:15", title: "Peace Memorial Museum", detail: "", link: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Museum" },
        { time: "11:15–12:15", title: "Okonomiyaki", detail: "Hiroshima-style: layered, not mixed. Noodles in the stack.", link: "https://maps.google.com/?q=Okonomimura+Hiroshima" },
        { time: "Afternoon", title: "If time remains", detail: "Shukkeien Garden or Hiroshima Castle, then Hondori.", link: "https://maps.google.com/?q=Shukkeien+Garden+Hiroshima" }
      ],
      options: [
        { name: "Memorial morning only", effort: "Medium", timeNeeded: "Until lunch", items: ["Dome, park, museum, okonomiyaki"] },
        { name: "Add one extra", effort: "Medium-high", timeNeeded: "Full port day", items: [{ name: "Shukkeien Garden", note: "Pick this or the castle — not both.", link: "https://maps.google.com/?q=Shukkeien+Garden+Hiroshima" }, { name: "Hiroshima Castle", note: "The other extra. Skip if Shukkeien wins.", link: "https://maps.google.com/?q=Hiroshima+Castle" }] }
      ],
      food: [
        { name: "Hiroshima okonomiyaki", note: "The city's plate. Noodles, cabbage, pork, sauce. Okonomimura if you want a building full of grills.", link: "https://maps.google.com/?q=Okonomimura+Hiroshima" },
        { name: "Momiji manju", note: "Maple-leaf cake. Buy a box on Hondori.", link: "https://maps.google.com/?q=Hondori+Hiroshima+momiji+manju" },
        { name: "Oyster snack", note: "Hiroshima is oyster country if a stall is open.", link: "https://maps.google.com/?q=Hiroshima+oysters" },
        { name: "Tsukemen or onigiri", note: "Only if okonomiyaki is a wall and you need something fast near the park.", link: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park" }
      ],
      logistics: ["Dome by 8:00–8:15", "Give the museum a real time block"]
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
        { time: "8:30", title: "Pickup at Aburatsu Port", detail: "Scenic coastal drive toward Nichinan.", link: "https://maps.google.com/?q=Aburatsu+Port" },
        { time: "8:50–10:15", title: "Udo Jingu", detail: "Cliffside shrine in a sea cave. Undama toss toward Turtle Rock.", link: "https://maps.google.com/?q=Udo+Jingu+Nichinan" },
        { time: "10:15–11:00", title: "Namikiri Shrine", detail: "Short quieter trail to a small cave shrine by the water.", link: "https://maps.google.com/?q=Namikiri+Shrine+Nichinan" },
        { time: "11:20–12:30", title: "Lunch in Obi", detail: "Guide picks once allergies are shared.", link: "https://maps.google.com/?q=Obi+Castle+Town+Nichinan" },
        { time: "12:30–1:20", title: "Obi Castle Town", detail: "Samurai streets, stone walls, merchant houses.", link: "https://maps.google.com/?q=Obi+Castle+Nichinan" },
        { time: "1:20–1:45", title: "Drive back to Aburatsu Port", detail: "", link: "https://maps.google.com/?q=Aburatsu+Port" }
      ],
      options: [
        { name: "Full private loop", effort: "Medium", timeNeeded: "~5 hrs", items: ["Udo Jingu + Namikiri + Obi lunch + castle town"] }
      ],
      food: [
        { name: "Chicken nanban", note: "Miyazaki's plate. Fried chicken, tartar, sweet vinegar.", link: "https://maps.google.com/?q=Chicken+nanban+Obi+Nichinan" },
        { name: "Mango or sweet potato snack", note: "Miyazaki produce. Grab fruit if a stand is open near Obi.", link: "https://maps.google.com/?q=Obi+Castle+Town+Nichinan" },
        { name: "Shochu tasting sip", note: "Only if the lunch spot pours it and you want one small glass." },
        { name: "Udo Jingu shrine snack", note: "Whatever the stall by the cave is selling that morning — often a simple sweet.", link: "https://maps.google.com/?q=Udo+Jingu+Nichinan" }
      ],
      logistics: ["Pickup 8:30 at Aburatsu Port", "Back to port by about 1:45", "Send allergies to the guide"]
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
        { time: "10:15–11:50", title: "Awa Jurobe Yashiki", detail: "11:00 Ningyo Joruri show. Monday uses recorded music. Ticket about 410 yen. Do not eat on site.", link: "https://maps.google.com/?q=Awa+Jurobe+Yashiki" },
        { time: "12:10–1:30", title: "Lunch downtown", detail: "Taxi about 15 min to JR Tokushima Station. Finish by 1:30.", link: "https://maps.google.com/?q=JR+Tokushima+Station" },
        { time: "1:45–2:45", title: "Awa Odori Kaikan", detail: "2:00 dance, 40 minutes, about 1,300 yen.", link: "https://maps.google.com/?q=Awa+Odori+Kaikan" },
        { time: "2:50–3:50", title: "Mt. Bizan ropeway", detail: "Same building, 5th floor. Round trip about 1,030 yen.", link: "https://maps.google.com/?q=Bizan+Ropeway+Tokushima" },
        { time: "3:50–4:30", title: "Arudeyo Tokushima shop", detail: "1F of the Kaikan: indigo, sudachi, Naruto Kintoki sweets.", link: "https://maps.google.com/?q=Arudeyo+Tokushima+Awa+Odori+Kaikan" },
        { time: "4:30", title: "Taxi to the pier", detail: "From the Kaikan or the station." }
      ],
      options: [
        { name: "Tokushima ramen", effort: "Lunch", timeNeeded: "Station area", link: "https://maps.google.com/?q=Tokushima+ramen+station", items: ["Inotani Honten is closed Mondays", "Ask for a shop advertising Tokushima ramen"] },
        { name: "Do no Ura Ekimae", effort: "Lunch", timeNeeded: "4 min from station", link: "https://maps.google.com/?q=Do+no+Ura+Ekimae+Tokushima", items: ["Monday lunch 11:30–2:00", "Sea-bream salt ramen"] },
        { name: "Clement Plaza", effort: "Safest", timeNeeded: "Short", link: "https://maps.google.com/?q=Clement+Plaza+Tokushima+Station", items: ["Station food court", "You will eat and still make the 2:00 show"] }
      ],
      food: [
        { name: "Tokushima ramen", note: "Brownish pork broth, raw egg on top. The city's bowl. Inotani is closed Monday.", link: "https://maps.google.com/?q=Tokushima+ramen+station" },
        { name: "Do no Ura Ekimae", note: "Monday backup lunch. Sea-bream salt ramen. 4 min from the station.", link: "https://maps.google.com/?q=Do+no+Ura+Ekimae+Tokushima" },
        { name: "Sudachi", note: "The local citrus. Juice, candy, ponzu. Buy at Arudeyo.", link: "https://maps.google.com/?q=Arudeyo+Tokushima" },
        { name: "Naruto Kintoki sweets", note: "Sweet-potato cakes from this prefecture.", link: "https://maps.google.com/?q=Arudeyo+Tokushima+Naruto+Kintoki" },
        { name: "Fish-cake / kamaboko snack", note: "Station kiosk if lunch runs late.", link: "https://maps.google.com/?q=JR+Tokushima+Station" }
      ],
      logistics: ["Monday: Inotani closed", "Shop at the Kaikan before the 4:30 taxi"]
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
        { time: "TBD", title: "Details coming", detail: "Placeholder only so the port stays on the list.", link: "https://maps.google.com/?q=Shimizu+Port+Shizuoka" }
      ],
      options: [],
      food: [
        { name: "Sakura ebi", note: "Cherry shrimp. The Shimizu / Yui don't-miss. Kakiage or rice.", link: "https://maps.google.com/?q=Sakura+ebi+Shimizu" },
        { name: "Shizuoka oden", note: "Black broth, fish cakes, hanpen. Local winter-leaning plate.", link: "https://maps.google.com/?q=Shizuoka+oden+Shimizu" },
        { name: "Unagi", note: "Hamamatsu / Shizuoka eel if you sit down.", link: "https://maps.google.com/?q=Unagi+Shimizu" },
        { name: "Green tea sweet", note: "Shizuoka tea country. A small cake or soft serve is enough.", link: "https://maps.google.com/?q=Shizuoka+green+tea+Shimizu" }
      ],
      logistics: ["Add the Shimizu walking plan when it is ready"]
    }
];
