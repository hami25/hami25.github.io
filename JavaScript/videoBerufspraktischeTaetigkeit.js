document.addEventListener('DOMContentLoaded', function () {
  console.log('[Video-Popup] DOMContentLoaded');
  
  /**********************************************
  * 5) Video-Popup für „Berufspraktische Tätigkeit“
  **********************************************/
  (function () {
    // 1. Elemente holen
    const triggers = document.querySelectorAll(
      'a[href="#berufspraktische-taetigkeit"]'
    );
    const modal = document.getElementById('video-modal');
    const close = document.getElementById('close-video');
    const video = document.getElementById('praktikum-video');
    
    // 2. Debug-Ausgabe
    console.log('[Video-Popup] triggers:', triggers.length);
    console.log('[Video-Popup] modal:', !!modal, 'close:', !!close, 'video:', !!video);
    
    // Wenn etwas fehlt → abbrechen
    if (!triggers.length || !modal || !close || !video) {
      console.warn('[Video-Popup] Elemente nicht gefunden – prüf HTML/IDs/HREF.');
      return;
    }
    
    function openModal(e) {
      if (e) e.preventDefault();
      console.log('[Video-Popup] openModal');
      modal.style.display = 'flex';   // wichtig: CSS muss .video-modal z.B. display:none haben
    }
    
    function closeModal() {
      console.log('[Video-Popup] closeModal');
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    }
    
    // 3. Klick auf alle passenden Links
    triggers.forEach(trigger => {
      trigger.style.cursor = 'pointer';
      trigger.addEventListener('click', openModal);
    });
    
    // 4. X-Button
    close.addEventListener('click', closeModal);
    
    // 5. Klick außerhalb = schließen
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  })();
  
});

