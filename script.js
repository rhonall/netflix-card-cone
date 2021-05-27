const dropDown = document.querySelector('#drop-down')
const detailBox = document.querySelector('.detail')
const closeBtn = document.querySelector('#close-btn')

dropDown.addEventListener("click", function(){
    detailBox.classList.add('detail-active')
})

closeBtn.addEventListener("click", function(){
    detailBox.classList.remove('detail-active')
})

