/* Prima Repubblica — dynamic Italian dateline for the masthead.
   Sets the masthead date (e.g. "Mercoledì 15 Luglio 2026") and the
   footer's copyright year on load. Purely progressive: the HTML ships
   with a sensible fallback, so nothing breaks if JS is disabled. */

document.addEventListener("DOMContentLoaded", setDateline);

function setDateline() {
    const dateEl = document.getElementById("current-date");
    const yearEl = document.getElementById("current-year");

    const giorni = [
        "Domenica", "Lunedì", "Martedì", "Mercoledì",
        "Giovedì", "Venerdì", "Sabato"
    ];

    const mesi = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    const oggi = new Date();

    if (dateEl) {
        const giorno = giorni[oggi.getDay()];
        const numero = oggi.getDate();
        const mese = mesi[oggi.getMonth()];
        const anno = oggi.getFullYear();
        dateEl.textContent = `${giorno} ${numero} ${mese} ${anno}`;
    }

    if (yearEl) {
        yearEl.textContent = oggi.getFullYear();
    }
}
