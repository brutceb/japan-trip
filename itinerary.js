window.TRIP = {
  title: "Japan",
  subtitle: "Days & ports",
  travelers: "Trotty & Pam",
  season: "October 2026",
  tagline: "Tap a day for the timed plan. Place names open Google Maps. Food lists the local don't-miss bites.",
  overview: [
    { label: "You arrive", value: "Oct 15" },
    { label: "Tokyo days", value: "3" },
    { label: "Ship", value: "Oct 19\u201328" },
    { label: "You fly", value: "Oct 28 \u00b7 4:25" }
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
    { city: "Tokyo", name: "Hyatt Regency Tokyo, Nishi-Shinjuku", nights: "Oct 15\u201319", note: "You arrive Oct 15. Walk to Shinjuku West Exit. Pack ship-day clothes the night of Oct 18.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
    { city: "Cruise", name: "Diamond Princess", nights: "Oct 19\u201328", note: "Sail 3:00 PM Oct 19. Dock Yokohama 6:30 AM Oct 28. You fly that afternoon.", link: "https://maps.google.com/?q=Yokohama+cruise+terminal" }
  ],

  transport: [
    { when: "Oct 15", what: "You arrive Tokyo", detail: "Check in at the Hyatt. Shopping and dinner at your discretion. Friday is 7:40." },
    { when: "Oct 16", what: "Yamanote + taxi/Ginza + Tobu Skytree Line", detail: "Shinjuku to Ueno Park Exit. Taxi or Ginza Line to RAGTIME at 10:00. One-stop Tobu to Skytree." },
    { when: "Oct 17", what: "JR + Tokyo Monorail + Yamanote", detail: "Shinjuku to Hamamatsucho to Oikeibajo-mae, then Harajuku Takeshita Exit." },
    { when: "Oct 18", what: "JR Yamanote", detail: "Shinjuku East to Shibuya and back." },
    { when: "Oct 19", what: "Hyatt to Yokohama cruise terminal", detail: "Board mid-morning. Ship sails 3:00 PM. Confirm the pier." },
    { when: "Oct 25", what: "Private sedan from Aburatsu", detail: "Port pickup 8:30. Back about 1:45." },
    { when: "Oct 28", what: "Dock 6:30 AM \u00b7 airport 1:25 \u00b7 flight 4:25", detail: "Friends fly Oct 29." }
  ],

  notes: [
    "Place names in the plan and food lists open Google Maps.",
    "Book-these is only ramen class (Sunday 11:00) and Shibuya Sky (Sunday 16:20).",
    "Friday: RAGTIME at 10:00. Do not walk from Ameyoko. Kimono after chopsticks, temple after dark.",
    "Saturday: confirm Oi flea on trx.jp. If cancelled, UNU market then the same lunch.",
    "Sunday dinner is pick-one. Do not lock Maru Bengara.",
    "Tokushima is a Monday. Inotani is closed.",
    "Shimizu still needs a walking plan. Ship there 13:00\u201319:00.",
    "You arrive Tokyo Oct 15. Friends landed Narita Oct 7. You fly Oct 28 at 4:25. Be at the airport by 1:25. Friends fly Oct 29.",
    "Sea days: Oct 20 full sea, Oct 23 Kanmon Straits 8:00\u201310:00 on deck."
  ]
};
