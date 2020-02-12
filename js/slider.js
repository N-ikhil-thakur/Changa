window.onload = () => {
    let picArrya = [
        "collage1.png",
        "collage2.png",
        "collage3.png",
        "collage4.png",
        "collage5.png"
    ]
    let slider = document.querySelector('.slider-photo-box');
    let count = 0;
    setInterval(() => {
        slider.style = `background-image:url(images/${picArrya[count%(picArrya.length)]})`;
        count++;
    }, 4000);
}