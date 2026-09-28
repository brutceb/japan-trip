window.TRIP = {
  title: "Japan",
  subtitle: "Days & ports",
  travelers: "Trotty & Pam",
  season: "October 2026",
  tagline: "Tap a day for the timed plan. Place names open Google Maps. Food lists the local don't-miss bites.",
  overview: [
    { label: "Tokyo days", value: "3" },
    { label: "Ports", value: "6" },
    { label: "Start", value: "Oct 16" },
    { label: "Shimizu", value: "TBD" }
  ],
  days: (window.TOKYO_DAYS || []).concat(window.PORT_DAYS || []),
  lodging: [
    { city: "Tokyo", name: "Hyatt Regency Tokyo, Nishi-Shinjuku", nights: "Oct 16–19", note: "Walk to Shinjuku West Exit. Pack ship-day clothes the night of Oct 18." },
    { city: "Cruise", name: "Diamond Princess", nights: "From Oct 19", note: "Nagasaki, Busan, Hiroshima, Aburatsu, Tokushima, Shimizu." }
  ],
  transport: [
    { when: "Oct 16", what: "Walk + taxi + Tobu Skytree Line", detail: "Ueno to Ameyoko on foot, taxi to Kappabashi, one-stop train to Skytree." },
    { when: "Oct 17", what: "JR + Tokyo Monorail + Yamanote", detail: "Shinjuku to Hamamatsucho to Oikeibajo-mae, then Harajuku Takeshita Exit." },
    { when: "Oct 18", what: "JR Yamanote", detail: "Shinjuku East to Shibuya and back." },
    { when: "Oct 25", what: "Private sedan from Aburatsu", detail: "Port pickup 8:30. Back about 1:45." }
  ],
  notes: [
    "Place names in the plan and food lists open Google Maps.",
    "Book-these is only ramen class (Sunday 11:00) and Shibuya Sky (Sunday 16:20).",
    "Saturday: confirm Oi flea on trx.jp. If cancelled, UNU market then the same lunch.",
    "Sunday dinner is pick-one. Do not lock Maru Bengara.",
    "Tokushima is a Monday. Inotani is closed.",
    "Shimizu still needs a walking plan."
  ]
};
