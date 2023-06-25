const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})
sr.reveal('.content-main',{delay:350, origin:'right'})
sr.reveal('.work-main',{delay:350, origin:'right'})
sr.reveal('.gallery-img',{delay:350, origin:'right'})
sr.reveal('.gallery-main',{delay:350, origin:'right'})
sr.reveal('.counter-main',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})