document.addEventListener('DOMContentLoaded', function() {
const output = document.querySelector('#output');
const del = document.querySelector('#del');
const eq = document.querySelector('#eq');

del.addEventListener('click', function(){
    out = output.value;
    out = out.slice(0, -1);
    output.value = out;
});

eq.addEventListener('click', function(){
    output.value = eval(output.value);
});

});
