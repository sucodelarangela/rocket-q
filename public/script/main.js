import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

// Pegar quando o 'marcar como lido' for clicado
checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
  // Quando for clicado, definimos o handleClick como true
})

// Pegar todos os botões com a classe delete
const deleteButton = document.querySelectorAll('.actions a.delete')

// Pegar quando o 'marcar como lido' for clicado
deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
  // Quando for clicado, definimos o handleClick como false
})

function handleClick(event, check = true) {
  event.preventDefault()

  // Pegar os dados para o backend
  const roomId = document.querySelector('#room-id').dataset.id
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  // No ato do evento, checa se é verdadeiro e aplicamos os operadoradores ternários abaixo:
  const text = check ? 'Marcar como lida' : 'Excluir'
  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = check
    ? `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    : `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // Abrir modal
  modal.open()
}
