const prev = document.getElementById('prev');
const next = document.getElementById('next');
const carousel = document.querySelectorAll('.img');

let picNum = 0;

let interval = setInterval(advanceImg, 2000);

function advanceImg() {
    picNum++;
    checkPicNum();
    updateImg();
}

next.addEventListener('click', () => {
    picNum++;
    configButtonLogic();
});

prev.addEventListener('click', () => {
    picNum--;
    configButtonLogic();
});

function configButtonLogic() {
    checkPicNum();
    updateImg();
    resetInterval();
}

function checkPicNum() {
    if (picNum > 4) {
        picNum = 0;
    } else if (picNum < 0) {
        picNum = 4;
    };
}

function updateImg() {
    carousel.forEach(img => {
        img.style.transform = `translateX(${-400 * picNum}px)`;
    })
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(advanceImg, 2000);
}