let div = document.querySelector('div')
let i = 0;

const num = setInterval(() => {
  div.innerHTML = i;
  i++
  if(i > 300) {
    clearInterval(num)
  }
})

 