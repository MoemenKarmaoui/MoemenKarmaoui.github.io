document.addEventListener("DOMContentLoaded", function () {

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('userpic') || entry.target.classList.contains('tool') || entry.target.classList.contains('betw')) {
                    entry.target.classList.add('UA');
                } else if (entry.target.classList.contains('skull')) {
                    entry.target.classList.add('UP');
                }else if (entry.target.classList.contains('social')){
                    entry.target.classList.add('RT');
                }else if (entry.target.classList.contains('title')){
                    entry.target.classList.add('OP');
                    entry.target.classList.remove('hide');
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    const userpicElement = document.querySelector('.userpic');
    const navelement = document.querySelector('.tool');
    const logo = document.querySelector('.skull');
    const socials = document.querySelector('.social');
    const ext = document.querySelector('.betw');
    const text = document.querySelector('.title');
    observer.observe(userpicElement);
    observer.observe(navelement);
    observer.observe(logo);
    observer.observe(socials);
    observer.observe(ext);
    setTimeout(function(){
        observer.observe(text);
    },1000)


});



function autowrite (entries){
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            if (entry.target.classList.contains('text_container')){
                entry.target.classList.toggle('UA');
                setTimeout(function(){
                    var app = document.querySelector('.text_container');
                    var typewriter = new Typewriter(app,{
                        loop : false,
                        delay: 50,
                    });
                    typewriter
                    .typeString("<p>Hello to Moemen karmaoui/Ben-mohamed Web page , this site is created for fun and litterly there is no content here just an empty design , i was creating this page web while trying to train and get used to use the intersection observer in the java script and how to mix it with my page content to get a modern good looking web page and that's all thanks for visiting my page web if you still concerned there are some more sites that i did or i will create :)</p>")
                    .start();
                },2000)
            }else if (entry.target.classList.contains('box1')){
                entry.target.classList.toggle('UA')
            }else if (entry.target.classList.contains('box2')){
                entry.target.classList.toggle('UP')
            }else if (entry.target.classList.contains('box3')){
                entry.target.classList.toggle('RT')
            }
        }
            })
        }
const observer2 = new IntersectionObserver(autowrite);
const text_container = document.querySelector('.text_container');
const b1 = document.querySelector('.box1');
const b2 = document.querySelector('.box2');
const b3 = document.querySelector('.box3');
observer2.observe(text_container)
observer2.observe(b1)
observer2.observe(b3)
observer2.observe(b2)


let tl = document.getElementById('whatsapp');
tl.addEventListener('click',function(){
    console.log("no whatsapp use other platforms !")
})