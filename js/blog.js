const btnHome = document.getElementById('btn-home')

btnHome.addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'index.html'
})