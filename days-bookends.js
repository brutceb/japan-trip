window.ARRIVAL_DAYS = [
  {
    id: "oct-14",
    date: "Oct 14",
    weekday: "Wed",
    kind: "Fly",
    port: "CLT \u2192 DTW \u2192 Haneda",
    summary: "CLT 9:35a DL 1639 to DTW 11:31a. DTW 1:45p DL 275 overnight. Land Haneda Thu 4:15p. Vague travel day only.",
    hours: "9:35a start",
    stay: "In the air",
    map: "https://maps.google.com/?q=Charlotte+Douglas+Airport",
    plan: [
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
      { time: "5:30\u20137:15", title: "Airport to hotel", detail: "Pick one. Train: Keikyu to Shinagawa then Yamanote to Shinjuku West, about 40\u201355 min plus a 9-minute walk. Limousine bus: about 50\u201370 min, no transfer, some runs stop at the Hyatt. Taxi: about 30 min, about 8,000 to 12,000 yen. Evening rush 5:00\u20137:30. Bags are easier on the bus or a taxi.", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit" },
      { time: "6:30\u20137:45", title: "Walk in and check in", detail: "Hyatt check-in from 2:00p so the room is ready. 9 minutes from Shinjuku West Exit, or Tochomae Exit A7 about 1 minute under the building. Shower. Bags down. Friday still leaves at 7:40.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "7:45+", title: "Vague night near the hotel", detail: "Pick one option below. Do not lock a reservation. Keep it close and short.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" }
    ],
    options: [
      {
        name: "Omoide Yokocho",
        effort: "Closest interesting",
        timeNeeded: "30\u201345 min",
        link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku",
        items: ["West Exit tracks. Yakitori, beer, standing. Cash. One stall and stop."]
      },
      {
        name: "Shinjuku West shopping",
        effort: "Indoor",
        timeNeeded: "30\u201360 min",
        link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku",
        items: [
          { name: "Odakyu / Keio basement", note: "Food floor. Bento, soba, croquette, sweets to take upstairs.", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement" },
          { name: "Bic Camera Shinjuku West", note: "First look only. Sunday already has a Bic.", link: "https://maps.google.com/?q=Bic+Camera+Shinjuku+West" },
          { name: "Uniqlo West Exit", note: "Only if you need a layer.", link: "https://maps.google.com/?q=Uniqlo+Shinjuku+West" }
        ]
      },
      {
        name: "Stay on the Hyatt block",
        effort: "Lowest",
        timeNeeded: "Whenever",
        link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku",
        items: [
          { name: "7-Eleven in the hotel", note: "Ground floor. Onigiri, sandwiches, drinks. Open 24 hours.", link: "https://maps.google.com/?q=7-Eleven+Hyatt+Regency+Tokyo" },
          { name: "Crossroads Kitchen", note: "Hotel buffet / restaurant. Dinner 5:30\u201310:00.", link: "https://maps.google.com/?q=Crossroads+Kitchen+Hyatt+Regency+Tokyo" },
          { name: "Jade Garden or Nadaman", note: "Hotel Chinese or Japanese if you want to sit down and stay inside.", link: "https://maps.google.com/?q=Jade+Garden+Hyatt+Regency+Tokyo" }
        ]
      }
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
      "Friends landed Narita Oct 7. Friends fly Oct 29. Friday starts at 7:40."
    ]
  }
];

window.EMBARK_DAYS = [
  {
    id: "oct-19",
    date: "Oct 19",
    weekday: "Mon",
    kind: "Embark",
    port: "Yokohama \u2014 board Diamond Princess",
    summary: "Leave the Hyatt in the morning. Board mid-morning. Ship leaves 3:00 PM.",
    hours: "Board morning \u00b7 sail 15:00",
    stay: "Diamond Princess",
    map: "https://maps.google.com/?q=Yokohama+cruise+terminal",
    plan: [
      { time: "Morning", title: "Leave the Hyatt", detail: "Pack passports and boarding papers the night of Oct 18. Confirm the exact pier the day before.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Mid-morning", title: "Yokohama cruise terminal", detail: "Pier still to confirm. Allow extra time for traffic and check-in lines.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "On board", title: "Find the cabin, eat on the ship", detail: "Lunch on board is the easy move. No need for a Yokohama restaurant.", link: "https://maps.google.com/?q=Diamond+Princess+Yokohama" },
      { time: "3:00 PM", title: "Ship sails", detail: "Be on board well before 3:00. All-aboard is earlier than sail-away.", link: "https://maps.google.com/?q=Yokohama+port" }
    ],
    options: [
      {
        name: "Eat on the ship",
        effort: "Default",
        timeNeeded: "After check-in",
        items: ["Buffet or the first assigned restaurant."]
      },
      {
        name: "Shinjuku station bite before the transfer",
        effort: "If you leave late morning",
        timeNeeded: "15 min",
        link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit",
        items: ["Onigiri or a bakery bag from Lumine / Odakyu. Eat on the way."]
      }
    ],
    food: [
      { name: "Ship lunch", note: "First meal on board. Do this unless you already ate.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Shinjuku bakery / onigiri", note: "Only as a bridge from the Hyatt to the pier.", link: "https://maps.google.com/?q=Lumine+Shinjuku" }
    ],
    logistics: [
      "Confirm the exact Yokohama pier the day before.",
      "Ship departs 3:00 PM. All-aboard is earlier.",
      "Pack ship-day clothes Oct 18."
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
    plan: [
      { time: "All day", title: "At sea", detail: "Nagasaki is tomorrow, ship in at 10:00. Use today for rest, laundry, and the first formal or anytime dining slot." }
    ],
    options: [
      { name: "Ship day as written", effort: "Low", timeNeeded: "All day", items: ["Eat on board", "Do not plan a port"] }
    ],
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
    options: [
      { name: "Deck for the straits", effort: "Low", timeNeeded: "8:00\u201310:00", items: ["Coffee on an open deck", "Then back inside"] }
    ],
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
    port: "Yokohama \u2014 you fly 4:25",
    summary: "Dock 6:30 AM. Off the ship 8:00\u20139:30. Loose morning in Yokohama if time. Be at the airport by 1:25. Flight 4:25. Friends stay until the 29th.",
    hours: "Dock 6:30 \u00b7 airport 1:25 \u00b7 flight 4:25",
    stay: "In the air",
    map: "https://maps.google.com/?q=Yokohama+cruise+terminal",
    plan: [
      { time: "6:30 AM", title: "Ship docks Yokohama", detail: "Stay seated until your group is called. Bags in the terminal hall.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "About 8:00\u20139:30", title: "Off the ship", detail: "Immigration and bag pickup. Time depends on the call group.", link: "https://maps.google.com/?q=Yokohama+cruise+terminal" },
      { time: "9:30\u201312:00", title: "Loose morning \u2014 only if you are off early", detail: "Do not lock a plan. Bags with you. Pick one idea below or go straight to the airport.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse" },
      { time: "By 12:00", title: "Leave for the airport", detail: "Hard edge. Be inside the terminal by 1:25. Flight 4:25.", link: "https://maps.google.com/?q=Haneda+Airport" },
      { time: "1:25 PM", title: "At the airport", detail: "Three hours before 4:25. Eat there if the morning was a miss.", link: "https://maps.google.com/?q=Haneda+Airport+food" },
      { time: "4:25 PM", title: "Your flight", detail: "Times only. Friends fly tomorrow, the 29th." }
    ],
    options: [
      {
        name: "Straight to the airport",
        effort: "Safest",
        timeNeeded: "Leave as soon as bags are in hand",
        items: ["Best if deboard runs late or bags are heavy. Airport food is the lunch."]
      },
      {
        name: "Yokohama waterfront if you are off by 9:30",
        effort: "One zone only",
        timeNeeded: "Until 12:00",
        link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse",
        items: [
          { name: "Red Brick Warehouse", note: "Shops and a snack. Close if you dock at Osanbashi.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse" },
          { name: "Yokohama Chinatown", note: "Pork bun or fried wonton to walk with. Do not sit for a long lunch.", link: "https://maps.google.com/?q=Yokohama+Chinatown" },
          { name: "Motomachi / Bashamichi", note: "A few shops if you want one last street.", link: "https://maps.google.com/?q=Motomachi+Yokohama" }
        ]
      }
    ],
    food: [
      { name: "Ship breakfast", note: "Eat before your call group if breakfast is still open." },
      { name: "Yokohama Chinatown pork bun", note: "Walk-and-eat. Only if you have the loose morning.", link: "https://maps.google.com/?q=Yokohama+Chinatown+pork+bun" },
      { name: "Shumai or a brick-warehouse snack", note: "Yokohama local bite.", link: "https://maps.google.com/?q=Yokohama+Red+Brick+Warehouse+food" },
      { name: "Airport ramen or tonkatsu sando", note: "The reliable lunch if you skip Yokohama.", link: "https://maps.google.com/?q=Haneda+Airport+ramen" }
    ],
    logistics: [
      "You fly Oct 28 at 4:25. Be at the airport by 1:25.",
      "Leave Yokohama by 12:00 even if the morning was short.",
      "Friends fly Oct 29. No Oct 29 on this itinerary.",
      "Confirm the exact Yokohama pier the night before."
    ]
  }
];
