let shopping_list = [
    'pane',
    'latte',
    'uova',
    'carne',
    'acqua',
    'salsa',
    'pasta',
    'guanciale',
    'pecorino',
]


const container_list = document.getElementById('shopping_list')
let counter = 0;


while (counter < shopping_list.length - 1) {

    counter++;
    let item = shopping_list[counter];
    let container_item = document.createElement('li');
    container_item.innerText = item;
    container_list.appendChild(container_item);
    
}