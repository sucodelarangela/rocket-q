export default function Modal() {
  const cancelButton = document.querySelector('.button.cancel')
  cancelButton.addEventListener('click', close)

  const modalWrapper = document.querySelector('.modal-wrapper')
  function open() {
    // Atribuir a classe active para a modal
    modalWrapper.classList.add('active')
  }
  function close() {
    // Remover a classe active da modal
    modalWrapper.classList.remove('active')
  }

  return {open, close}
}
