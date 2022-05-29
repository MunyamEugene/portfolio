
    const navIcon = document.querySelector('.bugger-menu');
    const navBar = document.querySelector('.nav-bar');
    const container = document.querySelector('.container');
    const home = document.querySelector('li.home');
    const about = document.querySelector('li.about');
    const services = document.querySelector('li.services');
    const contact = document.querySelector('li.contact');
    const skills = document.querySelector('li.skills');

    navIcon.addEventListener('click', () => {
        navBar.classList.toggle('change');
        container.classList.toggle('left-overlay');
    });

    home.addEventListener('click', () => {
          navBar.classList.toggle('change');
        container.classList.toggle('left-overlay');
        });
    about.addEventListener('click', () => {
            navBar.classList.toggle('change');
        container.classList.toggle('left-overlay');
        });
    skills.addEventListener('click', () => {
            navBar.classList.toggle('change');
            container.classList.toggle('left-overlay');
        });
       
     services.addEventListener('click', () => {
           navBar.classList.toggle('change');
         container.classList.toggle('left-overlay');
        });
       
     contact.addEventListener('click', () => {
            navBar.classList.toggle('change');
         container.classList.toggle('left-overlay');
        });


    const btn = document.querySelector('form button');
    const form = document.querySelectorAll('form');
    const thanku= document.querySelector('.thank-you');

    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const name = form[0][0].value;
        const email = form[0][1].value;
        const phone = form[0][2].value;
         const message = form[0][3].value;
    
  
         
fetch("https://formspree.io/f/xnqwwggn", {
	method: "POST",
	body: JSON.stringify({
		name,
		email,
		phone,
        message

	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
}).then(()=>{
    let txt = document.createTextNode('Thank you ! your message has been sent');
    thanku.appendChild(txt);
    form[0].reset();
});

})