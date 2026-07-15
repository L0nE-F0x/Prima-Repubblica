/* Prima Repubblica — masthead dateline + copy-to-clipboard for the contact email.
   Progressive: the HTML ships with sensible fallbacks, so nothing breaks
   if JavaScript is disabled (the address is still shown in full). */

document.addEventListener("DOMContentLoaded", () => {
    setDateline();
    setupCopyEmail();
});

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

/* Copy the segreteria address to the clipboard on click/tap, with a brief
   confirmation, then revert. Lets visitors paste it into their mail app of
   choice instead of forcing a mailto: hand-off. */
function setupCopyEmail() {
    const btn = document.getElementById("copy-email");
    if (!btn) return;

    const email = btn.dataset.email;
    const label = btn.querySelector(".contact-btn-label");
    const idle = label ? label.textContent : "";
    let resetTimer;

    btn.addEventListener("click", async () => {
        const ok = await copyText(email);
        if (label) label.textContent = ok ? "Copiato negli appunti" : "Copia non riuscita";
        btn.classList.toggle("is-copied", ok);

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            if (label) label.textContent = idle;
            btn.classList.remove("is-copied");
        }, 2200);
    });
}

async function copyText(text) {
    // Preferred: async Clipboard API (needs a secure context — https or localhost)
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (err) {
        /* fall through to the legacy path */
    }
    // Fallback: hidden textarea + execCommand for older / non-secure contexts
    try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
    } catch (err) {
        return false;
    }
}
