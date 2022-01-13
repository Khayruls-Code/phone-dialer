const inputField = document.getElementById('input-field')
const keyboard = document.querySelector('.keyboard')
const backSpace = document.querySelector('.backSpace')

// getting key value
keyboard.addEventListener('click', (e) => {
  const id = e.target.id;
  let currentValue = inputField.value
  inputField.value = currentValue + id
})

// back space functionality
backSpace.addEventListener('click', () => {
  const rest = inputField.value.slice(0, inputField.value.length - 1)
  inputField.value = rest
})
