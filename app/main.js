;(function (win ,doc) {
    "use strict";
    var slider = doc.querySelector(".slider__wrapper"),
        slides = slider.querySelectorAll(".slide"),
        cur = 0,
        w = slides[0].clientWidth,
        tl = anime.timeline({easing: 'easeInOutExpo'});
    function _animate() {
        setInterval(function(){
            
            var movementAmount = cur * -w;
            slider.style.left = movementAmount + "px";
            tl.add({
                targets: ".slide__title",
                filter: [
                    {value: 'blur(20px)', duration: 600, elasticity: 1000},
                    {value: 'blur(10px)', duration: 600, elasticity: 1500},
                    {value: 'blur(0px)', duration: 600, elasticity: 2000},
                ],
                opacity: [
                    {value: 0, duration: 600, elasticity: 1000},
                    {value: 1, duration: 600, elasticity: 1500},
                    {value: 1, duration: 600, elasticity: 2000}
                ],
                scale: [
                    {value: 12, duration: 600, elasticity: 1000},
                    {value: 0.9, duration: 600, elasticity: 1500},
                    {value: 1, duration: 600, elasticity: 2000}
                ],
                loop: true
            })
            .add({
                targets: ".counting",
                translateY: [100, 1]
            });
            if(cur >= slides.length - 1){
                cur = 0;
            }else {
                cur++;
            } 
        }, 3000);
    }
    _animate();
})(window, document);