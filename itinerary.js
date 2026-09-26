window.TRIP = {
  title: "Japan",
  subtitle: "Days & ports",
  travelers: "Our group",
  season: "October 2026",
  tagline: "Compact day and port list. Tap a row for the timed plan, backups, food, and how to get back.",

  overview: [
    { label: "Tokyo days", value: "3" },
    { label: "Ports", value: "6" },
    { label: "Start", value: "Oct 16" },
    { label: "Shimizu", value: "TBD" }
  ],

  days: [
    {
      id: "oct-16",
      date: "Oct 16",
      weekday: "Fri",
      kind: "City",
      port: "Tokyo — Ueno / Asakusa",
      summary: "Ameyoko graze, knives, coin ring, chopsticks, Skytree, Senso-ji after dark.",
      hours: "9:00 AM – late",
      stay: "Tokyo",
      map: "https://maps.google.com/?q=Ueno+Station+Tokyo",
      plan: [
        { time: "9:00–9:45", title: "Ueno Park & Shinobazu Pond", detail: "Meet near Ueno Station. 10–15 minutes on foot to Ameyoko." },
        { time: "9:45–11:00", title: "Ameyoko Market", detail: "Street food and shared bites. Browse snacks and shops. Walk south toward Okachimachi, then taxi." },
        { time: "11:00–11:20", title: "Taxi to Kappabashi", detail: "" },
        { time: "11:20–12:45", title: "Kappabashi + Kama-Asa", detail: "Knives and cookware. Finish toward the south end for the walk to RAGTIME." },
        { time: "12:45–1:00", title: "Walk to RAGTIME", detail: "About 1 km / 12–15 minutes. Arrive at least 5 minutes early." },
        { time: "1:00–2:30", title: "RAGTIME Coin Factory", detail: "Make a coin ring." },
        { time: "2:30–3:00", title: "Walk toward Asakusa", detail: "" },
        { time: "3:00–4:00", title: "Chopstick-making workshop", detail: "Asakusa workshop near Senso-ji. CRAFTJAPAN is the current routing anchor." },
        { time: "4:00–5:00", title: "Asakusa free time", detail: "Snacks and souvenirs. Save the temple walk for after dark." },
        { time: "5:00–5:25", title: "Train to Tokyo Skytree", detail: "Tobu Skytree Line from Asakusa to Tokyo Skytree Station. One stop." },
        { time: "5:30–7:00", title: "Tokyo Skytree", detail: "" },
        { time: "7:00–7:30", title: "Return to Asakusa", detail: "Tobu Skytree Line, one stop back." },
        { time: "7:30–8:30", title: "Senso-ji illuminated", detail: "Slow sightseeing walk. Main hall is closed." },
        { time: "8:30+", title: "Dinner or call it a night", detail: "" }
      ],
      options: [
        { name: "Full day as written", effort: "High", timeNeeded: "All day", items: ["Keep both workshops", "Skytree before the temple lights", "Dinner only if energy is left"] },
        { name: "Drop a workshop", effort: "Medium", timeNeeded: "Shorter afternoon", items: ["Keep Kappabashi or RAGTIME, not both if running late", "Go straight to Asakusa after the first workshop", "Still do Skytree + Senso-ji after dark"] },
        { name: "Weather / tired", effort: "Low", timeNeeded: "Half day", items: ["Ameyoko only", "Taxi back", "Skip Skytree and do Senso-ji in daylight"] }
      ],
      food: ["Graze at Ameyoko late morning", "No sit-down lunch locked", "Dinner after 8:30 in Asakusa, or skip"],
      logistics: ["Meet at Ueno Station at 9:00", "Taxi from south Ameyoko to Kappabashi", "Workshops are the fixed points", "Tobu Skytree Line is one stop each way"]
    },
    {
      id: "oct-17",
      date: "Oct 17",
      weekday: "Sat",
      kind: "City",
      port: "Tokyo — Shinjuku / Shibuya",
      summary: "Salt bread, Godzilla, purikura, ramen class, Shibuya Music Festival, Samurai Restaurant, Golden Gai.",
      hours: "8:15 AM – late",
      stay: "Near Shinjuku",
      map: "https://maps.google.com/?q=Shinjuku+Station+West+Exit",
      plan: [
        { time: "8:15", title: "Leave the hotel", detail: "Walk 10–12 min to Shinjuku Station West Exit, or hotel shuttle + short walk. Group meet at Shinjuku Station or Truffle Bakery." },
        { time: "8:30–8:55", title: "TruffleBAKERY", detail: "Lumine Shinjuku 1, West Exit (西新宿1-1-5). Opens 8:00. Salt bread plus one sweet. Coffee to go. Do not sit — walking breakfast." },
        { time: "8:55–9:20", title: "Cross west → east", detail: "Optional 2-minute stop: 3D cat at East Exit if a clip is running." },
        { time: "9:20–9:45", title: "Godzilla Head", detail: "Cinecity Plaza / Toho Building. Street photos. 7-Eleven in the building for water or merch." },
        { time: "9:50–10:35", title: "Purikura", detail: "GiGO Shinjuku Kabukicho (1-21-1) or Taito Station Shinjuku Kabukicho (1-23-1). One booth. Out by 10:35." },
        { time: "10:40–10:55", title: "Walk to Shinjuku Ale", detail: "1-14-5 Kabukicho, same street as Godzilla." },
        { time: "11:00–12:00", title: "Ramen class = lunch", detail: "Choose soup, boil noodles, toppings, eat. Do not plan another sit-down meal." },
        { time: "12:05–12:35", title: "Kabukicho → Miyashita Park", detail: "JR Yamanote Shinjuku East → Shibuya (~7 min) + walk to Miyashita Park 4F lawn. 25–30 min door to door. Leave class by 12:05." },
        { time: "12:35–3:20", title: "Shibuya Music Festival", detail: "Must. Free. Lawn open 11:00–20:00. 1:00 live broadcast. Nearby: Hachiko, scramble, Parco." },
        { time: "3:20", title: "Leave Shibuya", detail: "Shibuya → Shinjuku East → walk to 1-7-7 Kabukicho. 25–30 min. Be in the building by 3:55." },
        { time: "4:00–6:10", title: "Samurai Restaurant", detail: "Check-in 4:00. Show ~4:30–6:10. Light meal/drinks." },
        { time: "6:20–7:00", title: "Kabukicho walk", detail: "Must do." },
        { time: "7:00", title: "Godzilla roar / Hanazono Shrine", detail: "Roar optional. Hanazono Shrine 7:00–7:20 optional." },
        { time: "7:30+", title: "Golden Gai", detail: "Then Omoide Yokocho if anyone still wants street food. Back to hotel." }
      ],
      options: [
        { name: "Full Saturday as written", effort: "High", timeNeeded: "All day", items: ["Do not add a second lunch after the ramen class", "Festival is the must", "Samurai check-in at 4:00 is the hard edge"] },
        { name: "Skip Samurai Restaurant", effort: "Medium", timeNeeded: "Stay in Shibuya longer", items: ["Keep the festival until you are done", "Return to Shinjuku for Kabukicho + Golden Gai only"] },
        { name: "Early night", effort: "Medium", timeNeeded: "End ~7:00", items: ["Skip Golden Gai and Omoide Yokocho", "Hotel after the Kabukicho walk"] }
      ],
      food: ["Walking breakfast at TruffleBAKERY", "Ramen class is lunch — no second sit-down meal", "Light food at Samurai Restaurant", "Optional Omoide Yokocho after Golden Gai"],
      logistics: ["Leave hotel 8:15", "Purikura out by 10:35", "Leave ramen class by 12:05", "Back in the Samurai building by 3:55", "Yamanote Shinjuku East ↔ Shibuya"]
    },
    {
      id: "oct-18",
      date: "Oct 18",
      weekday: "Sun",
      kind: "City",
      port: "Tokyo — Harajuku / Shibuya",
      summary: "Meiji Jingu, vintage, perfume, UNU market, Shibuya Sky sunset, Maru Bengara dinner.",
      hours: "8:15 AM – 8:45 PM",
      stay: "Near Shinjuku · pack for ship day tonight",
      map: "https://maps.google.com/?q=Meiji+Jingu",
      plan: [
        { time: "8:15", title: "Leave the hotel", detail: "JR Yamanote Shinjuku → Harajuku (~12–15 min). Takeshita Exit." },
        { time: "8:45–9:25", title: "Meiji Jingu (short)", detail: "Coin, bow twice, clap twice, bow once. One omikuji (¥100). Skip the inner garden. Exit south / Takeshita side." },
        { time: "9:25–9:50", title: "Togo Shrine", detail: "5–7 min from the Meiji south side, behind Takeshita. Gap-filler, not a wait." },
        { time: "9:50–10:05", title: "Walk to Jingumae 3-chome", detail: "10–12 minutes." },
        { time: "10:05–10:40", title: "Bread, Espresso & Omotesando", detail: "3-4-9 Jingumae. Coffee + one bread. Sit. Lunch is at 1:00. If the line is a wall: amam dacotan Omotesando, 3-7-6 Kita-Aoyama." },
        { time: "10:40–11:00", title: "Walk back to Takeshita", detail: "Be at CUTE CUBE when it opens." },
        { time: "11:00–11:25", title: "Chicago Takeshita", detail: "CUTE CUBE HARAJUKU B1F, 1-7-1 Jingumae. Vintage + used kimono / yukata. 25 minutes." },
        { time: "11:25–11:35", title: "Walk Meiji-dori to YM Square", detail: "" },
        { time: "11:35–12:15", title: "KINJI Harajuku", detail: "YM Square B1F, 4-31-10 Jingumae. Cap at 40 minutes." },
        { time: "12:15–12:25", title: "Walk to the Folks", detail: "2-18-19 Jingumae." },
        { time: "12:30–1:00", title: "Perfume", detail: "AROMABLENDBAR / EMUCLARET. Blend 3–5 notes. 30 ml bottle." },
        { time: "1:00–1:45", title: "Lunch", detail: "Cat Street / Ura-Harajuku. Chairs. Not another standing snack." },
        { time: "2:00–3:15", title: "Farmers Market @ UNU", detail: "5-53-70 Jingumae. Sunday 10:00–16:00. Walk the stalls once and stop." },
        { time: "3:20–3:50", title: "Toward Shibuya Sky", detail: "Walk Omotesando (20–25 min) or Ginza Line Omotesando → Shibuya (1 stop)." },
        { time: "4:00–5:30", title: "Shibuya Sky", detail: "Timed slot 16:00 or 16:20. Open roof. Sunset ~5:05." },
        { time: "5:30–6:00", title: "Hachiko + scramble once", detail: "No stores." },
        { time: "6:00–6:20", title: "Walk to Shibuya Stream", detail: "New South / C2. Be seated at 18:30." },
        { time: "6:30–8:30", title: "Dinner · Maru Bengara", detail: "圓 弁柄, Shibuya Stream 3F, 3-21-3 Shibuya. Sunday 17:30–21:30 (food LO 21:00). 12-dish omakase ~¥8,000. Do not add Nonbei Yokocho after this." },
        { time: "8:45", title: "Back to Shinjuku", detail: "JR Yamanote Shibuya → Shinjuku. Walk or shuttle to the Hyatt. Pack passports, boarding papers, ship-day clothes." }
      ],
      options: [
        { name: "Full Sunday as written", effort: "High", timeNeeded: "All day", items: ["Keep Shibuya Sky timed ticket", "Market once, then move", "Dinner is the close — no extra bars"] },
        { name: "Line at Bread, Espresso", effort: "Same", timeNeeded: "+8 min walk", items: ["Switch to amam dacotan Omotesando, 3-7-6 Kita-Aoyama"] },
        { name: "Rain / tired feet", effort: "Medium", timeNeeded: "Shorter", items: ["Meiji Jingu only — skip Togo", "One vintage shop, not two", "Ginza Line to Shibuya instead of walking Omotesando"] }
      ],
      food: ["Coffee + one bread mid-morning", "Sit-down lunch on Cat Street at 1:00", "Fruit or bread from UNU market", "Maru Bengara dinner — no Nonbei Yokocho after"],
      logistics: ["Yamanote Shinjuku → Harajuku, Takeshita Exit", "Chicago at 11:00 opening", "KINJI cap 40 minutes", "Shibuya Sky 16:00 or 16:20", "Seated at Maru Bengara 18:30", "Pack ship-day clothes tonight"]
    },
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
        { time: "10:00–10:25", title: "Tram north", detail: "Ourakaigandori → transfer at Shinchi Chinatown → Hamaguchi-machi or Heiwa-koen / Matsuyama-machi. About 20–25 minutes." },
        { time: "10:25–12:30", title: "Peace Park, Hypocenter, Atomic Bomb Museum", detail: "" },
        { time: "12:30–13:45", title: "Shinchi Chinatown + lunch", detail: "Champon, sara udon, castella." },
        { time: "13:45–14:45", title: "Dejima", detail: "Five–ten minutes on foot from Chinatown." },
        { time: "14:45–16:45", title: "Glover Garden + Oura Cathedral", detail: "Short tram or a 15–20 minute walk uphill." },
        { time: "16:45–18:30", title: "Stay south, near the ship", detail: "Glover Street, Dejima Wharf, waterfront walk to Matsugae." }
      ],
      options: [
        { name: "Full loop as written", effort: "High", timeNeeded: "8+ hrs", items: ["Museum first", "Lunch in Chinatown", "Glover last because it is closest to the ship"] },
        { name: "Short day", effort: "Medium", timeNeeded: "Until ~15:00", items: ["Peace Park + museum only", "Chinatown lunch", "Skip Glover and walk back from Dejima"] }
      ],
      food: ["Champon", "Sara udon", "Castella"],
      logistics: ["Start at Ourakaigandori tram", "Transfer at Shinchi Chinatown", "Stay south after 16:45"]
    },
    {
      id: "busan",
      date: "Port day",
      weekday: "",
      kind: "Port",
      port: "Busan",
      summary: "Meet Suni. Temple, skywalk, markets, lunch with Suni, Gamcheon, back by 3:00.",
      hours: "8:00 AM – 3:00 PM",
      stay: "Ship",
      map: "https://maps.google.com/?q=Busan+cruise+terminal",
      plan: [
        { time: "8:00", title: "Meet Suni at the cruise terminal", detail: "" },
        { time: "Morning", title: "Haedong Yonggungsa", detail: "Seaside Buddhist temple and coastal scenery." },
        { time: "Morning", title: "Cheongsapo Daritdol Skywalk", detail: "Ocean-view glass skywalk." },
        { time: "Late morning", title: "BIFF Square + Gukje Market", detail: "Old downtown street food and market browsing." },
        { time: "Lunch", title: "Lunch with Suni", detail: "Follow her local recommendation." },
        { time: "Afternoon", title: "Gamcheon Culture Village", detail: "Hillside lanes, shops, and viewpoints." },
        { time: "By 3:00", title: "Return to the cruise terminal", detail: "" }
      ],
      options: [
        { name: "With Suni as written", effort: "Medium", timeNeeded: "7 hrs", items: ["Let her order the driving sequence", "Gamcheon last", "Hard stop 3:00 at the terminal"] },
        { name: "If the morning runs long", effort: "Medium", timeNeeded: "Cut one stop", items: ["Keep the temple and lunch with Suni", "Drop the skywalk or Gamcheon"] }
      ],
      food: ["Street snacks at BIFF / Gukje if needed", "Lunch with Suni — her pick"],
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
        { time: "7:00–8:00", title: "Off ship + into town", detail: "Aim to be at the Dome by 08:00–08:15." },
        { time: "8:00–9:00", title: "Atomic Bomb Dome + Peace Memorial Park", detail: "" },
        { time: "9:00–11:15", title: "Peace Memorial Museum", detail: "" },
        { time: "11:15–12:15", title: "Okonomiyaki", detail: "" },
        { time: "Afternoon", title: "If time remains", detail: "Shukkeien Garden or Hiroshima Castle, then Hondori arcade, then tram/taxi back." }
      ],
      options: [
        { name: "Memorial morning only", effort: "Medium", timeNeeded: "Until lunch", items: ["Dome, park, museum, okonomiyaki", "Taxi back after lunch"] },
        { name: "Add one extra", effort: "Medium-high", timeNeeded: "Full port day", items: ["Pick Shukkeien or the castle — not both", "Hondori only if you still need a shop street"] }
      ],
      food: ["Hiroshima okonomiyaki after the museum"],
      logistics: ["Dome by 8:00–8:15", "Give the museum a real time block", "Garden / castle is optional after lunch"]
    },
    {
      id: "aburatsu",
      date: "Oct 25",
      weekday: "",
      kind: "Port",
      port: "Aburatsu / Nichinan",
      summary: "Private pickup. Udo Jingu, Namikiri Shrine, lunch in Obi, castle town, back to port.",
      hours: "8:30 AM – about 1:45 PM",
      stay: "Ship",
      map: "https://maps.google.com/?q=Udo+Jingu+Nichinan",
      plan: [
        { time: "8:30", title: "Pickup at Aburatsu Port", detail: "Scenic coastal drive toward Nichinan." },
        { time: "8:50–10:15", title: "Udo Jingu", detail: "Cliffside shrine in a sea cave. Vermilion approach, undama toss toward Turtle Rock." },
        { time: "10:15–11:00", title: "Namikiri Shrine", detail: "Short quieter trail from Udo Jingu to a small hidden cave shrine by the water." },
        { time: "11:20–12:30", title: "Lunch in Obi", detail: "Local restaurant. Guide picks once allergies and preferences are shared." },
        { time: "12:30–1:20", title: "Obi Castle Town", detail: "Samurai streets, stone walls, merchant houses." },
        { time: "1:20–1:45", title: "Drive back to Aburatsu Port", detail: "" }
      ],
      options: [
        { name: "Full private loop", effort: "Medium", timeNeeded: "~5 hrs", items: ["Udo Jingu + Namikiri + Obi lunch + castle town"] },
        { name: "Shrines only", effort: "Lower", timeNeeded: "Back ~1:30–2:00", items: ["Udo Jingu main visit", "Namikiri if the trail is easy", "Skip Obi and return to Aburatsu"] }
      ],
      food: ["Lunch in Obi — tell the guide allergies beforehand"],
      logistics: ["Pickup 8:30 at Aburatsu Port", "Back to port by about 1:45"]
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
        { time: "10:15–11:50", title: "Awa Jurobe Yashiki", detail: "11:00 Ningyo Joruri show (~35 min). Monday uses recorded music. Ticket ¥410 includes museum. Do not eat on site." },
        { time: "12:10–1:30", title: "Lunch downtown", detail: "Taxi ~15 min to JR Tokushima Station. Eat near the station, walk ~10 min to Awa Odori Kaikan. Finish by 1:30." },
        { time: "1:45–2:45", title: "Awa Odori Kaikan", detail: "2:00 dance, 40 minutes, ~¥1,300. Sit near the aisle for the audience dance." },
        { time: "2:50–3:50", title: "Mt. Bizan ropeway", detail: "Same building, 5th floor. Round trip about ¥1,030." },
        { time: "3:50–4:30", title: "Shopping here, not later", detail: "Arudeyo Tokushima on 1F: Awa indigo, sudachi, Naruto Kintoki sweets, fans, Otani-yaki. Backup: Nomon Tokushima and Souvenir Ichibankan." },
        { time: "4:30", title: "Taxi to the pier", detail: "From the Kaikan or the station." }
      ],
      options: [
        { name: "Classic Tokushima ramen", effort: "Lunch", timeNeeded: "Station area", items: ["Inotani Honten is closed Mondays — skip it", "Ask for a shop advertising 徳島ラーメン"] },
        { name: "Do no Ura Ekimae", effort: "Lunch", timeNeeded: "4 min from station", items: ["Monday lunch 11:30–2:00", "Sea-bream salt ramen", "Small, can queue"] },
        { name: "DOOR! set meal", effort: "Lunch", timeNeeded: "~5 min from station", items: ["Farm-to-table plate", "Lunch last order 2:00", "Best if someone does not want noodles"] },
        { name: "Clement Plaza / station building", effort: "Safest", timeNeeded: "Short", items: ["Food court upstairs and downstairs", "You will eat and still make the 2:00 show"] }
      ],
      food: ["Do not eat at Jurobe Yashiki", "Downtown lunch near the station, done by 1:30"],
      logistics: ["Monday: Inotani closed; Jurobe show is recorded music", "Shop at the Kaikan before the 4:30 taxi"]
    },
    {
      id: "shimizu",
      date: "Port day",
      weekday: "",
      kind: "Port",
      port: "Shimizu (Mt. Fuji)",
      summary: "Plan not added yet.",
      hours: "TBD",
      stay: "Ship",
      map: "https://maps.google.com/?q=Shimizu+Port",
      plan: [
        { time: "TBD", title: "Details coming", detail: "Placeholder only so the port stays on the list." }
      ],
      options: [],
      food: [],
      logistics: ["Add the Shimizu day when it is ready"]
    }
  ],

  lodging: [
    { city: "Tokyo", name: "Hotel near Shinjuku (Hyatt on Oct 18)", nights: "City days", note: "West Exit / shuttle on Oct 17–18. Pack ship-day clothes the night of Oct 18." },
    { city: "Cruise", name: "Ship nights", nights: "Port days", note: "Nagasaki, Busan, Hiroshima, Aburatsu, Tokushima, Shimizu." }
  ],

  transport: [
    { when: "Oct 16", what: "Walk + taxi + Tobu Skytree Line", detail: "Ueno to Ameyoko on foot, taxi to Kappabashi, one-stop train to Skytree and back." },
    { when: "Oct 17–18", what: "JR Yamanote", detail: "Shinjuku East ↔ Shibuya; Shinjuku → Harajuku Takeshita Exit." },
    { when: "Oct 25", what: "Private sedan from Aburatsu", detail: "Port pickup 8:30. Udo Jingu, Namikiri, Obi, back ~1:45." },
    { when: "Port days", what: "Tram / taxi / local host", detail: "Nagasaki tram. Busan with Suni. Hiroshima early into town. Tokushima taxi + station cluster." }
  ],

  notes: [
    "Tap a day for the full timed plan and the backup options.",
    "Oct 17: ramen class is lunch. Oct 18: no bars after Maru Bengara.",
    "Tokushima is a Monday — Inotani is closed.",
    "Shimizu is on the list with no plan yet."
  ]
};
