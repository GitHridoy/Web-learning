const sr = ScrollReveal ({
	distance: '45px',
	duration: 1700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})
sr.reveal('.content-main',{delay:350, origin:'right'})
sr.reveal('.work-main',{delay:350, origin:'right'})
sr.reveal('.gallery-img',{delay:350, origin:'right'})
sr.reveal('.gallery-main',{delay:350, origin:'right'})
sr.reveal('.counter-main',{delay:350, origin:'right'})
sr.reveal('.blur-box',{delay:350, origin:'top'})
sr.reveal('.contact-box',{delay:350, origin:'top'})


sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})




// contact section pop 
let Pop = document.getElementById('pop');
let Close = document.getElementById('close');
var Elements = document.getElementsByTagName('section');

document.getElementById('contact').addEventListener('click', function(){
Pop.classList.add('show');
document.body.style.backgroundColor = 'rgb(0, 0, 0, 0.6)';
Elements.style.display = 'none'


})

document.getElementById('close').addEventListener('click', function(){
Pop.classList.remove('show');
document.body.style.backgroundColor = 'white'

})