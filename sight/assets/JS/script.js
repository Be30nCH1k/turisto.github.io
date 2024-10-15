
let option = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

//обратный вызов
let callback = function(entries,observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}

let observe = new IntersectionObserver(callback, option); //Наблюдатель


let targets = document.querySelectorAll('.animate_a,.animate_img,.animate_title,.animate_text,.animate_h1,.animate_text_two,.animate_tomsk')
targets.forEach(target => {
    observe.observe(target)
})

const searchInput = document.getElementById('searchInput');
const infoSections = document.querySelectorAll('.info__main');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    infoSections.forEach(section => {
        const title = section.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})