window.onload = function(){
    gsap.fromTo('#top', {y: 50}, {y:-500, duration:1.2})
    gsap.fromTo('#bottom', {y: 50}, {y:500, duration:1.2}
    )
}

gsap.fromTo('p', {opacity: 0}, {opacity:1, duration:1.5})
gsap.fromTo('.img h1', {y:100}, {y:50, duration:1});
gsap.fromTo('.img', {opacity:0}, {opacity:1, duration:1})