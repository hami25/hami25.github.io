/* =========================================================
    UI-Filterlogik fuer die Legende (Mehrfachauswahl).

    Struktur:
     - .legend-filter -> Container der Filter-Buttons
     - .legend-item[data-filter] -> einzelne Filter-Buttons
     - data-filter="all" -> Spezial-Button: "Alle anzeigen"
     - .curriculum .module -> Module, die gefiltert werden

    Wirkprinzip:
     - Aktive Filter (ausser "all") steuern, welche Module NICHT gedimmt werden.
     - Wenn kein spezifischer Filter aktiv ist, gilt implizit "all".
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Guard: Seite/Block existiert nicht
  const legend = document.querySelector('.legend-filter');
  if (!legend) return;

  // Element-Refs
  const filterButtons = Array.from(legend.querySelectorAll('.legend-item'));
  const modules = Array.from(document.querySelectorAll('.curriculum .module'));

  // Optionaler "Alle anzeigen"-Button
  const allButton = filterButtons.find(btn => btn.dataset.filter === 'all');

  /**
   * Setzt den Zustand der Module basierend auf den aktiven Filtern.
   * - Keine aktiven spezifischen Filter => alles sichtbar (nicht gedimmt)
   * - Sonst: Module ohne Match bekommen .is-dimmed
   */
  function updateFilters() {
    // Aktive Filter ausser "all" einsammeln
    const activeFilters = filterButtons
      .filter(btn => btn.classList.contains('is-active') && btn.dataset.filter !== 'all')
      .map(btn => btn.dataset.filter);

    // Wenn keine spezifischen Filter aktiv sind, wird alles angezeigt
    if (activeFilters.length === 0) {
      modules.forEach(mod => mod.classList.remove('is-dimmed'));
      if (allButton) allButton.classList.add('is-active');
      return;
    }

    // Sobald spezifische Filter aktiv sind, ist "all" nicht aktiv
    if (allButton) allButton.classList.remove('is-active');

    modules.forEach(mod => {
      // Match, wenn das Modul mindestens einen aktiven Filter als Klasse hat
      const match = activeFilters.some(f => mod.classList.contains(f));
      mod.classList.toggle('is-dimmed', !match);
    });
  }

  // Click Handler fuer jeden Filter-Button
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (!filter) return;

      if (filter === 'all') {
        // "Alle anzeigen" => alles zuruecksetzen
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        modules.forEach(mod => mod.classList.remove('is-dimmed'));
      } else {
        // Einzelne Filter an/aus (Mehrfachauswahl)
        btn.classList.toggle('is-active');

        // "all" wird bei spezifischen Filtern deaktiviert;
        // falls danach kein Filter aktiv ist, setzt updateFilters() "all" wieder.
        if (allButton) allButton.classList.remove('is-active');
      }

      updateFilters();
    });
  });

  // Initialzustand (z.B. wenn Defaults per CSS/HTML gesetzt sind)
  updateFilters();
});
