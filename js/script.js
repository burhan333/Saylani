// FIXED NAVBAR ON SCROLL 

const nav = document.getElementById('nav')

window.onscroll = function ()
{
    if (window.pageYOffset > 100)
    {
        nav.style.position = 'fixed';
        nav.style.top = 0;
    }

    else
    {
        nav.style.position = 'static';
        nav.style.top = 200;
    }
}   



// SLIDER

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let auto = true;
const intervalTime = 4000;
let slideInterval;

function nextSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add('current');
    }
    else
    {
        slides[0].classList.add('current');
    }
}

function prevSlide()
{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add('current');
    }
    else
    {
        slides[slides.length - 1].classList.add('current');
    }
}

next.addEventListener('click', function() {
    nextSlide();
    if(auto)
    {
        clearInterval(slideInterval); // clear interval when we click button
        slideInterval =  setInterval(nextSlide, intervalTime);       
    }
});

prev.addEventListener('click', function() {
    prevSlide();
    if(auto)
    {
        clearInterval(slideInterval); // clear interval when we click button
        slideInterval =  setInterval(nextSlide, intervalTime); 
    }
});
// AUTO SLIDER IF TRUE
if (auto)
{
    // set interval time for next slide and give it to 
    slideInterval =  setInterval(nextSlide, intervalTime);
}



// COUNTER

const counters = document.querySelectorAll('.counter')
const speed = 500;

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 600)
    {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target'); // we used + to convert string into number
                const count = +counter.innerHTML;
        
                const inc = target / speed;
        
                if(count < target)
                {
                    counter.innerHTML = Math.ceil(count + inc); // we used math.ceil to round of the decimals
                    setTimeout(updateCount, 1);
                }
                else
                {
                    count.innerHTML = target;
                }        
            }        
            updateCount();
        });
    }
});

// window.addEventListener('scroll', () => {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;
    
//     if(Math.ceil(scrolled) === scrollable)
//     {
//         alert('hello');
//     }
// });




// GO TO TOP

let top1 = document.querySelector('.goTop')

window.addEventListener('scroll', () =>
{
    if(window.pageYOffset > 100)
    {
        top1.classList.add("active");
    }
    else
    {
        top1.classList.remove("active");
    }
});