(() => {
  const toggleModal = (modalId) => {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.toggle('is-hidden');
    }
  };

  const closeModal = (modalId) => {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add('is-hidden');
    }
  };

  // Handle modal toggle buttons
  document.querySelectorAll('[data-modal-toggle]').forEach(btn => {
    const target = btn.getAttribute('data-modal-toggle');
    btn.addEventListener('click', () => toggleModal(target));
  });

  // Handle modal close buttons
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    const target = btn.getAttribute('data-modal-close');
    btn.addEventListener('click', () => closeModal(target));
  });

  // Handle backdrop clicks
  document.querySelectorAll('[data-modal]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        const modalId = modal.getAttribute('data-modal');
        closeModal(modalId);
      }
    });
  });

  // Handle Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-modal]:not(.is-hidden)').forEach(modal => {
        const modalId = modal.getAttribute('data-modal');
        closeModal(modalId);
      });
    }
  });
})();
