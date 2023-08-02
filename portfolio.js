var typed= new Typed('#element',{
    strings:['Graphic Designer.', 'Video Editor.'],
    typeSpeed:50,
})




var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname,currentTabLink) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
   currentTabLink.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu=document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}




  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']
  const msg=getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset
      })
      .catch(error => console.error('Error!', error.message))
  })


  
  