let elOpenBtn = document.getElementById('openBtn');
let elCloseBtn = document.getElementById('closeBtn');
let elModalBox = document.getElementById('modalBox');

elOpenBtn.addEventListener('click', function() {
    elModalBox.classList.add('show');
    elOpenBtn.classList.add('hide');
    elCloseBtn.classList.add('show-it');
})


elCloseBtn.addEventListener('click', function() {
    elModalBox.classList.remove('show');
    elOpenBtn.classList.remove('hide');
    elCloseBtn.classList.remove('show-it');
})