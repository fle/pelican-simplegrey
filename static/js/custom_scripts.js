(function() {
    function onScroll(e) {
      var sidebar = document.getElementById('sidebar-container-fixed');  
      if (window.scrollY > 0) {
        sidebar.style.width = sidebar.offsetWidth + 'px'
        sidebar.classList.add('sticky');
      } else {
        sidebar.style.width = 'auto'
        sidebar.classList.remove('sticky');
      }
    }
    document.addEventListener('scroll', onScroll);
})();