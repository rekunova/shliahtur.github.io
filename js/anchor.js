
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;
anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute("href")).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
 
/* function toggle(el) {
  el.style.display = (el.style.display == 'none') ? '' : 'none'
  } */
  
var mainSlider = document.getElementById("mainSlider");
var headerLine = document.getElementById("headerLine");
 var menuStyle = getComputedStyle(mobileMenu);
 var menuList = [].slice.call(document.getElementsByClassName("b-menu_li__mobile"));
window.onload = function(){
  openMenu.onclick = function (){
    $('#openMenu').hide();
    $('.b-header_heading ').hide();
    $('.b-header_text ').hide();
    $('.b-header_button ').hide();
    if (menuStyle.display == "none"){
      mobileMenu.classList.add("b-menu_list__active");
    }
    else
    mobileMenu.classList.remove("b-menu_list__active"); 
  
  };
  $('.close-btn-menu').click(function(){
    $('#openMenu').show();
    $('.b-header_heading ').show();
    $('.b-header_text ').show();
    $('.b-header_button ').show();
  })


  menuList.forEach(function(item){
    item.addEventListener('click', function(){
      if (mobileMenu.classList.contains("b-menu_list__active"))
        mobileMenu.classList.remove("b-menu_list__active");
    });
  });
 
};


 

