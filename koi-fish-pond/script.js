function createKoi() {
    const pond = document.querySelector('.pond');
    const koi = document.createElement('div');
    koi.classList.add('koi');
    koi.style.top = `${Math.random() * 100}%`;
    koi.style.left = `${Math.random() * 100}%`;
    pond.appendChild(koi);
}

setInterval(createKoi, 1000);
createKoi();    

