function onEntry(entry) {
    entry.forEach(change => {
        change.isIntersecting ? change.target.classList.add('reveal_active') : change.target.classList.remove('reveal_active');
    });
  }
  let options = { threshold: [1.0] };
  let observer = new IntersectionObserver(onEntry, options);
  const reweal = document.querySelectorAll('.reveal');
  for (let elm of reweal) {
    observer.observe(elm);
  }
