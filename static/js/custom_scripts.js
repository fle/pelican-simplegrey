(function() {
    function onScroll(e) {
      var sidebar = document.getElementById('sidebar-container-fixed');  
      if (window.scrollY > 0) {
        sidebar.classList.add('sticky');
      } else {
        sidebar.classList.remove('sticky');
      }
    }
    document.addEventListener('scroll', onScroll);
})();