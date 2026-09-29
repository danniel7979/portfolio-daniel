/* Drop a JPG with the documented name into assets/projects to fill its slot. */
(() => {
  const reveal = (base, onLoad) => {
    const image = new Image();
    image.onload = () => onLoad(image, `${base}.jpg`);
    image.src = `${base}.jpg`;
  };

  document.querySelectorAll('[data-cover]').forEach((visual) => {
    reveal(visual.dataset.cover, (_image, url) => {
      visual.style.backgroundImage = `url("${url}")`;
      visual.style.backgroundSize = 'cover';
      visual.style.backgroundPosition = 'center';
    });
  });

  document.querySelectorAll('[data-photo-base]').forEach((slot) => {
    reveal(slot.dataset.photoBase, (image) => {
      image.alt = slot.dataset.alt || 'Fotografía del proyecto';
      image.loading = 'lazy';
      image.decoding = 'async';
      slot.insertBefore(image, slot.querySelector('figcaption'));
      slot.classList.add('has-photo');
    });
  });
})();
