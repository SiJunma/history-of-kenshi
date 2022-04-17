//custom-tabs
function tabs (btn, panel) {
  document.querySelectorAll(btn).forEach(el => {
    el.addEventListener('click', function(evt) {
      evt.preventDefault();
      let target = evt.target;

      document.querySelectorAll(btn).forEach(el => {
        
        el.classList.remove('active');
      });
      target.classList.add('active');
      document.querySelectorAll(panel).forEach(el => {
        el.classList.remove('active');
      });
      document.querySelector(target.getAttribute("href")).classList.add('active');
    })
  })
}

tabs('.tab__btn','.tab__panel');

