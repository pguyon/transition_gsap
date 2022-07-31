let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#img1')
let btn2 = document.querySelector('#btn2');
let img2 = document.querySelector('#img2')
let btn3 = document.querySelector('#btn3');
let img3 = document.querySelector('#img3')




function scale(btn,img) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(img, {scale: 1.15, duration:1})
    })
    btn.addEventListener('mouseleave', () => {
        gsap.to(img, {scale: 1, duration:0.5})
    })
}

scale(btn1, img1)
scale(btn2, img2)
scale(btn3, img3)



gsap.fromTo('#div1', {x: -450, opacity:0}, {x:0, opacity:1, duration:0.5})
gsap.fromTo('#div2', {y: -450, opacity:0}, {y:0, opacity:1, duration:0.5})
gsap.fromTo('#div3', {x: 900, opacity:0}, {x:0, opacity:1, duration:0.5})