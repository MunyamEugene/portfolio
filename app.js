
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