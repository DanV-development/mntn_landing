
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let rightItems = gsap.utils.toArray(".gallery__right");
let leftItems = gsap.utils.toArray(".gallery__left");
let pageContentSeparatorLines = gsap.utils.toArray(
    ".gallery .h3-separator__line"
);
let pageContentSeparatorText = gsap.utils.toArray(".gallery .h3-separator h3");

const headerTextContent = document.querySelector(
    ".hero-section__header-text-content"
);
const headerTextSeparatorLine = headerTextContent.querySelector(
    ".h3-separator__line"
);
const headerTextH3SeparatorText = headerTextContent.querySelector(
    ".h3-separator"
).querySelector("h3");
const scrollDownBtn = document.querySelector(".hero-section__scroll-down");

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
});

pageContentSeparatorLines.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            start: "-800",
            end: "-200",
            scrub: true,
        },
    }
    )
});

pageContentSeparatorText.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            start: "-800",
            end: "-200",
            scrub: true,
        },
    }
    )
});

gsap.fromTo(headerTextContent, { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: headerTextContent,
        start: "top",
        end: "bottom",
        scrub: true,
    }
});

gsap.fromTo(
    headerTextSeparatorLine,
    { x: 0, opacity: 1 },
    {
        x: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: headerTextContent,
            start: "-20",
            end: "400",
            scrub: true,
        },
    }
);

gsap.fromTo(
    headerTextH3SeparatorText,
    { x: 0, opacity: 1 },
    {
        x: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: headerTextH3SeparatorText,
            start: "-20",
            end: "400",
            scrub: true,
        }
    }
);

document.addEventListener("scroll", function() {
    let documentHeight = (
        document.documentElement.scrollHeight - window.innerHeight
    );

    let scrollTop = window.scrollY;

    let scrollPercent = scrollTop / documentHeight;

    let activeIndicator = document.querySelector(
        ".page-scroll-indicatior__active-section"
    );

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
        let documentHeight = (
            document.documentElement.scrollHeight - window.innerHeight
        );

        let scrollAmount = documentHeight * 0.3;

        window.scrollTo({
            top: scrollAmount,
            behavior: "smooth",
        });
})