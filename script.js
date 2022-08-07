const btn = document.querySelectorAll('.btn'),
   input = document.querySelector('#input'),
   title = document.querySelector('.title');

let phoneAnimation;
let equals = '';

btn.forEach(element => {
   element.addEventListener('click', () => {
      let str = input.value.slice(-1);
      animate();
      if (element.value == 'C') {
         equals = '';
         input.value = equals;
      } else if (element.value == '=') {
         equals = eval(equals);
         input.value = equals;
      } else if (element.value === "+" && ~str.indexOf("+") || element.value === "-" && ~str.indexOf("-") || element.value === "*" && ~str.indexOf("*") || element.value === "/" && ~str.indexOf("/") || element.value === "." && ~str.indexOf(".")) {
         console.log('error');

      } else {
         equals += element.value;
         input.value = equals;
      }

   });
});

let scale = [
   {
      transform: 'translateX(0) translateY(0) rotate(0deg)',
      filter: 'opacity(100%)',
   },
   {
      transform: 'translateX(20px) translateY(0) rotate(2deg)',
      filter: 'opacity(50%)'
   },
   {
      transform: 'translateX(20px) translateY(20px) rotate(-2deg)',
      filter: 'opacity(25%)'
   },
   {
      transform: 'translateX(0) translateY(20px) rotate(2deg)',
      filter: 'opacity(50%)'
   },
   {
      transform: 'translateX(0) translateY(0) rotate(0deg)',
      filter: 'opacity(100%)'
   }
];


let time = {
   duration: 6000,
   iterations: Infinity
};


animate = () => {
   if (!phoneAnimation) {
      phoneAnimation = title.animate(scale, time);

   } else if (phoneAnimation.playState === 'paused') {
      phoneAnimation.play();
   } else {
      phoneAnimation.pause();
   }
};