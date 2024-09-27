//console.log(window);
//alert('hello , welcome')

// single element

//const form = document.getElementById('my-form');
//console.log(form);

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));

// multiple element
    //console.log(document.querySelectorAll('.item'));

    //console.log(document.getElementsByClassName('.item'));
    //console.log(document.getElementsByTagName('.item'));

    //const items = document.querySelectorAll('.item');
    //items.forEach((item) => console.log(item));


    const ul = document.querySelector('.items')
    //ul.remove();
    //ul.lastElementChild.remove();
    ul.firstElementChild.textContent = 'Hello';
    ul.children[1].innerText = 'Hai';
    ul.lastElementChild.innerHTML = '<h1>Hello<h1>';

    const btn = document.querySelector('.btn');
    btn.style.background = 'red' ;

    btn.addEventListener('mouseover', (e) => {
        e.preventDefault()
        console.log(e.target);
        document.querySelector('#my-form').style.background = 'black';
        document.querySelector('.items')
        .lastElementChild.innerHTML='<h1>Good Morning</h1>';
    });

