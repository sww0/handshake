function toImg(url) {
    return `<img class="hand" src="images/${url}">`;
}
function search() {
    var result = document.getElementById('images');
    result.innerHTML = '';
    var str = document.getElementById('inputStr').value;
    str = str.split('');
    for (var i in str) {
        str[i] = str[i].toLowerCase();
		
		if(str[i] != ' ')
			result.innerHTML += toImg(str[i] + '.png');
		//else
			//result.innerHTML += toImg('space_test.jpg');
		result.innerHTML += ' ';
    }
}