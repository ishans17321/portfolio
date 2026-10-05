(() => {
  const journal = document.querySelector('.journal');
  if (!journal) return;

  const search = journal.querySelector('#journal-search');
  const count = journal.querySelector('.journal__count');
  const empty = journal.querySelector('.journal__no-results');
  const entries = Array.from(journal.querySelectorAll('.journal__entry'), element => ({
    element,
    text: element.textContent.toLocaleLowerCase()
  }));

  function filterEntries() {
    const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const matches = words.every(word => entry.text.includes(word));
      entry.element.hidden = !matches;
      if (matches) visible += 1;
    }
    count.textContent = `${visible} of ${entries.length} posts`;
    empty.hidden = visible !== 0 || entries.length === 0;
  }

  journal.querySelector('.journal__tools').hidden = false;
  search.addEventListener('input', filterEntries);
  filterEntries();
})();
