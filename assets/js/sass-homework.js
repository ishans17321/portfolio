// Each example runs in its own sandbox so repeated IDs and edited scripts stay isolated.
document.querySelectorAll('[data-sass-example]').forEach((example) => {
  const editor = example.querySelector('textarea');
  const original = editor.value;
  const frame = example.querySelector('iframe');
  const stylesheet = document.querySelector('[data-sass-styles]').href;
  const run = () => {
    frame.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="${stylesheet}"></head><body class="sass-preview">${editor.value}</body></html>`;
    example.querySelector('[data-run-status]').textContent = 'Preview refreshed. Changes here are temporary; Reset restores the completed solution.';
  };
  example.querySelector('[data-run]').addEventListener('click', run);
  example.querySelector('[data-reset]').addEventListener('click', () => { editor.value = original; run(); });
  example.querySelector('[data-width]').addEventListener('click', (event) => {
    const narrow = frame.classList.toggle('is-narrow');
    event.currentTarget.setAttribute('aria-pressed', String(narrow));
    event.currentTarget.textContent = narrow ? 'Full width preview' : 'Phone preview';
  });
  run();
});
