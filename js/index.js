const btnDonation = document.getElementById('btn-donation')
const btnHistory = document.getElementById('btn-history')
const historySection = document.getElementById('history-section')
const donationSection = document.getElementById('donation-section')

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