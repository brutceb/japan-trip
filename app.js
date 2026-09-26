(function () {
  const trip = window.TRIP || {};

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  const escapeHtml = (value) =>
    String(value || "").replace(/[&<>"']/g, (ch) => {
      if (ch === "&") return "\u0026amp;";
      if (ch === "<") return "\u0026lt;";
      if (ch === ">") return "\u0026gt;";
      if (ch === '"') return "\u0026quot;";
      return "\u0026#39;";
    });

  document.title = (trip.title || "Japan") + " itinerary";
  setText("title", trip.title);
  setText("nav-title", trip.title);
  setText("subtitle", trip.subtitle);
  setText("tagline", trip.tagline);
  setText("season", trip.season);
  setText("travelers", trip.travelers);

  const overview = document.getElementById("overview");
  (trip.overview || []).forEach((item) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<b>${escapeHtml(item.value)}</b><span>${escapeHtml(item.label)}</span>`;
    overview.appendChild(div);
  });

  const bookList = document.getElementById("book-list");
  const statusLabel = { open: "Book now", booked: "Booked", optional: "Optional" };
  (trip.bookings || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "book-item is-" + (item.status || "open");
    const link = item.link
      ? `<a class="chip-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">${escapeHtml(item.linkLabel || "Open link")}</a>`
      : "";
    card.innerHTML = `
      <div class="book-status">${escapeHtml(statusLabel[item.status] || item.status)}</div>
      <div class="day-date">${escapeHtml(item.when)}</div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="muted">${escapeHtml(item.detail)}</p>
      ${link}
    `;
    bookList.appendChild(card);
  });

  const listFrom = (items) =>
    (items || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

  const dayList = document.getElementById("day-list");
  (trip.days || []).forEach((day, index) => {
    const id = day.id || "day-" + (index + 1);
    const article = document.createElement("article");
    article.className = "day";
    article.id = id;

    const map = day.map
      ? `<a class="chip-link" href="${escapeHtml(day.map)}" target="_blank" rel="noopener">Map</a>`
      : "";

    const plan = (day.plan || [])
      .map(
        (block) => `<li>
          <div class="time">${escapeHtml(block.time)}</div>
          <div>
            <div class="place">${escapeHtml(block.title)}</div>
            ${block.detail ? `<p class="note">${escapeHtml(block.detail)}</p>` : ""}
          </div>
        </li>`
      )
      .join("");

    const options = (day.options || [])
      .map(
        (option) => `<article class="option">
          <div class="option-top">
            <h4>${escapeHtml(option.name)}</h4>
            <div class="chips">
              ${option.effort ? `<span>${escapeHtml(option.effort)}</span>` : ""}
              ${option.timeNeeded ? `<span>${escapeHtml(option.timeNeeded)}</span>` : ""}
            </div>
          </div>
          <ul class="list tight">${listFrom(option.items)}</ul>
        </article>`
      )
      .join("");

    article.innerHTML = `
      <button class="day-toggle" type="button" aria-expanded="false" aria-controls="${id}-panel">
        <div class="day-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="day-summary">
          <div class="day-date">${escapeHtml(day.date)} ${escapeHtml(day.weekday)}</div>
          <h3>${escapeHtml(day.port || day.title || "Day")}</h3>
          <p class="one-liner">${escapeHtml(day.summary)}</p>
        </div>
        <div class="day-side">
          ${day.kind ? `<span class="kind">${escapeHtml(day.kind)}</span>` : ""}
          ${day.hours ? `<span class="hours">${escapeHtml(day.hours)}</span>` : ""}
          <span class="chevron" aria-hidden="true"></span>
        </div>
      </button>
      <div class="day-panel" id="${id}-panel" hidden>
        <div class="panel-meta">
          ${day.stay ? `<span>Stay · ${escapeHtml(day.stay)}</span>` : ""}
          ${map}
        </div>
        <div class="panel-grid">
          <div>
            <h4>Plan</h4>
            <ul class="blocks">${plan || "<li class='note'>Add a plan in itinerary.js</li>"}</ul>
          </div>
          <div>
            <h4>Options</h4>
            <div class="option-list">${options || "<p class='muted'>Add alternate options.</p>"}</div>
          </div>
        </div>
        <div class="panel-grid small">
          <div>
            <h4>Food</h4>
            <ul class="list tight">${listFrom(day.food)}</ul>
          </div>
          <div>
            <h4>Logistics</h4>
            <ul class="list tight">${listFrom(day.logistics)}</ul>
          </div>
        </div>
      </div>
    `;
    dayList.appendChild(article);
  });

  const setOpen = (article, open) => {
    const button = article.querySelector(".day-toggle");
    const panel = article.querySelector(".day-panel");
    article.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  };

  dayList.addEventListener("click", (event) => {
    const button = event.target.closest(".day-toggle");
    if (!button) return;
    const article = button.closest(".day");
    setOpen(article, !article.classList.contains("is-open"));
  });

  document.getElementById("expand-all").addEventListener("click", () => {
    dayList.querySelectorAll(".day").forEach((day) => setOpen(day, true));
  });
  document.getElementById("collapse-all").addEventListener("click", () => {
    dayList.querySelectorAll(".day").forEach((day) => setOpen(day, false));
  });

  const hash = window.location.hash.slice(1);
  if (hash) {
    const match = document.getElementById(hash);
    if (match && match.classList.contains("day")) {
      setOpen(match, true);
      match.scrollIntoView({ block: "start" });
    }
  }

  const lodging = document.getElementById("lodging");
  (trip.lodging || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="day-date">${escapeHtml(item.city)}</div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="muted">${escapeHtml(item.nights)}</p>
      <p class="muted">${escapeHtml(item.note)}</p>
    `;
    lodging.appendChild(card);
  });

  const transport = document.getElementById("transport");
  (trip.transport || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="day-date">${escapeHtml(item.when)}</div>
      <h3>${escapeHtml(item.what)}</h3>
      <p class="muted">${escapeHtml(item.detail)}</p>
    `;
    transport.appendChild(card);
  });

  const notes = document.getElementById("notes-list");
  (trip.notes || []).forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    notes.appendChild(li);
  });
})();
