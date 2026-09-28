window.ARRIVAL_DAYS = [
  {
    id: "oct-07",
    date: "Oct 7",
    weekday: "Wed",
    kind: "Arrive",
    port: "Narita landing",
    summary: "Land 4:45 PM. Shuttle to Hotel Nikko Narita. Quick dinner. Sleep.",
    hours: "4:45 PM landing",
    stay: "Hotel Nikko Narita",
    map: "https://maps.google.com/?q=Hotel+Nikko+Narita",
    plan: [
      { time: "4:45 PM", title: "Land Narita", detail: "Immigration and bags. Plan on 60-90 minutes. No Tokyo dinner plan tonight.", link: "https://maps.google.com/?q=Narita+Airport+Terminal" },
      { time: "About 6:00-6:30", title: "Out of the terminal", detail: "Hotel Nikko Narita free airport shuttle. Follow hotel shuttle signs. Ride about 15-20 minutes.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita+shuttle" },
      { time: "6:30-7:00", title: "Hotel Nikko Narita", detail: "500 Tokko, Narita. Check in. Shower. Airport night, not a city night.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita+500+Tokko" },
      { time: "7:00-8:30", title: "Quick dinner", detail: "Eat at the hotel or one stop next door. Do not go into Narita town unless you have leftover energy.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita+restaurants" }
    ],
    options: [
      { name: "Eat at the hotel", effort: "Easiest", timeNeeded: "Downstairs", link: "https://maps.google.com/?q=Hotel+Nikko+Narita+restaurants", items: ["Hotel Japanese restaurant or the cafe. Walk downstairs."] },
      { name: "Airport food before the shuttle", effort: "If starving at baggage", timeNeeded: "15-25 min", link: "https://maps.google.com/?q=Narita+Airport+Terminal+2+food", items: ["Terminal food court after customs. Ramen, tonkatsu sandwich, or onigiri. Then shuttle."] }
    ],
    food: [
      { name: "Hotel Nikko Narita restaurant", note: "Closest sit-down after a long haul.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita+restaurants" },
      { name: "Hotel cafe / lobby meal", note: "Lighter and faster than the dining room.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita" },
      { name: "7-Eleven or Lawson by the hotel", note: "Onigiri, egg sandwich, milk.", link: "https://maps.google.com/?q=7-Eleven+Hotel+Nikko+Narita" },
      { name: "Narita Airport ramen / tonkatsu sando", note: "Only if you eat before the shuttle.", link: "https://maps.google.com/?q=Narita+Airport+ramen" }
    ],
    logistics: ["Landing 4:45 PM. No city sightseeing tonight.", "Free shuttle from the terminal to Hotel Nikko Narita."]
  },
  {
    id: "oct-15",
    date: "Oct 15",
    weekday: "Thu",
    kind: "Arrive",
    port: "Tokyo hotel night",
    summary: "Arrive Tokyo from the north. Check in. Quick dinner near the Hyatt. Early Friday.",
    hours: "Evening",
    stay: "Hyatt Regency Tokyo, Nishi-Shinjuku",
    map: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku",
    plan: [
      { time: "Afternoon / evening", title: "Arrive Tokyo", detail: "Train times from Sapporo are still TBD. Go straight to the Hyatt.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Check-in", title: "Hyatt Regency Tokyo", detail: "Nishi-Shinjuku. Walk to Shinjuku West Exit from here all weekend.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
      { time: "Dinner", title: "Quick dinner near the hotel", detail: "Do not start a long neighborhood. Friday leaves at 7:40.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" }
    ],
    options: [
      { name: "Omoide Yokocho", effort: "Closest interesting", timeNeeded: "30-45 min", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku", items: ["West Exit tracks. Yakitori, beer, standing. Cash. One stall and stop."] },
      { name: "Shinjuku station basement", effort: "Indoor", timeNeeded: "20-30 min", link: "https://maps.google.com/?q=Odakyu+Department+Store+Shinjuku+basement", items: ["Odakyu or Keio food floor. Bento, soba, croquette."] }
    ],
    food: [
      { name: "Omoide Yokocho yakitori", note: "Closest don't-miss near the Hyatt.", link: "https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" },
      { name: "Standing soba at Shinjuku West", note: "10 minutes.", link: "https://maps.google.com/?q=Shinjuku+West+Exit+soba" },
      { name: "Yoshinoya / Matsuya", note: "Gyudon if the group is cooked.", link: "https://maps.google.com/?q=Yoshinoya+Nishi-Shinjuku" },
      { name: "Hyatt restaurant or room service", note: "If nobody wants to walk.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" }
    ],
    logistics: ["Sapporo to Tokyo train time still TBD.", "Friday starts at 7:40. Eat close and sleep."]
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
      { time: "Mid-morning", title: "Yokohama cruise terminal", detail: "Pier still to confirm. Allow extra time for traffic and check-in lines.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "On board", title: "Find the cabin, eat on the ship", detail: "Lunch on board is the easy move.", link: "https://maps.google.com/?q=Diamond+Princess+Yokohama" },
      { time: "3:00 PM", title: "Ship sails", detail: "Be on board well before 3:00. All-aboard is earlier than sail-away.", link: "https://maps.google.com/?q=Yokohama+port" }
    ],
    options: [
      { name: "Eat on the ship", effort: "Default", timeNeeded: "After check-in", items: ["Buffet or the first assigned restaurant."] },
      { name: "Shinjuku station bite before the transfer", effort: "If you leave late morning", timeNeeded: "15 min", link: "https://maps.google.com/?q=Shinjuku+Station+West+Exit", items: ["Onigiri or a bakery bag from Lumine / Odakyu."] }
    ],
    food: [
      { name: "Ship lunch", note: "First meal on board.", link: "https://maps.google.com/?q=Diamond+Princess" },
      { name: "Shinjuku bakery / onigiri", note: "Bridge from the Hyatt to the pier.", link: "https://maps.google.com/?q=Lumine+Shinjuku" }
    ],
    logistics: ["Confirm the exact Yokohama pier the day before.", "Ship departs 3:00 PM. All-aboard is earlier."]
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
      { time: "All day", title: "At sea", detail: "Nagasaki is tomorrow, ship in at 10:00. Rest, laundry, first dining slot." }
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
    summary: "Stay on the ship. Straits passage about 8:00-10:00. Hiroshima tomorrow 7:00.",
    hours: "8:00 – 10:00 on deck",
    stay: "Ship",
    map: "https://maps.google.com/?q=Kanmon+Straits",
    plan: [
      { time: "8:00-10:00", title: "Kanmon Straits", detail: "Scenic cruising. Deck if the weather is decent. Not a port. Nobody gets off.", link: "https://maps.google.com/?q=Kanmon+Straits+Kanmonkyo" },
      { time: "Rest of day", title: "At sea toward Hiroshima", detail: "Hiroshima is 7:00 tomorrow. Early night." }
    ],
    options: [
      { name: "Deck for the straits", effort: "Low", timeNeeded: "8:00-10:00", items: ["Coffee on an open deck", "Then back inside"] }
    ],
    food: [
      { name: "Ship breakfast on deck", note: "Coffee while the straits go by." },
      { name: "Ship lunch and dinner", note: "No local stall today." }
    ],
    logistics: ["Not a port day.", "Hiroshima tomorrow, ship 7:00-17:00."]
  }
];

window.END_DAYS = [
  {
    id: "oct-28",
    date: "Oct 28",
    weekday: "Wed",
    kind: "Deboard",
    port: "Yokohama — off the ship",
    summary: "Dock 6:30 AM. Deboard after clearance. Hotel in the city. Flight is tomorrow.",
    hours: "Dock 6:30 AM",
    stay: "City hotel night",
    map: "https://maps.google.com/?q=Yokohama+cruise+terminal",
    plan: [
      { time: "6:30 AM", title: "Ship docks Yokohama", detail: "Stay seated until your group is called. Bags in the terminal hall.", link: "https://maps.google.com/?q=Yokohama+Osanbashi+Pier" },
      { time: "About 8:00-9:30", title: "Off the ship", detail: "Immigration and bag pickup. Time depends on the call group.", link: "https://maps.google.com/?q=Yokohama+cruise+terminal" },
      { time: "Late morning", title: "Into Tokyo", detail: "Transfer to the city hotel. Rest. Do not try an airport run today.", link: "https://maps.google.com/?q=AC+Hotel+Tokyo+Ginza" },
      { time: "Evening", title: "Easy dinner near the hotel", detail: "Flight is tomorrow afternoon. Keep it close.", link: "https://maps.google.com/?q=Ginza+station+food" }
    ],
    options: [
      { name: "Ginza / hotel-area dinner", effort: "Close", timeNeeded: "45 min", link: "https://maps.google.com/?q=Ginza+Yoshinoya", items: ["Depachika bento, gyudon, or conveyor sushi."] }
    ],
    food: [
      { name: "Ship breakfast", note: "Eat before your call group if breakfast is still open." },
      { name: "Ginza depachika", note: "Basement food halls. Fast.", link: "https://maps.google.com/?q=Ginza+Mitsukoshi+depachika" },
      { name: "Gyudon or conveyor sushi", note: "Close to the hotel.", link: "https://maps.google.com/?q=Ginza+kaiten+sushi" }
    ],
    logistics: ["Dock 6:30 AM. Flight is tomorrow, not today.", "Confirm the exact Yokohama pier the night before."]
  },
  {
    id: "oct-29",
    date: "Oct 29",
    weekday: "Thu",
    kind: "Depart",
    port: "Narita — fly out",
    summary: "Leave the hotel at noon. Be at Narita by 2:00 PM. Flight 5:10 PM.",
    hours: "Hotel noon · airport 2:00 · flight 5:10",
    stay: "In the air",
    map: "https://maps.google.com/?q=Narita+Airport",
    plan: [
      { time: "12:00 noon", title: "Leave the hotel", detail: "Bags ready. Train or taxi to Narita. Do not cut this shorter.", link: "https://maps.google.com/?q=Narita+Express" },
      { time: "2:00 PM", title: "At Narita", detail: "Be inside the terminal by 2:00. Three hours before the 5:10 PM flight.", link: "https://maps.google.com/?q=Narita+Airport" },
      { time: "5:10 PM", title: "Flight", detail: "Times only. No check-in notes here." }
    ],
    options: [
      { name: "Narita Express or Keisei", effort: "Train", timeNeeded: "About 1 hour from central Tokyo", link: "https://maps.google.com/?q=Narita+Express", items: ["Leave the hotel at noon even if the train is fast."] },
      { name: "Taxi or hotel car", effort: "Door to door", timeNeeded: "60-90 min with traffic", items: ["Still leave at noon."] }
    ],
    food: [
      { name: "Hotel breakfast", note: "Eat before you leave." },
      { name: "Narita terminal meal", note: "Backup if you skipped breakfast.", link: "https://maps.google.com/?q=Narita+Airport+food" }
    ],
    logistics: ["Leave hotel 12:00 noon.", "Be at Narita by 2:00 PM.", "Flight 5:10 PM."]
  }
];
