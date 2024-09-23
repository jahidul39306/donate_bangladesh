const btnDonation = document.getElementById('btn-donation')
const btnHistory = document.getElementById('btn-history')
const historySection = document.getElementById('history-section')
const donationSection = document.getElementById('donation-section')
const noakhaliBtn = document.getElementById('btn-noakhali-donate')
const feniBtn = document.getElementById('btn-feni-donate')
const quotaBtn = document.getElementById('btn-quota-donate')
const modal = document.getElementById('my_modal_5')
const btnBlog = document.getElementById('btn-blog')

// toggle section
btnDonation.addEventListener('click', function (event) {
    event.preventDefault()
    btnDonation.classList.remove('bg-white', 'font-medium', 'text-[#111111B3]')
    btnDonation.classList.add('bg-[#B4F461]', 'font-semibold')

    btnHistory.classList.remove('bg-[#B4F461]', 'font-semibold')
    btnHistory.classList.add('bg-white', 'font-medium', 'text-[#111111B3]')

    historySection.classList.add('hidden')
    donationSection.classList.remove('hidden')

})

btnHistory.addEventListener('click', function (event) {
    event.preventDefault()
    btnDonation.classList.add('bg-white', 'font-medium', 'text-[#111111B3]')
    btnDonation.classList.remove('bg-[#B4F461]', 'font-semibold')

    btnHistory.classList.add('bg-[#B4F461]', 'font-semibold')
    btnHistory.classList.remove('bg-white', 'font-medium', 'text-[#111111B3]')

    historySection.classList.remove('hidden')
    donationSection.classList.add('hidden')
})


// add donation section
noakhaliBtn.addEventListener('click', function (event) {
    event.preventDefault()
    addDonation('input-noakhali', 'noakhali-amount', 'noakhali')
    document.getElementById('input-noakhali').value = ''
})

feniBtn.addEventListener('click', function (event) {
    event.preventDefault()
    addDonation('input-feni', 'feni-amount', 'feni')
    document.getElementById('input-feni').value = ''
})

quotaBtn.addEventListener('click', function (event) {
    event.preventDefault()
    addDonation('input-quota', 'quota-amount', 'quota')
    document.getElementById('input-quota').value = ''
})


// blog page section
btnBlog.addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'blog.html'

})