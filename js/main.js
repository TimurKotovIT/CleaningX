
//Создаём переменную, где будут находиться наши превью
let videos;
 
//Запускаем функцию, которая найдёт все видео на странице и добавит обработчики событий
Init();
 
function Init()
{
   //Получаем видео
   videos = document.getElementsByClassName("video-js");
 
   for(var i = 0; i < videos.length; i++)
   {
       //Добавляем обработчик события наведения мыши
       videos[i].addEventListener("mouseenter", function(e) { MouseEnter(e.target); });
 
       //Добавляем обработчик события выхода курсора за границы элемента
       videos[i].addEventListener("mouseleave", function(e) { MouseLeave(e.target); });
   }
 
}
 
//Если мышь наведена, просто запускаем ролик
function MouseEnter(e)
{
   e.play();
}
 
//Если курсор выходит за пределы элемента, то мы сначала ставим видео на паузу
//А потом перезагружаем его, чтобы отобразился постер
function MouseLeave(e)
{
   e.pause();

}



const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. 
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".nav-link-first").forEach(n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))



 


