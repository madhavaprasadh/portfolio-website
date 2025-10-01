const sections = document.querySelectorAll('section')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
}, { threshold: 0.2 })

sections.forEach(section => {
  observer.observe(section)
})
const typingText = document.querySelector('.typing')
const text = typingText.textContent
typingText.textContent = ''
let i = 0
function typeEffect() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i)
    i++
    setTimeout(typeEffect, 100)
  }
}
typeEffect()

