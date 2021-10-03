var ul = document.getElementById('list');
var li;


var addbtn = document.getElementById('add');
addbtn.addEventListener('click' , addItem);

var removebtn = document.getElementById('remove');
removebtn.addEventListener('click' , removeItem);

function removeItem(){
     li = ul.children;
     for (let index = 0; index < li.length; index++) {
         while(li[index] && li[index].children[0].checked){
             ul.removeChild(li[index]);
         }
         
     }
}
function addItem (){
    var input = document.getElementById('input');
    var item = input.value;
    var textNode = document.createTextNode(item);

    if(item === ''){
        return false;
    }
    else{
        li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check';

        var label= document.createElement('label');

        ul.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        console.log(ul);

        input.value = '';

    }
}