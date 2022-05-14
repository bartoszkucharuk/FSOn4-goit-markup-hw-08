(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobilec-lose]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
