var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

var btn1 = document.querySelector('.btn6');

var btn2 = document.querySelector('.btn7');

var instruction = document.querySelector('nav') ;
btn1.addEventListener('click',function()
{
    instruction.style.display = 'block';
});

btn2.addEventListener('click' , function()
{
    instruction.style.display = 'none';
})