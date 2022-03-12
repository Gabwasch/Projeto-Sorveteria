const debounce = function(func, wait, imediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            temeout = null;
            if (!imediate) func.apply(context, args);
        };
        const callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeput = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200))
}
