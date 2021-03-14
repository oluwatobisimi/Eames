let left = document.getElementById('left');
let right = document.getElementById('right');

left.addEventListener('click', () => {
    let images = document.querySelectorAll('.product_section img');    
    for (i = 0; i < images.length; i++) {
        let imagename = images[i].getAttribute('src');
        let imgNumber = imagename.slice(7, 8);
        if (imgNumber == 3) {
            imgNumber = 1;
        } else {
            imgNumber++
        }
        document.querySelectorAll('.product_section img')[i].setAttribute('src', 'assets/'+ imgNumber + '.png') 
    }
})

right.addEventListener('click', () => {
    let images = document.querySelectorAll('.product_section img');    
    for (i = 0; i < images.length; i++) {
        let imagename = images[i].getAttribute('src');
        let imgNumber = imagename.slice(7, 8);
        if (imgNumber == 1) {
            imgNumber = 3;
        } else {
            imgNumber--
        }
        document.querySelectorAll('.product_section img')[i].setAttribute('src', 'assets/'+ imgNumber + '.png') 
    }
})