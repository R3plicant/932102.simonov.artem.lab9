document.addEventListener('DOMContentLoaded', function() {
const output = document.querySelector('#output');
const del = document.querySelector('#del');
const eq = document.querySelector('#eq');

del.addEventListener('click', function(){
    out = output.value;
    out = out.slice(0, -1);
    output.value = out;
});

function IsSpecial(c){
	if ((c == ".") || (c == "*") || (c== "/") || (c == "+") || (c == "-"))
		return 1;
	else
		return 0;
}

eq.addEventListener('click', function(){
    var array = output.value;
	for (i = 1; i < array.length; i++) {
		if (IsSpecial(array[i]) && IsSpecial(array[i-1])){
			alert("Error: Special characters cannot be placed twice in a row");
			return 0;
		}
	}
    output.value = eval(output.value);
});

});
