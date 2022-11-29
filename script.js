
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

//Work with the theme colours now 
const $theme_color = document.getElementById('theme_color')
const $body = document.getElementById('body')
$theme_color.addEventListener('change', function(e) {

    if (
        e.target.value === 'dark' 
    )
        $body.className = 'dark'

    else if (
        e.target.value === 'grey'
    )
        $body.className = 'grey'

    else if (
        e.target.value === 'light'
    )
        $body.className = 'light'

})



//Work with the list styles now 
const $list_style = document.getElementById('list_style')
const $list = document.getElementById('list')

$list_style.addEventListener('change', function (e) {
    if (
        e.target.value === 'compact'
    )
        $list.className = 'compact'

    else if (
        e.target.value === 'expanded'
    )
        $list.className = 'expanded'

    else if (
        e.target.value === 'optimal'
    )
        $list.className = 'optimal'

})

