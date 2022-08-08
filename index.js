const square = document.querySelectorAll('.square')

square.forEach(el => {
    el.addEventListener('click', () =>  {
        if (el.style.background == 'chartreuse') {
            el.style = `
            background: crimson;
            border-radius: 50%;
            border: 4px solid chartreuse;
            transition: .5s;
            `
        } else {
            el.style = `
            background: chartreuse;
            transition: .5s;
            border-radius: 0;
            `
        }
    })
})