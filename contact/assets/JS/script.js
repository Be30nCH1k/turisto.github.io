document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

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

let modal = document.getElementById("modal");
let btn = document.getElementById("open");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    modal.style.overflowY = "hidden";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}