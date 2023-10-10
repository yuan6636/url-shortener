const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function copy() {
  const url = document.querySelector('#short-url')
  navigator.clipboard.writeText(url.innerText)
    .catch((error) => console.log(error))
}