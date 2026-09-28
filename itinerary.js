window.TRIP = {
  title: "Japan",
  subtitle: "Days & ports",
  travelers: "Trotty & Pam",
  season: "October 2026",
  tagline: "Tap a day for the timed plan. Place names open Google Maps. Food lists the local don't-miss bites.",
  overview: [
    { label: "Land", value: "Oct 7 \u00b7 4:45" },
    { label: "Tokyo days", value: "3" },
    { label: "Ship", value: "Oct 19\u201328" },
    { label: "Fly", value: "Oct 29 \u00b7 5:10" }
  ],
  days: (function () {
    const ports = window.PORT_DAYS || [];
    const byId = {};
    ports.forEach((day) => { byId[day.id] = day; });
    return []
      .concat(window.ARRIVAL_DAYS || [])
      .concat(window.TOKYO_DAYS || [])
      .concat(window.EMBARK_DAYS || [])
      .concat([byId.nagasaki, byId.busan].filter(Boolean))
      .concat(window.KANMON_DAYS || [])
      .concat([byId.hiroshima, byId.aburatsu, byId.tokushima, byId.shimizu].filter(Boolean))
      .concat(window.END_DAYS || []);
  })(),
  lodging: [
    { city: "Narita", name: "Hotel Nikko Narita", nights: "Oct 7", note: "Free airport shuttle. Land 4:45 PM.", link: "https://maps.google.com/?q=Hotel+Nikko+Narita" },
    { city: "Tokyo", name: "Hyatt Regency Tokyo, Nishi-Shinjuku", nights: "Oct 15\u201319", note: "Walk to Shinjuku West Exit. Pack ship-day clothes the night of Oct 18.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
    { city: "Cruise", name: "Diamond Princess", nights: "Oct 19\u201328", note: "Sail 3:00 PM Oct 19. Dock Yokohama 6:30 AM Oct 28.", link: "https://maps.google.com/?q=Yokohama+cruise+terminal" },
    { city: "Tokyo", name: "City hotel after the ship", nights: "Oct 28", note: "Flight is the next afternoon. Keep dinner close." }
  ],

  transport: [
    { when: "Oct 7", what: "Land Narita 4:45 PM", detail: "Shuttle to Hotel Nikko Narita. No city plan tonight." },
    { when: "Oct 16", what: "Yamanote + taxi/Ginza + Tobu Skytree Line", detail: "Shinjuku to Ueno Park Exit. Taxi or Ginza Line to RAGTIME at 10:00. One-stop Tobu to Skytree." },
    { when: "Oct 17", what: "JR + Tokyo Monorail + Yamanote", detail: "Shinjuku to Hamamatsucho to Oikeibajo-mae, then Harajuku Takeshita Exit." },
    { when: "Oct 18", what: "JR Yamanote", detail: "Shinjuku East to Shibuya and back." },
    { when: "Oct 19", what: "Hyatt to Yokohama cruise terminal", detail: "Board mid-morning. Ship sails 3:00 PM. Confirm the pier." },
    { when: "Oct 25", what: "Private sedan from Aburatsu", detail: "Port pickup 8:30. Back about 1:45." },
    { when: "Oct 28", what: "Dock Yokohama 6:30 AM", detail: "Deboard after clearance. City hotel. Flight is tomorrow." },
    { when: "Oct 29", what: "Hotel noon \u2192 Narita 2:00 PM \u2192 flight 5:10 PM", detail: "Times only." }
  ],

  notes: [
    "Place names in the plan and food lists open Google Maps.",
    "Book-these is only ramen class (Sunday 11:00) and Shibuya Sky (Sunday 16:20).",
    "Friday: RAGTIME at 10:00. Do not walk from Ameyoko. Kimono after chopsticks, temple after dark.",
    "Saturday: confirm Oi flea on trx.jp. If cancelled, UNU market then the same lunch.",
    "Sunday dinner is pick-one. Do not lock Maru Bengara.",
    "Tokushima is a Monday. Inotani is closed.",
    "Shimizu still needs a walking plan. Ship there 13:00\u201319:00.",
    "Land Oct 7 at 4:45 PM. Fly Oct 29 at 5:10 PM. Be at Narita by 2:00 PM.",
    "Sea days: Oct 20 full sea, Oct 23 Kanmon Straits 8:00\u201310:00 on deck."
  ]
};
