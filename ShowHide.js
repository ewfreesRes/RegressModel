<script language="javascript">
function toggle(id1,id2) {
	var ele = document.getElementById(id1); var text = document.getElementById(id2);
	if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Solution";}
		else {ele.style.display = "block"; text.innerHTML = "Hide Solution";}}
</script>

<script language="javascript">
function togglecode(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show R Code";}
      else {ele.style.display = "block"; text.innerHTML = "Hide R Code";}}
</script>
<script language="javascript">
function toggleEX(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Example";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Example";}}
</script>
<script language="javascript">
function toggleTheory(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Theory";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Theory";}}
</script>

<script language="javascript">
function toggleDet(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Details";}
      else {ele.style.display = "block"; text.innerHTML = "Hide  Details";}}
</script>

<script language="javascript">
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>


<script src=https://cdn.datacamp.com/datacamp-light-latest.min.js></script>

<script>
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});
</script>

<style>
/* Rearrange console label */
.datacamp-exercise ol li, .datacamp-exercise ul li {
  margin-bottom: 0em !important;
}

/* Remove bullet marker */
.datacamp-exercise ol li::before, .datacamp-exercise ul li::before {
  content: '' !important;
}
</style>


<script language="javascript">
var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Correct" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
};
</script>





<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131253904-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131253904-1');
</script>

