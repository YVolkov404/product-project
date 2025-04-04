(() => {
  const refs = {
    closeModalBtn1: document.querySelector('[data-modal-close-1]'),
    closeModalBtn2: document.querySelector('[data-modal-close-2]'),
    openModalBtn1: document.querySelector('[data-modal-signin]'),
    openModalBtn2: document.querySelector('[data-modal-signup]'),
    openModalBtn3: document.querySelector('[data-modal-open-1]'),
    openModalBtn4: document.querySelector('[data-modal-open-2]'),
    modal1: document.querySelector('[data-modal-1]'),
    modal2: document.querySelector('[data-modal-2]'),
  };

  refs.closeModalBtn1.addEventListener('click', toggleModalSignIn);
  refs.closeModalBtn2.addEventListener('click', toggleModalSignUp);
  refs.openModalBtn1.addEventListener('click', toggleModalSignIn);
  refs.openModalBtn2.addEventListener('click', toggleModalSignUp);
  refs.openModalBtn3.addEventListener('click', toggleModalSignIn);
  refs.openModalBtn4.addEventListener('click', toggleModalSignUp);

  function toggleModalSignIn() {
    refs.modal1.classList.toggle('is-hidden-1');
  }
  function toggleModalSignUp() {
    refs.modal2.classList.toggle('is-hidden-2');
  }
})();
