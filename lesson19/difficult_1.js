const input = document.querySelector('input')
const debounceText = document.getElementById('debounce')


const updateDebounceText = debounce((text) =>{
  debounceText.textContent = text
})

input.addEventListener('input', e => {
  updateDebounceText(e.target.value)

})

function debounce(cb, delay = 300) {
  return (...args) => {
    setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
