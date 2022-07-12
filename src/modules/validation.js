const validation = ()=> {
  const mainForm = document.querySelector('#form1')
  const mainName = mainForm.querySelector('#form1-name')
  const mainEmail = mainForm.querySelector('#form1-email')
  const mainPhone = mainForm.querySelector('#form1-phone')
  const mainBtn = mainForm.querySelector('.form-btn')
  console.log(mainBtn)

  let testName = /[^а-яА-Я\W\-]/gi
  mainName.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-я\s\-]/i,'')
  })
  mainEmail.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/,'')
  })
  mainPhone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d\(\)]/i,'')
  })
}


export default validation