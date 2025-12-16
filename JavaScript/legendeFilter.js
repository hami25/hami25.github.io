document.addEventListener('DOMContentLoaded', function () {
  const legend = document.querySelector('.legend-filter');
  if (!legend) return;

  const filterButtons = Array.from(legend.querySelectorAll('.legend-item'));
  const modules = Array.from(document.querySelectorAll('.curriculum .module'));

  const allButton = filterButtons.find(btn => btn.dataset.filter === 'all');

  function updateFilters() {
    // aktive Filter außer "all"
    const activeFilters = filterButtons
      .filter(btn => btn.classList.contains('is-active') && btn.dataset.filter !== 'all')
      .map(btn => btn.dataset.filter); // z.B. ["mod-bwl", "mod-info"]

    // Wenn keine spezifischen Filter aktiv → alles zeigen
    if (activeFilters.length === 0) {
      modules.forEach(mod => {
        mod.classList.remove('is-dimmed');
      });
      if (allButton) {
        allButton.classList.add('is-active');
      }
      return;
    }

    // "Alle anzeigen" ist dann nicht aktiv
    if (allButton) {
      allButton.classList.remove('is-active');
    }

    modules.forEach(mod => {
      // passt dieses Modul zu mindestens einem aktiven Filter?
      const match = activeFilters.some(f => mod.classList.contains(f));

      if (match) {
        mod.classList.remove('is-dimmed');
      } else {
        mod.classList.add('is-dimmed');
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (!filter) return;

      if (filter === 'all') {
        // "Alle anzeigen" → alles zurücksetzen
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        modules.forEach(mod => mod.classList.remove('is-dimmed'));
      } else {
        // einzelne Filter an/aus (Mehrfachauswahl)
        btn.classList.toggle('is-active');

        // wenn nach dem Toggle KEIN Filter mehr aktiv ist → später in updateFilters wieder "all"
        if (allButton) {
          allButton.classList.remove('is-active');
        }
      }

      updateFilters();
    });
  });

  // Initialzustand
  updateFilters();
});
