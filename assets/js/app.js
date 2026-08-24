(function () {
  'use strict';

  const WHATSAPP_NUMBER = '6281222808069';
  const bikes = window.BIKES || [];

  const grid = document.getElementById('bike-grid');
  const filters = document.querySelectorAll('.filter');
  const modal = document.getElementById('booking-modal');
  const modalTitle = document.getElementById('booking-title');
  const modalMeta = document.getElementById('booking-bike-meta');
  const modalBikeInput = document.getElementById('booking-bike-id');
  const form = document.getElementById('booking-form');
  const summary = document.getElementById('booking-summary');
  const startInput = document.getElementById('booking-start');
  const endInput = document.getElementById('booking-end');

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Formatting helpers ----------

  const rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', maximumFractionDigits: 0
  });

  function formatPrice(value) {
    return rupiah.format(value).replace('IDR', 'Rp').replace(/\s+/g, ' ').trim();
  }

  function shortPrice(value) {
    if (value >= 1000000) {
      const m = value / 1000000;
      return (m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)) + 'M';
    }
    return (value / 1000).toFixed(0) + 'K';
  }

  function findBike(id) { return bikes.find(b => b.id === id); }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // ---------- Availability ----------

  const AVAILABILITY = {
    available:   { label: 'Available now', cls: 'is-available', bookable: true },
    limited:     { label: 'Last one',      cls: 'is-limited',   bookable: true },
    unavailable: { label: 'Fully booked',  cls: 'is-booked',    bookable: false }
  };

  function availabilityOf(bike) {
    return AVAILABILITY[bike.status] || AVAILABILITY.available;
  }

  // ---------- Render catalog ----------

  function renderGrid(filter) {
    if (!grid) return;
    grid.innerHTML = '';

    const list = filter && filter !== 'all'
      ? bikes.filter(b => b.category === filter)
      : bikes;

    list.forEach(bike => {
      const avail = availabilityOf(bike);
      const card = document.createElement('article');
      card.className = 'bike-card' + (avail.bookable ? '' : ' is-unavailable');
      card.dataset.category = bike.category;

      const safeName = escapeHtml(bike.name);
      const safeTag = escapeHtml(bike.tagline);
      const badge = bike.badge ? `<span class="bike-badge">${escapeHtml(bike.badge)}</span>` : '';
      const fallbackText = safeName.split(' ').slice(0, 2).join('<br>');

      const cta = avail.bookable
        ? `<button class="btn btn-primary btn-sm" type="button" data-book="${bike.id}">Book now</button>`
        : `<a class="btn btn-ghost btn-sm" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi! Is the ${bike.name} available any time soon?`)}" target="_blank" rel="noopener">Ask for dates</a>`;

      card.innerHTML = `
        <div class="bike-image">
          ${badge}
          <div class="bike-fallback" aria-hidden="true">${fallbackText}</div>
          <img loading="lazy" alt="${safeName}" src="${bike.image}" />
        </div>
        <div class="bike-body">
          <div>
            <h3 class="bike-name">${safeName}</h3>
            <div class="bike-meta">${safeTag}</div>
          </div>
          <p class="bike-availability ${avail.cls}"><span class="dot" aria-hidden="true"></span>${avail.label}</p>
          <div class="bike-price">
            <div class="bike-price-row">
              <span class="label">Per day</span>
              <span class="value">${formatPrice(bike.pricePerDay)}</span>
            </div>
            <div class="bike-price-row">
              <span class="label">Per month</span>
              <span class="value">${formatPrice(bike.pricePerMonth)}</span>
            </div>
          </div>
          <div class="bike-cta">
            <span class="bike-meta">From ${shortPrice(bike.pricePerDay)}/day</span>
            ${cta}
          </div>
        </div>
      `;

      const img = card.querySelector('img');
      const fallback = card.querySelector('.bike-fallback');
      img.addEventListener('error', () => { img.remove(); });
      img.addEventListener('load', () => { fallback.style.opacity = '0'; });

      grid.appendChild(card);
    });
  }

  // ---------- Photo credits (required by the CC licences) ----------

  function renderCredits() {
    const el = document.getElementById('photo-credits');
    if (!el) return;
    const items = bikes.filter(b => b.credit).map(b =>
      `<li><strong>${escapeHtml(b.name)}</strong> — ${escapeHtml(b.credit.title)}, `
      + `${escapeHtml(b.credit.author)}, ${escapeHtml(b.credit.license)}`
      + (b.photoNote ? ` <em>(${escapeHtml(b.photoNote)})</em>` : '')
      + `</li>`
    );
    el.innerHTML = items.join('');
  }

  // ---------- Filters ----------

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderGrid(btn.dataset.filter);
    });
  });

  // ---------- Modal ----------

  let lastFocused = null;

  function toDateInput(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function openBooking(bikeId) {
    const bike = findBike(bikeId);
    if (!bike || !availabilityOf(bike).bookable) return;

    lastFocused = document.activeElement;
    modalBikeInput.value = bike.id;
    modalTitle.textContent = `Reserve the ${bike.name}`;
    modalMeta.textContent = `${bike.tagline} · ${formatPrice(bike.pricePerDay)} / day · ${formatPrice(bike.pricePerMonth)} / month`;

    const today = new Date();
    const tomorrow = new Date(today.getTime() + 86400000);
    startInput.min = toDateInput(today);
    endInput.min = toDateInput(today);
    if (!startInput.value) startInput.value = toDateInput(today);
    if (!endInput.value) endInput.value = toDateInput(tomorrow);

    updateSummary();
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => form.querySelector('input[name="name"]').focus(), 50);
  }

  function closeBooking() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.addEventListener('click', (e) => {
    const bookBtn = e.target.closest('[data-book]');
    if (bookBtn) { e.preventDefault(); openBooking(bookBtn.dataset.book); return; }
    if (e.target.matches('[data-close]')) { e.preventDefault(); closeBooking(); }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeBooking();
    // keep focus inside the dialog while it is open
    if (e.key === 'Tab' && !modal.hidden) {
      const f = modal.querySelectorAll('button, input, select, textarea, a[href]');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // ---------- Summary calculation ----------

  function calcDays() {
    if (!startInput.value || !endInput.value) return 0;
    const s = new Date(startInput.value);
    const e = new Date(endInput.value);
    return Math.max(Math.round((e - s) / 86400000), 0);
  }

  function priceFor(bike, days) {
    if (days >= 28) {
      const months = days / 30;
      return {
        total: Math.round(bike.pricePerMonth * months),
        line: `${formatPrice(bike.pricePerMonth)} × ${months.toFixed(2)} month${months > 1 ? 's' : ''}`
      };
    }
    return {
      total: bike.pricePerDay * days,
      line: `${formatPrice(bike.pricePerDay)} × ${days} day${days > 1 ? 's' : ''}`
    };
  }

  function updateSummary() {
    const bike = findBike(modalBikeInput.value);
    if (!bike) { summary.innerHTML = ''; return; }

    const days = calcDays();
    if (days <= 0) {
      summary.innerHTML = `<span class="muted">Pick pickup and return dates to see the total.</span>`;
      return;
    }

    const { total, line } = priceFor(bike, days);
    summary.innerHTML = `
      <div class="row"><span>${escapeHtml(bike.name)}</span><span class="muted">${days} day${days > 1 ? 's' : ''}</span></div>
      <div class="row"><span class="muted">${line}</span></div>
      <div class="row total"><span>Estimated total</span><span>${formatPrice(total)}</span></div>
    `;
  }

  ['change', 'input'].forEach(evt => {
    startInput.addEventListener(evt, () => {
      if (endInput.value && endInput.value < startInput.value) endInput.value = startInput.value;
      endInput.min = startInput.value;
      updateSummary();
    });
    endInput.addEventListener(evt, updateSummary);
  });

  // ---------- Submit → open WhatsApp ----------

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = Object.fromEntries(new FormData(form).entries());
    const bike = findBike(data.bike);
    if (!bike) return;

    const days = calcDays();
    const { total } = priceFor(bike, days);

    const lines = [
      `Halo Amelia's Bike Rental! I'd like to book a bike.`,
      ``,
      `*Bike:* ${bike.name} (${bike.tagline})`,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*WhatsApp:* ${data.phone}`,
      `*Delivery area:* ${data.area}`,
      `*Pickup:* ${data.start}`,
      `*Return:* ${data.end}  (${days} day${days !== 1 ? 's' : ''})`,
      `*Estimated total:* ${formatPrice(total)}`,
      data.notes ? `\n*Notes:* ${data.notes}` : ''
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    closeBooking();
    form.reset();
  });

  // ---------- Init ----------

  renderGrid('all');
  renderCredits();
})();
