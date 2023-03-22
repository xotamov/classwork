 let btn = document.querySelector('button')
 let summa = document.querySelector('.summa')
 let sum = 120

 btn.forEach(item =>  {
    item.addEventListener('click', () =>  {
        sum += +item.innerText
        summa.innerText = sum
    })
 })

