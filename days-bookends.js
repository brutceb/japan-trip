window.ARRIVAL_DAYS = [
  {
    id: "oct-13",
    date: "Oct 13",
    weekday: "Tue",
    kind: "Hotel",
    port: "Charlotte — night before the flight",
    summary: "Home2 Suites Charlotte Airport. Check-in 3:00 PM. Conf …1269. Leave by 7:15 AM Wednesday for the 9:35 flight.",
    hours: "Check-in 3:00 PM",
    stay: "Home2 Suites by Hilton Charlotte Airport",
    map: "https://maps.google.com/?q=4240+Scott+Futrell+Drive+Charlotte+NC+28214",
    plan: [
      { time: "3:00 PM", title: "Check in, Home2 Suites Charlotte Airport", detail: "4240 Scott Futrell Drive, Charlotte, NC 28214. Confirmation …1269. Charlie Brutch, 2 adults, 1 queen studio, nonsmoking. 40,000 points. About 10 minutes to CLT.", link: "https://maps.google.com/?q=4240+Scott+Futrell+Drive+Charlotte+NC+28214" },
      { time: "Evening", title: "Easy night, bags ready", detail: "Free build-your-own breakfast in the morning if you want it. Self-parking $11. Official checkout is noon Wednesday. Do not use that. Flight is 9:35 AM.", link: "https://maps.google.com/?q=Home2+Suites+Charlotte+Airport" },
      { time: "7:15 AM Wed", title: "Leave for CLT", detail: "Be at the airport by 7:45. DL 1639 at 9:35. Phone 704-398-2940.", link: "https://maps.google.com/?q=Charlotte+Douglas+Airport" }
    ],
    options: [
      { name: "Hotel breakfast", effort: "Included", timeNeeded: "20 min", items: ["Build-your-own breakfast. Only if you are out the door by 7:15."] },
      { name: "Skip breakfast", effort: "Safest", timeNeeded: "0", items: ["Eat at CLT. The flight is the constraint, not checkout."] }
    ],
    food: [
      { name: "Home2 breakfast", note: "Included. Eggs, meats, cheeses, breads. Only if it does not push you past 7:15.", link: "https://maps.google.com/?q=Home2+Suites+Charlotte+Airport" },
      { name: "CLT terminal meal", note: "Backup if you leave without eating.", link: "https://maps.google.com/?q=Charlotte+Douglas+Airport+food" }
    ],
    logistics: [
      "Confirmation …1269. Check-in Tue Oct 13 3:00 PM. Official checkout Wed Oct 14 12:00 PM.",
      "Leave by 7:15 AM Oct 14. Be at CLT by 7:45 for DL 1639 at 9:35.",
      "1 queen studio, 2 adults, 40,000 points. Self-parking $11. Cancel free until 11:59 PM Oct 12.",
      "Phone +1 704-398-2940."
    ]
  },
  {
    id: "oct-14",
    date: "Oct 14",
    weekday: "Wed",
    kind: "Fly",
    port: "CLT \u2192 DTW \u2192 Haneda",
    summary: "Leave Home2 Suites by 7:15a. CLT 9:35a DL 1639 to DTW 11:31a. DTW 1:45p DL 275 overnight. Land Haneda Thu 4:15p.",
    hours: "9:35a start",
    stay: "In the air",
    map: "https://maps.google.com/?q=Charlotte+Douglas+Airport",
    plan: [
      { time: "7:15a", title: "Leave Home2 Suites", detail: "4240 Scott Futrell Drive. Conf …1269. Official checkout is noon. Do not wait. About 10 minutes to CLT. Be at the airport by 7:45.", link: "https://maps.google.com/?q=4240+Scott+Futrell+Drive+Charlotte+NC+28214" },
      { time: "9:35\u201311:31a", title: "CLT to DTW \u00b7 DL 1639", detail: "Leave Charlotte 9:35a. Land Detroit 11:31a. Stay airside.", link: "https://maps.google.com/?q=Charlotte+Douglas+Airport" },
      { time: "11:31a\u20131:45p", title: "DTW layover", detail: "About 2 hours 14 minutes. Do not leave the terminal. Eat a real meal here. Next sit-down is Tokyo night.", link: "https://maps.google.com/?q=Detroit+Metro+Airport+food" },
      { time: "1:45p", title: "DTW to Haneda \u00b7 DL 275", detail: "Overnight. Lands Thursday 4:15p Japan time. Sleep if you can. No Tokyo plan today.", link: "https://maps.google.com/?q=Haneda+Airport+Terminal+3" }
    ],
    options: [
      { name: "Eat in Detroit", effort: "Layover", timeNeeded: "30\u201345 min", items: ["Airport sit-down or a sandwich for the long haul. Do not leave the terminal."] },
      { name: "Sleep on the plane", effort: "Default", timeNeeded: "Overnight", items: ["Thursday is a late check-in. Friday still leaves the Hyatt at 7:40."] }
    ],
    food: [
      { name: "DTW terminal meal", note: "Best real food of the day.", link: "https://maps.google.com/?q=Detroit+Metro+Airport+restaurants" },
      { name: "Plane snack", note: "Enough until Haneda." }
    ],
    logistics: [
      "Leave Home2 Suites by 7:15a. Conf …1269. Be at CLT by 7:45.",
      "Wed 14 Oct \u00b7 CLT 9:35a \u2192 DTW 11:31a \u00b7 DL 1639.",
      "Wed 14 Oct \u00b7 DTW 1:45p \u2192 HND Thu 15 Oct 4:15p \u00b7 DL 275.",
      "Friends already in Japan from Oct 7. You fly home Oct 28 at 4:25."
    ]
  },
  {
    id: "oct-15",
    date: "Oct 15",
    weekday: "Thu",
    kind: "Arrive",
    port: "Haneda 4:15p \u2192 Hyatt",
    summary: "Land 4:15p. Out of HND about 5:15\u20135:45. Airport to hotel 40\u201380 min. Check in about 6:30\u20137:45. Vague night near the Hyatt.",
    hours: "Land 4:15p",
    stay: "Hyatt Regency Tokyo, Nishi-Shinjuku",
    map: "https://maps.google.com/?q=Haneda+Airport+Terminal+3",
    plan: [
      { time: "4:15p", title: "Land Haneda T3", detail: "DL 275. Immigration plus bags usually 45\u201375 minutes. Plan on walking out around 5:15\u20135:45. Do not start a far neighborhood tonight.", link: "https://maps.google.com/?q=Haneda+Airport+Terminal+3" },
      { time: "5:15\u20135:45", title: "Clear the airport", detail: "Passport control, bags, customs. Buy a Suica or PASMO at the machines if you will take the train. Limousine-bus tickets are at the counter in arrivals.", link: "https://maps.google.com/?q=Haneda+Airport+Terminal+3+arrivals" },
      { time: "5:30\u20137:15", title: "Airport to hotel", detail: "Pick one. Train: Keikyu to Shinagawa then Yamanote to Shinjuku West, about 40\u201355 min plus a 9-minute walk. Limousine bus: about 50\u201370 min, no transfer, some runs stop at the Hyatt. Taxi: about 30 min, 8,000 to 12,000 yen. Evening rush 5:00\u20137:30. Bags are easier on the bus or a taxi.", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit" },
      { time: "6:30\u20137:45", title: "Walk in and check in", detail: "Hyatt check-in from 2:00p so the room is ready. 9 minutes from Shinjuku West Exit, or Tochomae Exit A7 about 1 minute under the building. Shower. Bags down. Friday still leaves at 7:40.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "7:45+", title: "Vague night near the hotel", detail: "Pick one option below. Do not lock a reservation. Keep it close and short.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" }
    ],
    options: [
      { name: "Omoide Yokocho", effort: "Closest interesting", timeNeeded: "30\u201345 min", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku", items: ["West Exit tracks. Yakitori, beer, standing. Cash. One stall and stop."] },
      { name: "Shinjuku West shopping", effort: "Indoor", timeNeeded: "30\u201360 min", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku", items: [{ name: "Odakyu / Keio basement", note: "Food floor. Bento, soba, croquette, sweets to take upstairs.", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement" }, { name: "Bic Camera Shinjuku West", note: "First look only. Sunday already has a Bic.", link: "https://maps.google.com/?q=Bic+Camera+Shinjuku+West" }, { name: "Uniqlo West Exit", note: "Only if you need a layer.", link: "https://maps.google.com/?q=Uniqlo+Shinjuku+West" }] },
      { name: "Stay on the Hyatt block", effort: "Lowest", timeNeeded: "Whenever", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku", items: [{ name: "7-Eleven in the hotel", note: "Ground floor. Onigiri, sandwiches, drinks. Open 24 hours.", link: "https://maps.google.com/?q=7-Eleven+Hyatt+Regency+Tokyo" }, { name: "Crossroads Kitchen", note: "Hotel buffet / restaurant. Dinner 5:30\u201310:00.", link: "https://maps.google.com/?q=Crossroads+Kitchen+Hyatt+Regency+Tokyo" }, { name: "Jade Garden or Nadaman", note: "Hotel Chinese or Japanese if you want to sit down and stay inside.", link: "https://maps.google.com/?q=Jade+Garden+Hyatt+Regency+Tokyo" }] }
    ],
    food: [
      { name: "Omoide Yokocho yakitori", note: "Closest don't-miss near the Hyatt.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" },
      { name: "Standing soba at Shinjuku West", note: "Ten minutes.", link: "https://maps.google.com/?q=Shinjuku+West+Exit+soba" },
      { name: "Yoshinoya / Matsuya Nishi-Shinjuku", note: "Gyudon if you are cooked.", link: "https://maps.google.com/?q=Yoshinoya+Nishi-Shinjuku" },
      { name: "Odakyu basement bento / sweets", note: "Eat in or take to the room.", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement" },
      { name: "7-Eleven in the Hyatt", note: "Onigiri and a drink. No walk.", link: "https://maps.google.com/?q=7-Eleven+Hyatt+Regency+Tokyo" },
      { name: "Crossroads Kitchen or room service", note: "If nobody wants to leave the building.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" }
    ],
    logistics: [
      "Land HND 4:15p. Immigration + bags 45\u201375 min. Out about 5:15\u20135:45.",
      "Then 40\u201380 min to the hotel. Check in about 6:30\u20137:45.",
      "Train 40\u201355 min + 9-min walk from Shinjuku West. Limousine bus 50\u201370 min, some runs stop at the Hyatt (about 1,400 yen). Taxi about 30 min, 8,000 to 12,000 yen.",
      "Hotel check-in from 2:00p. Tochomae Exit A7 is about 1 minute under the building.",
      "Friends landed Narita Oct 7. Friday starts at 7:40."
    ]
  }
];

window.EMBARK_DAYS = [
  {
    id: "oct-19",
    date: "Oct 19",
    weekday: "Mon",
    kind: "Embark",
    port: "Osanbashi \u2014 board Diamond Princess",
    summary: "Check-in opens about 12:00. Be at Osanbashi by 13:00 if you can. Official latest 14:00. All-aboard / check-in cutoff 14:00. Ship sails 15:00.",
    hours: "Check-in 12:00 \u00b7 latest 14:00 \u00b7 sail 15:00",
    stay: "Diamond Princess",
    map: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal",
    plan: [
      { time: "Night of Oct 18", title: "Pack and confirm the pier", detail: "Passports, Princess app check-in done, bags tagged. Confirm Osanbashi vs Daikoku on the app. Hyatt checkout is 11:00.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "By 11:00\u201311:15", title: "Leave the Hyatt", detail: "Checkout is 11:00 (Hyatt confirmation). Best with big bags: taxi from the Hyatt door, about 45\u201360 min, roughly 10,000\u201316,000 yen per car with tolls (estimate; four people plus bags likely needs two cars or a large taxi, ask the bell desk). Train: walk 9 min to Shinjuku, JR Shonan-Shinjuku Line to Yokohama about 30 min, Minatomirai Line 3 stops to Nihon-odori, Exit 1, 7\u201310 min walk. About 75\u201390 min door to door with bags, about 700 yen each. Leave by 11:15 so you are not gambling on Monday traffic.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "About 12:00\u201312:30", title: "Arrive Osanbashi", detail: "Yokohama International Passenger Terminal, 1-1-4 Kaigandori. Check-in opens about noon. The first hour is the longest line. Porters take bags from the taxi. No shuttle from the station.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "12:00\u201314:00", title: "Check-in window", detail: "Princess official window for 2026 Yokohama sailings: noon until one hour before sail. Have passports and the app ready. After you board you cannot go back ashore.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "13:00", title: "Recommended latest at the door", detail: "Princess FAQ: arrive two hours before sail. 13:00 is the comfortable latest.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "14:00", title: "Official all-aboard / cutoff", detail: "Princess Japan: finish check-in by 14:00. Arrive after 14:00 and they can refuse boarding. This is the hard latest at the terminal, not at the Hyatt.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "On board", title: "Cabin and ship lunch", detail: "Cabin E412, Emerald deck 8, port side, midship. Eat on the ship. No Yokohama restaurant after you check in.", link: "https://maps.google.com/?q=Diamond+Princess+Yokohama" },
      { time: "15:00", title: "Ship sails", detail: "Yokohama City and Princess both list 15:00 off Osanbashi. All-aboard was 14:00.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" }
    ],
    options: [
      { name: "Eat on the ship", effort: "Default", timeNeeded: "After check-in", items: ["Buffet or the first assigned restaurant. Do this."] },
      { name: "Shinjuku station bite before you leave", effort: "Only if you leave after 11:00", timeNeeded: "10\u201315 min", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit", items: ["Onigiri or a bakery bag from Lumine / Odakyu. Eat in the taxi or on the train."] }
    ],
    food: [
      { name: "Ship lunch", note: "First meal on board. Do this unless you already ate.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Shinjuku bakery / onigiri", note: "Only as a bridge from the Hyatt to Osanbashi.", link: "https://maps.google.com/?q=Lumine+Shinjuku" }
    ],
    logistics: [
      "Osanbashi International Passenger Terminal. Confirm the pier on the Princess app Oct 18.",
      "Check-in about 12:00 to 14:00. Recommended at the door by 13:00. Official latest 14:00.",
      "All-aboard / check-in cutoff is 14:00. Sail 15:00. Late arrivals after 14:00 can be denied.",
      "After you board you cannot go ashore. Pack ship-day clothes Oct 18. Hyatt checkout 11:00."
    ]
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
    plan: [{ time: "All day", title: "At sea", detail: "Nagasaki is tomorrow, ship in at 10:00. Use today for rest, laundry, and the first formal or anytime dining slot." }],
    options: [{ name: "Ship day as written", effort: "Low", timeNeeded: "All day", items: ["Eat on board", "Do not plan a port"] }],
    food: [
      { name: "Main dining room", note: "Assigned seating if you took it.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Horizon Court buffet", note: "Anytime. Useful after jet lag." },
      { name: "International Cafe / pizza", note: "Light ship snacks between meals." }
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
    port: "Kanmon Straits \u2014 scenic cruising",
    summary: "Stay on the ship. Straits passage about 8:00\u201310:00. Hiroshima tomorrow 7:00.",
    hours: "8:00 \u2013 10:00 on deck",
    stay: "Ship",
    map: "https://maps.google.com/?q=Kanmon+Straits",
    plan: [
      { time: "8:00\u201310:00", title: "Kanmon Straits", detail: "Scenic cruising. Deck if the weather is decent. This is not a port. Nobody gets off.", link: "https://maps.google.com/?q=Kanmon+Straits+Kanmonkyo" },
      { time: "Rest of day", title: "At sea toward Hiroshima", detail: "Hiroshima is 7:00 tomorrow. Early night." }
    ],
    options: [{ name: "Deck for the straits", effort: "Low", timeNeeded: "8:00\u201310:00", items: ["Coffee on an open deck", "Then back inside"] }],
    food: [
      { name: "Ship breakfast on deck", note: "Coffee and something small while the straits go by." },
      { name: "Ship lunch and dinner", note: "No local stall today. Kanmon fugu is for people on shore." }
    ],
    logistics: ["Not a port day.", "Hiroshima tomorrow, ship 7:00\u201317:00."]
  }
];

window.END_DAYS = [
  {
    id: "oct-28",
    date: "Oct 28",
    weekday: "Wed",
    kind: "Depart",
    port: "Osanbashi \u2014 HND 4:25p",
    summary: "Dock 6:30a at Osanbashi International Passenger Terminal. Off ship 8:00\u20139:30. One short walk from the terminal if you are early. Leave by noon. Airport 1:25. HND 4:25p DL 294 to ATL, then DL 2813 to CLT.",
    hours: "Dock 6:30 \u00b7 airport 1:25 \u00b7 HND 4:25p",
    stay: "In the air",
    map: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal",
    plan: [
      { time: "6:30a", title: "Dock Osanbashi", detail: "Yokohama International Passenger Terminal, 1-1-4 Kaigandori. Stay seated until your group is called. Bags in the terminal hall.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "About 8:00\u20139:30", title: "Off the ship", detail: "Immigration and bag pickup in the terminal. Time depends on the call group (Princess sends the letter two days before). Early self-carry walk-off is not needed for a 4:25 flight. Take it only if you want the free morning.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { time: "9:30\u201312:00", title: "Loose morning from the terminal", detail: "Only if you are off early. Bags with you. Stay on the Osanbashi block: rooftop, Yamashita Park 7 min, Red Brick 10 min, Chinatown 12 min, Motomachi 16 min. Pick one.", link: "https://maps.google.com/?q=Yamashita+Park+Yokohama" },
      { time: "By 12:00", title: "Leave for Haneda", detail: "Hard edge. Taxi to HND T3 about 30\u201345 min, roughly 9,000\u201312,000 yen (estimate). Or taxi 5 min to YCAT (Yokohama Station) and the limousine bus, 800 yen, about 40 min to T3. Be inside the terminal by 1:25.", link: "https://maps.google.com/?q=Haneda+Airport+Terminal+3" },
      { time: "1:25p", title: "At Haneda", detail: "Three hours before 4:25. Eat there if the morning was a miss.", link: "https://maps.google.com/?q=Haneda+Airport+food" },
      { time: "4:25p", title: "HND to ATL \u00b7 DL 294", detail: "Lands Atlanta 3:50p. Then ATL 7:05p to CLT 8:18p on DL 2813.", link: "https://maps.google.com/?q=Hartsfield-Jackson+Atlanta+Airport" }
    ],
    options: [
      { name: "Straight to Haneda", effort: "Safest", timeNeeded: "Leave as soon as bags are in hand", items: ["Best if deboard runs late or bags are heavy. Airport food is the lunch."] },
      { name: "Stay in the terminal", effort: "Zero walk", timeNeeded: "20\u201340 min", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal", items: [{ name: "Osanbashi rooftop", note: "Wooden deck on top of the terminal.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+rooftop" }, { name: "Terminal 2F shops / cafe", note: "Souvenirs and a coffee without leaving the building.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal+shops" }] },
      { name: "Yamashita Park + Red Brick \u2014 7 to 10 min", effort: "Closest walk", timeNeeded: "Until 12:00", link: "https://maps.google.com/?q=Yamashita+Park+Yokohama", items: [{ name: "Yamashita Park", note: "600 m, about 7 minutes.", link: "https://maps.google.com/?q=Yamashita+Park+Yokohama" }, { name: "Red Brick Warehouse", note: "800 m, about 10 minutes. Shops about 10:00.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse" }] },
      { name: "Chinatown \u2014 12 min walk", effort: "Food you skipped", timeNeeded: "Until 12:00", link: "https://maps.google.com/?q=Yokohama+Chinatown", items: [{ name: "Yokohama Chinatown", note: "Walk-and-eat only. Pork bun, wonton, egg tart.", link: "https://maps.google.com/?q=Yokohama+Chinatown" }, { name: "Kiyoken shumai", note: "Yokohama local box. Buy to go.", link: "https://maps.google.com/?q=Kiyoken+Yokohama+Chinatown" }] },
      { name: "Motomachi \u2014 16 min walk", effort: "Shopping you skipped", timeNeeded: "Until 12:00", link: "https://maps.google.com/?q=Motomachi+Shopping+Street+Yokohama", items: [{ name: "Motomachi-dori", note: "1.6 km. Leather, antiques, boutiques, tea.", link: "https://maps.google.com/?q=Motomachi-dori+Yokohama" }] }
    ],
    food: [
      { name: "Ship breakfast", note: "Eat before your call group if breakfast is still open." },
      { name: "Osanbashi cafe", note: "If you never leave the terminal.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" },
      { name: "Chinatown pork bun / wonton", note: "12-minute walk.", link: "https://maps.google.com/?q=Yokohama+Chinatown" },
      { name: "Kiyoken shumai", note: "Yokohama don't-miss box.", link: "https://maps.google.com/?q=Kiyoken+shumai+Yokohama" },
      { name: "Red Brick snack or coffee", note: "10-minute walk. Shops about 10:00.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse+food" },
      { name: "Haneda ramen or tonkatsu sando", note: "If you skip the walk.", link: "https://maps.google.com/?q=Haneda+Airport+ramen" }
    ],
    logistics: [
      "Osanbashi International Passenger Terminal. Dock 6:30a. Off ship about 8:00\u20139:30. Leave by 12:00.",
      "Be at Haneda by 1:25. HND 4:25p DL 294 to ATL 3:50p. ATL 7:05p DL 2813 to CLT 8:18p.",
      "Walk times from the terminal door: rooftop upstairs, Yamashita Park 7 min, Red Brick 10 min, Chinatown 12 min, Motomachi 16 min.",
      "One walk only. Bags with you. Confirm the pier the night before."
    ]
  }
];
