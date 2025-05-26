(() => {
  const toggleModal = (modalId) => {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.toggle('is-hidden');
    }
  };

  document.querySelectorAll('[data-modal-toggle]').forEach(btn => {
    const target = btn.getAttribute('data-modal-toggle');
    btn.addEventListener('click', () => toggleModal(target));
  });
})();
