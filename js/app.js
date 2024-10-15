
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let rightItems = gsap.utils.toArray(".gallery__right");
let leftItems = gsap.utils.toArray(".gallery__left");
const scrollDownBtn = document.querySelector(".hero-section__scroll-down")

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
    smoothContent: false
});

leftItems.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-850",
            end: "-100",
            scrub: true,
        }
    })
});

rightItems.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-750",
            end: "top",
            scrub: true
        }
    })
})

document.addEventListener("scroll", function() {
    let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    let scrollTop = window.scrollY;

    let scrollPercent = scrollTop / documentHeight;

    let activeIndicator = document.querySelector(".page-scroll-indicatior__active-section");
    console.log(scrollPercent * 100)

    if (scrollPercent * 100 < 30) {
        activeIndicator.style.top = "0";
    } else if (scrollPercent * 100 >= 30 && scrollPercent * 100 < 60) {
        activeIndicator.style.top = 100 / 4 + "%";
    } else if (scrollPercent * 100 >= 60 && scrollPercent * 100 < 95) {
        activeIndicator.style.top = 100 / 2 + "%";
    } else {
        activeIndicator.style.top = "75%";
    }
});

scrollDownBtn.addEventListener("click", function() {
        // Общая высота страницы за вычетом высоты видимой области
        let documentHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Высчитываем 25% от общей высоты страницы
        let scrollAmount = documentHeight * 0.3;

        // Прокрутка на 25% вниз от текущей позиции
        window.scrollTo({
            top: scrollAmount,
            behavior: 'smooth' // плавная прокрутка
        });
})