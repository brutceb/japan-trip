window.TRIP = {
  title: "Japan",
  subtitle: "Days & ports",
  travelers: "Trotty & Pam",
  season: "October 2026",
  tagline: "Tap a day for the timed plan. Place names open Google Maps. Food lists the local don't-miss bites.",
  overview: [
    { label: "You land", value: "Oct 15 \u00b7 4:15" },
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
    { city: "Tokyo", name: "Hyatt Regency Tokyo, Nishi-Shinjuku", nights: "Oct 15\u201319", note: "You arrive Oct 15. Walk to Shinjuku West Exit. Pack ship-day clothes the night of Oct 18. Checkout 11:00 Oct 19.", link: "https://maps.google.com/?q=Hyatt+Regency+Tokyo+Nishi-Shinjuku" },
    { city: "Cruise", name: "Diamond Princess", nights: "Oct 19\u201328", note: "Osanbashi check-in 12:00\u201314:00. All-aboard 14:00. Sail 15:00 Oct 19. Dock 6:30 AM Oct 28.", link: "https://maps.google.com/?q=Osanbashi+Yokohama+International+Passenger+Terminal" }
  ],

  transport: [
    { when: "Oct 14", what: "CLT 9:35a DL 1639 \u2192 DTW 11:31a \u00b7 DTW 1:45p DL 275 \u2192 HND", detail: "Layover about 2h 14m. Lands Thursday 4:15p." },
    { when: "Oct 15", what: "HND 4:15p \u2192 Hyatt", detail: "Out of airport 5:15\u20135:45. Train 40\u201355 min + 9-min walk, bus 50\u201370 min, or taxi ~30 min. Check in about 6:30\u20137:45." },
    { when: "Oct 16", what: "Yamanote + taxi/Ginza + Tobu Skytree Line", detail: "Shinjuku to Ueno Park Exit. Taxi or Ginza Line to RAGTIME at 10:00. One-stop Tobu to Skytree." },
    { when: "Oct 17", what: "JR + Tokyo Monorail + Yamanote", detail: "Shinjuku to Hamamatsucho to Oikeibajo-mae, then Harajuku Takeshita Exit." },
    { when: "Oct 18", what: "JR Yamanote", detail: "Shinjuku East to Shibuya and back." },
    { when: "Oct 19", what: "Hyatt to Osanbashi \u00b7 check-in 12:00\u201314:00 \u00b7 sail 15:00", detail: "Leave hotel by 11:15. Recommended at the terminal 13:00. Official latest / all-aboard 14:00." },
    { when: "Oct 25", what: "Private sedan from Aburatsu", detail: "Port pickup 8:30. Back about 1:45." },
    { when: "Oct 28", what: "HND 4:25p DL 294 \u2192 ATL 3:50p \u00b7 ATL 7:05p DL 2813 \u2192 CLT 8:18p", detail: "Dock 6:30a. Off ship 8:00\u20139:30. Airport by 1:25." }
  ],

  notes: [
    "Place names in the plan and food lists open Google Maps.",
    "Book-these is only ramen class (Sunday 11:00) and Shibuya Sky (Sunday 16:20).",
    "Friday: RAGTIME at 10:00. Do not walk from Ameyoko. Kimono after chopsticks, temple after dark.",
    "Saturday: confirm Oi flea on trx.jp. If cancelled, UNU market then the same lunch.",
    "Sunday dinner is pick-one. Do not lock Maru Bengara.",
    "Tokushima is a Monday. Inotani is closed.",
    "Shimizu still needs a walking plan. Ship there 13:00\u201319:00.",
    "You leave CLT Oct 14 at 9:35a on DL 1639, then DTW 1:45p on DL 275. Land Haneda Oct 15 at 4:15p. You fly Oct 28: HND 4:25p DL 294 to ATL, then ATL 7:05p DL 2813 to CLT 8:18p. Be at Haneda by 1:25.",
    "Sea days: Oct 20 full sea, Oct 23 Kanmon Straits 8:00\u201310:00 on deck.",
    "Oct 19: Princess check-in about 12:00. Recommended at Osanbashi by 13:00. Official all-aboard 14:00. Sail 15:00."
  ]
};
