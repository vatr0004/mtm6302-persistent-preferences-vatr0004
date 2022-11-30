
const arr = ['Red', 'Green', 'Blue', 'Pink', 'Purple', 'Yellow'];
const cont = document.getElementById('list');


const ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 0; margin: 0;');


for (i = 0; i <= arr.length - 1; i++) {
    const li = document.createElement('li');
    li.innerHTML = arr[i];
    li.setAttribute('style', 'display: block;');

    ul.appendChild(li);

}

cont.appendChild(ul);

const $body = document.getElementById('body');
const $theme_color = document.getElementById('theme_color');
const $list = document.getElementById('list');
const $list_style = document.getElementById('list_style');

if (typeof(Storage) !== "undefined") {
    $theme_color.value = localStorage.getItem('theme_color');
    $body.className = localStorage.getItem('theme_color');
    $list_style.value = localStorage.getItem('list_style');
    $list.className = localStorage.getItem('list_style');
}

//Work with the theme colours now 
$theme_color.addEventListener('change', function(e) {
    if (e.target.value != "") {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('theme_color', e.target.value);
        }
        $body.className = e.target.value;
    }
})

//Work with the list styles now 
$list_style.addEventListener('change', function (e) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('list_style', e.target.value);
    }
    $list.className = e.target.value;
})
