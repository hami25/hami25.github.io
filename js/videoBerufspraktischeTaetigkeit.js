// =========================================================
// Video-Popup (Modal) für "Berufspraktische Tätigkeit"
//
// HTML:
// - Trigger-Link: a[href="#berufspraktische-taetigkeit"]
// - Modal Container: #video-modal
// - Close-Button: #close-video
// - Video Element: #praktikum-video
// =========================================================


// =========================================================
// Video-Popup (Modal) für "Berufspraktische Tätigkeit"
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll('a[href="#berufspraktische-taetigkeit"]');
  const modal = document.getElementById("video-modal");
  const close = document.getElementById("close-video");
  const video = document.getElementById("praktikum-video");
  const audio = document.getElementById("praktikum-audio");

  if (!triggers.length || !modal || !close || !video) return;

  // Pfade
  const VIDEO_SRC = "video/praxissemester.mp4";
  // Optional: falls du Audio per JS setzen willst:
  // const AUDIO_SRC = "audio/praxissemester-voiceover.mp3";

  // Lautstärken
  const VIDEO_VOLUME = 0.15; // deutlich leiser
  const AUDIO_VOLUME = 1.0;  // Voice-over normal


  if (!modal.hasAttribute("tabindex")) modal.setAttribute("tabindex", "-1");
  let lastFocusedEl = null;

  let handlersBound = false;

  function ensureSourcesLoaded() {
    // Video source setzen/aktualisieren
    let source = video.querySelector("source");
    if (!source) {
      source = document.createElement("source");
      source.type = "video/mp4";
      video.appendChild(source);
    }
    if (source.getAttribute("src") !== VIDEO_SRC) {
      source.setAttribute("src", VIDEO_SRC);
    }

    // Optional: Audio src setzen (nur wenn keinen <source> im HTML hast)
    // if (audio && AUDIO_SRC && audio.getAttribute("src") !== AUDIO_SRC) {
    //   audio.setAttribute("src", AUDIO_SRC);
    // }

    // Neu laden (aber NICHT abspielen!)
    video.load();
    if (audio) audio.load();

    // Reset + Lautstärken
    try {
      video.pause();
      video.currentTime = 0;
      video.volume = VIDEO_VOLUME;
      video.muted = false;
    } catch {}

    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = AUDIO_VOLUME;
      } catch {}
    }

    // Event-Handler nur 1× binden
    if (!handlersBound) {
      bindSyncHandlers();
      handlersBound = true;
    }
  }

  function bindSyncHandlers() {
    // Video -> Audio sync
    video.addEventListener("play", () => {
      if (!audio) return;
      // grob synchronisieren
      try { audio.currentTime = video.currentTime || 0; } catch {}
      audio.play().catch(() => {});
    });

    video.addEventListener("pause", () => {
      if (audio && !audio.paused) audio.pause();
    });

    video.addEventListener("seeking", () => {
      if (!audio) return;
      try { audio.currentTime = video.currentTime || 0; } catch {}
    });

    video.addEventListener("ratechange", () => {
      if (!audio) return;
      try { audio.playbackRate = video.playbackRate; } catch {}
    });

    video.addEventListener("ended", () => {
      if (!audio) return;
      //try { audio.pause(); audio.currentTime = 0; } catch {}
      audio.play().catch(() => {});
    });

    // Optional: Video-Lautstärke “deckeln”, falls User im Player lauter zieht
    video.addEventListener("volumechange", () => {
      if (video.volume > 0.25) video.volume = VIDEO_VOLUME;
    });

    // Optional: wenn Audio endet, Video pausieren (nur sinnvoll, wenn beides gleich lang sein soll)
    if (audio) {
      audio.addEventListener("ended", () => {
        //try { video.pause(); } catch {}
        try {
          video.currentTime = 0;
        } catch {}
      });
    }
  }

  function openModal(e) {
    if (e) e.preventDefault();

    lastFocusedEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    ensureSourcesLoaded();

    // Nutze am besten die CSS-Klasse .is-open (statt style.display),
    // weil dein video.css genau darauf ausgelegt ist :contentReference[oaicite:1]{index=1}
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    close.focus?.();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    try {
      video.pause();
      video.currentTime = 0;
    } catch {}

    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {}
    }

    lastFocusedEl?.focus?.();
    lastFocusedEl = null;
  }

  triggers.forEach((trigger) => {
    trigger.style.cursor = "pointer";
    trigger.addEventListener("click", openModal);
  });

  // Mobile/Info-Panel: Quiz-Button öffnet ebenfalls das Video
  // Der Button wird dynamisch ins Info-Panel gerendert -> Delegation nutzen
  document.addEventListener("click", (e) => {
    // Button hat data-module="berufspraktische-taetigkeit"
    const btn = e.target.closest('button[data-module="berufspraktische-taetigkeit"]');
    if (!btn) return;

    openModal(e); // öffnet dein Video-Modal
  }, { passive: false });


  close.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  video.addEventListener("error", () => {
    console.warn("Video konnte nicht geladen werden:", VIDEO_SRC, video.error);
  });
});
