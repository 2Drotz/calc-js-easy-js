const btn = document.querySelectorAll('.btn'),
   input = document.querySelector('#input');


let equals = '';

btn.forEach(element => {
   element.addEventListener('click', () => {
      let str = input.value.slice(-1);

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