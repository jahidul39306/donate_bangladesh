const accountAmount = document.getElementById('account-amount')
// const historySection = document.getElementById('history-section')

function validInput(amount) {
    if (amount < 0 || isNaN(amount)) {
        return false
    }
    return true
}

function validAmount(amount) {
    balance = accountAmount.innerText.split(' ')[0]
    if (balance < amount) {
        return false
    }
    return true
}

function addDonation(inpElementId, elementId, type) {
    amount = document.getElementById(inpElementId).value
    if (validInput(amount)) {
        amount = parseFloat(amount)
        if (validAmount(amount)) {
            account = parseFloat(document.getElementById(elementId).innerText.split(' ')[0])
            account += amount
            document.getElementById(elementId).innerText = account + ' BDT'
            balance = accountAmount.innerText.split(' ')[0]
            balance -= amount
            accountAmount.innerText = balance + ' BDT'
            addToHistory(type, amount)
            modal.showModal()
        }
        else{
            alert('Not available balance. Reduce the donation amount.')
        }
    }
    else {
        alert('Wrong input. Please enter valid amount.')
    }
}


function addToHistory(type, amount){
    div = document.createElement('div')
    h2 = document.createElement('h2')
    p = document.createElement('p')
    if (type == 'noakhali'){
        h2.innerText = amount + " Taka is Donated for Flood Relief in Noakhali, Bangladesh"
    }
    if (type == 'feni'){
        h2.innerText = amount + " Taka is Donated for Flood Relief in Feni, Bangladesh"
    }
    if (type == 'quota'){
        h2.innerText = amount + " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh"
    }
    div.classList.add('border', 'rounded-2xl', 'p-2', 'space-y-2', 'md:p-6', 'md:space-y-4')
    h2.classList.add('font-bold', 'text-[10px]', 'md:text-xl')
    div.appendChild(h2)
    p.innerText = 'Date: ' + Date()
    p.classList.add('font-light', 'text-[8px]', 'md:text-[16px]', 'text-[#111111B3]')
    div.appendChild(p)
    historySection.appendChild(div)
}