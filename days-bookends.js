window.ARRIVAL_DAYS = [
  {
    id: "oct-15",
    date: "Oct 15",
    weekday: "Thu",
    kind: "Arrive",
    port: "Tokyo — you arrive",
    summary: "You arrive Tokyo today. Check in. Shopping and dinner at your discretion. Friday still leaves at 7:40.",
    hours: "Afternoon / evening",
    stay: "Hyatt Regency Tokyo, Nishi-Shinjuku",
    map: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku",
    plan: [
      { time: "Afternoon / evening", title: "You arrive Tokyo", detail: "Friends already landed Narita on the 7th. This is your first Tokyo night. Check in at the Hyatt. No locked plan after that.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Check-in", title: "Hyatt Regency Tokyo", detail: "Nishi-Shinjuku. Walk to Shinjuku West Exit from here all weekend.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Rest of day", title: "Shopping and food — pick what you want", detail: "Stay west-side Shinjuku so Friday at 7:40 is easy. Ideas below. Do not lock anything.", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit" }
    ],
    options: [
      { name: "Omoide Yokocho", effort: "Closest interesting", timeNeeded: "30–45 min", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku", items: ["West Exit tracks. Yakitori, beer, standing. Cash. One stall and stop."] },
      { name: "Shinjuku station shopping", effort: "Indoor", timeNeeded: "30–60 min", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku", items: [{ name: "Odakyu / Keio basement", note: "Food floor. Bento, soba, croquette, sweets.", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement" }, { name: "Bic Camera or Uniqlo West Exit", note: "Only if you want a first look. Sunday already has a Bic.", link: "https://maps.google.com/?q=Bic+Camera+Shinjuku+West" }] },
      { name: "Hotel and done", effort: "Lowest", timeNeeded: "Whenever", items: ["Shower. Hyatt restaurant or room service. Sleep."] }
    ],
    food: [
      { name: "Omoide Yokocho yakitori", note: "Closest don't-miss near the Hyatt.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" },
      { name: "Standing soba at Shinjuku West", note: "Ten minutes.", link: "https://maps.google.com/?q=Shinjuku+West+Exit+soba" },
      { name: "Yoshinoya / Matsuya", note: "Gyudon if you are cooked.", link: "https://maps.google.com/?q=Yoshinoya+Nishi-Shinjuku" },
      { name: "Odakyu basement sweets / bento", note: "Eat in or take upstairs.", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement" },
      { name: "Hyatt restaurant or room service", note: "If nobody wants to walk.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" }
    ],
    logistics: ["You arrive Oct 15. Friends landed Narita Oct 7. Friends fly Oct 29.", "Friday starts at 7:40. Keep tonight close."]
  }
];

window.EMBARK_DAYS = [
  {
    id: "oct-19",
    date: "Oct 19",
    weekday: "Mon",
    kind: "Embark",
    port: "Yokohama — board Diamond Princess",
    summary: "Leave the Hyatt in the morning. Board mid-morning. Ship leaves 3:00 PM.",
    hours: "Board morning · sail 15:00",
    stay: "Diamond Princess",
    map: "https://maps.google.com/?q=Yokohama+cruise+terminal",
    plan: [
      { time: "Morning", title: "Leave the Hyatt", detail: "Pack passports and boarding papers the night of Oct 18. Confirm the exact pier the day before.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Mid-morning", title: "Yokohama cruise terminal", detail: "Pier still to confirm.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "On board", title: "Find the cabin, eat on the ship", detail: "Lunch on board is the easy move.", link: "https://maps.google.com/?q=Diamond+Princess+Yokohama" },
      { time: "3:00 PM", title: "Ship sails", detail: "Be on board well before 3:00.", link: "https://maps.google.com/?q=Yokohama+port" }
    ],
    options: [
      { name: "Eat on the ship", effort: "Default", timeNeeded: "After check-in", items: ["Buffet or the first assigned restaurant."] },
      { name: "Shinjuku station bite before the transfer", effort: "If you leave late morning", timeNeeded: "15 min", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit", items: ["Onigiri or a bakery bag from Lumine / Odakyu."] }
    ],
    food: [
      { name: "Ship lunch", note: "First meal on board.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Shinjuku bakery / onigiri", note: "Bridge from the Hyatt to the pier.", link: "https://maps.google.com/?q=Lumine+Shinjuku" }
    ],
    logistics: ["Confirm the exact Yokohama pier the day before.", "Ship departs 3:00 PM."]
  },
  {
    id: "oct-20",
    date: "Oct 20",
    weekday: "Tue",
    kind: "Sea",
    port: "At sea",
    summary: "Full sea day toward Nagasaki. Ship food. No port.",
    hours: "All day on board",
    stay: "Ship",
    map: "https://maps.google.com/?q=Diamond+Princess",
    plan: [
      { time: "All day", title: "At sea", detail: "Nagasaki is tomorrow, ship in at 10:00." }
    ],
    options: [
      { name: "Ship day as written", effort: "Low", timeNeeded: "All day", items: ["Eat on board", "Do not plan a port"] }
    ],
    food: [
      { name: "Main dining room", note: "Assigned seating if you took it.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Horizon Court buffet", note: "Anytime." },
      { name: "International Cafe / pizza", note: "Light ship snacks." }
    ],
    logistics: ["Sea day. Nagasaki tomorrow 10:00."]
  }
];

window.KANMON_DAYS = [
  {
    id: "oct-23",
    date: "Oct 23",
    weekday: "Fri",
    kind: "Sea",
    port: "Kanmon Straits — scenic cruising",
    summary: "Stay on the ship. Straits passage about 8:00–10:00. Hiroshima tomorrow 7:00.",
    hours: "8:00 – 10:00 on deck",
    stay: "Ship",
    map: "https://maps.google.com/?q=Kanmon+Straits",
    plan: [
      { time: "8:00–10:00", title: "Kanmon Straits", detail: "Scenic cruising. Not a port. Nobody gets off.", link: "https://maps.google.com/?q=Kanmon+Straits+Kanmonkyo" },
      { time: "Rest of day", title: "At sea toward Hiroshima", detail: "Hiroshima is 7:00 tomorrow." }
    ],
    options: [
      { name: "Deck for the straits", effort: "Low", timeNeeded: "8:00–10:00", items: ["Coffee on an open deck"] }
    ],
    food: [
      { name: "Ship breakfast on deck", note: "Coffee while the straits go by." },
      { name: "Ship lunch and dinner", note: "No local stall today." }
    ],
    logistics: ["Not a port day.", "Hiroshima tomorrow, ship 7:00–17:00."]
  }
];

window.END_DAYS = [
  {
    id: "oct-28",
    date: "Oct 28",
    weekday: "Wed",
    kind: "Depart",
    port: "Yokohama — you fly 4:25",
    summary: "Dock 6:30 AM. Off the ship 8:00–9:30. Loose morning in Yokohama if time. Be at the airport by 1:25. Flight 4:25. Friends stay until the 29th.",
    hours: "Dock 6:30 · airport 1:25 · flight 4:25",
    stay: "In the air",
    map: "https://maps.google.com/?q=Yokohama+cruise+terminal",
    plan: [
      { time: "6:30 AM", title: "Ship docks Yokohama", detail: "Stay seated until your group is called.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "About 8:00–9:30", title: "Off the ship", detail: "Immigration and bag pickup.", link: "https://maps.google.com/?q=Yokohama+cruise+terminal" },
      { time: "9:30–12:00", title: "Loose morning — only if you are off early", detail: "Do not lock a plan. Bags with you. Pick one idea below or go straight to the airport.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse" },
      { time: "By 12:00", title: "Leave for the airport", detail: "Hard edge. Be inside the terminal by 1:25. Flight 4:25.", link: "https://maps.google.com/?q=Haneda+Airport" },
      { time: "1:25 PM", title: "At the airport", detail: "Three hours before 4:25.", link: "https://maps.google.com/?q=Haneda+Airport+food" },
      { time: "4:25 PM", title: "Your flight", detail: "Times only. Friends fly tomorrow, the 29th." }
    ],
    options: [
      { name: "Straight to the airport", effort: "Safest", timeNeeded: "Leave as soon as bags are in hand", items: ["Best if deboard runs late. Airport food is the lunch."] },
      { name: "Yokohama waterfront if you are off by 9:30", effort: "One zone only", timeNeeded: "Until 12:00", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse", items: [{ name: "Red Brick Warehouse", note: "Shops and a snack.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse" }, { name: "Yokohama Chinatown", note: "Pork bun or fried wonton to walk with. No long lunch.", link: "https://maps.google.com/?q=Yokohama+Chinatown" }, { name: "Motomachi / Bashamichi", note: "A few shops if you want one last street.", link: "https://maps.google.com/?q=Motomachi+Yokohama" }] }
    ],
    food: [
      { name: "Ship breakfast", note: "Eat before your call group if breakfast is still open." },
      { name: "Yokohama Chinatown pork bun", note: "Walk-and-eat. Only if you have the loose morning.", link: "https://maps.google.com/?q=Yokohama+Chinatown+pork+bun" },
      { name: "Shumai or a brick-warehouse snack", note: "Yokohama's local bite.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse+food" },
      { name: "Airport ramen or tonkatsu sando", note: "The reliable lunch if you skip Yokohama.", link: "https://maps.google.com/?q=Haneda+Airport+ramen" }
    ],
    logistics: ["You fly Oct 28 at 4:25. Be at the airport by 1:25.", "Leave Yokohama by 12:00.", "Friends fly Oct 29. No Oct 29 on this itinerary."]
  }
];
