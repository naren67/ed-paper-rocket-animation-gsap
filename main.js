const flightPath = {
          curviness: 1.25,
          autoRotate: true,
          values:[
                    {x:100, y: -20},
                    {x:300, y: 10},
                    {x:500, y: 100},
                    {x:750, y: -100},
                    {x:350, y: -50},
                    {x:600, y: 100},
                    {x:800, y: 0},
                    {x: window.innerWidth, y: -250}
          ]
}

//get the timelinelite plugin from gsap

const tween = new TimelineLite()

tween.add(
          TweenLite.to('.plane', 7, {
                    bezier: flightPath,
                    ease: Power1.easeInOut
          })
)

//animation on scroll magic

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({

          triggerElement: '.rocket__section',
          duration: 3000,
                    // hook 1-bottom  0.5-center  0-top
          triggerHook:0

})
// set the rocket 
.setTween(tween)
.addIndicators()
.addTo(controller)
//set the container untill the animation completes
.setPin('.rocket__section')
