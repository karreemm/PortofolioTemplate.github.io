document.addEventListener('scroll', function() {
    const imgContainer = document.querySelector('.img-container');
    const imgReplace = document.querySelector('.img-replace');

    const scrollPosition = window.scrollY;

    if (scrollPosition > 550) {  
      imgContainer.classList.add('hidden');
      imgReplace.classList.remove('hidden');
    } else {
      imgContainer.classList.remove('hidden');
      imgReplace.classList.add('hidden');
    }
});


const handleGroupButton = () => {
  const allBtn = document.getElementById('all');
  const webBtn = document.getElementById('web');
  const brandingBtn = document.getElementById('branding');
  const advertisingBtn = document.getElementById('advertising');
  const btns = document.querySelectorAll('.group-btns-btn');

  const allContent = document.getElementById('all-content');
  const webContent = document.getElementById('web-content');
  const brandingContent = document.getElementById('branding-content');
  const advertisingContent = document.getElementById('advertising-content');
  const contents = document.querySelectorAll('.content');

  console.log(allBtn, webBtn, brandingBtn, advertisingBtn, btns);
  console.log(allContent, webContent, brandingContent, advertisingContent, contents);

  const handleClick = (btn, content) => {
    btns.forEach(btn => {
      btn.classList.remove('active-btn');
      btn.classList.add('btn');
    });
    contents.forEach(content => {content.classList.add('hidden')});
    btn.classList.remove('btn');
    btn.classList.add('active-btn');
    content.classList.remove('hidden');
    content.classList.add('content');
  };

  allBtn.addEventListener('click', () => handleClick(allBtn, allContent));
  webBtn.addEventListener('click', () => handleClick(webBtn, webContent));
  brandingBtn.addEventListener('click', () => handleClick(brandingBtn, brandingContent));
  advertisingBtn.addEventListener('click', () => handleClick(advertisingBtn, advertisingContent));
};

const handleMobileNav = () => {
  const mobileNav = document.getElementById('mob-nav');
  const mobileNavBtn = document.getElementById('mobile-btn');

  mobileNavBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains('mobile-nav')) {
      mobileNav.classList.remove('mobile-nav');
      mobileNav.classList.add('hidden');
      return;
    }
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('mobile-nav');
  });

};

document.addEventListener('DOMContentLoaded', function () {
  const OFFSET = 100;
  const CHANGE_AT_SCROLL = 200; 
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  let isScrolling = false;

  const handleScroll = () => {
    if (isScrolling) return;

    let currentSection = '';

    if (window.scrollY < CHANGE_AT_SCROLL) {
      currentSection = 'home';
    } else if (window.scrollY >= CHANGE_AT_SCROLL && window.scrollY < sections[1].offsetTop - OFFSET) {
      currentSection = 'about';
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - OFFSET;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  };

  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - OFFSET;

        isScrolling = true;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    });
  });

  navLinks[0].classList.add('active');

  window.addEventListener('scroll', handleScroll);
});



document.addEventListener('DOMContentLoaded', handleMobileNav);
document.addEventListener('DOMContentLoaded', handleGroupButton);
