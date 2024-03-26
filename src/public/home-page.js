document.addEventListener('DOMContentLoaded', function() {
  // Burger menus
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (burger.length && menu.length) {
      burger.forEach(function(burgerElement) {
          burgerElement.addEventListener('click', function() {
              menu.forEach(function(menuElement) {
                  menuElement.classList.toggle('hidden');
              });
          });
      });
  }

  if (close.length) {
      close.forEach(function(closeElement) {
          closeElement.addEventListener('click', function() {
              menu.forEach(function(menuElement) {
                  menuElement.classList.toggle('hidden');
              });
          });
      });
  }

  if (backdrop.length) {
      backdrop.forEach(function(backdropElement) {
          backdropElement.addEventListener('click', function() {
              menu.forEach(function(menuElement) {
                  menuElement.classList.toggle('hidden');
              });
          });
      });
  }

  // Feature Cards Animation
  const engage = document.getElementById('engage');
  const featureCards = document.querySelectorAll('.feature-cards');
  const qm = document.getElementById('at-qm');
  const mission = document.getElementById('our-mission');
  const mission1 = document.getElementById('our-mission1');
  const ourTeam = document.getElementById('our-team');
  const ourTeam1 = document.getElementById('our-team1');
  const ourTeam2 = document.getElementById('our-team2');

  // Initially hide the engage and mission elements
  engage.style.opacity = '0';
  qm.style.opacity = '0';
  mission.style.opacity = '0';
  mission1.style.opacity = '0';
  ourTeam.style.opacity= '0';
  ourTeam1.style.opacity= '0';
  ourTeam2.style.opacity= '0';

  const isElementInViewport = function(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  };

  const addAnimationOnScroll = function() {
    if (isElementInViewport(engage)) {
        engage.classList.add('animate-jump-in');
        engage.style.opacity = '1'; // Show the engage element
    }

    if (isElementInViewport(qm)) {
        qm.classList.add('animate-jump-in');
        qm.style.opacity = '1'; // Show the qm element
    }

    if (isElementInViewport(mission)) {
        mission.classList.add('animate-jump-in');
        mission.style.opacity = '1'; // Show the qm element
    }

    if (isElementInViewport(mission1)) {
        mission1.classList.add('animate-jump-in');
        mission1.style.opacity = '1'; // Show the qm element
    }

    if (isElementInViewport(ourTeam)) {
        ourTeam.classList.add('animate-jump-in');
        ourTeam.style.opacity = '1'; // Show the qm element
    }

    if (isElementInViewport(ourTeam1)) {
        ourTeam1.classList.add('animate-jump-in');
        ourTeam1.style.opacity = '1'; // Show the qm element
    }
    
    if (isElementInViewport(ourTeam2)) {
        ourTeam2.classList.add('animate-jump-in');
        ourTeam2.style.opacity = '1'; // Show the qm element
    }

    // Once animation is applied to engage and mission elements, remove the event listener
    if (isElementInViewport(engage) && isElementInViewport(qm) && isElementInViewport(ourTeam) && isElementInViewport(ourTeam1) && isElementInViewport(ourTeam2)) {
        window.removeEventListener('scroll', addAnimationOnScroll);
    }
  };

  // Initial check in case the engage and mission elements are already in viewport
  addAnimationOnScroll();

  // Add event listener to check when the engage and mission elements enter the viewport
  window.addEventListener('scroll', addAnimationOnScroll);

  // Add hover event listeners to each feature card
  featureCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
          card.classList.add('animate-bounce');
      });

      card.addEventListener('mouseleave', function() {
          card.classList.remove('animate-bounce');
      });
  });

});
