var price = 20000;
document.getElementById('price').innerHTML = price;

var options = document.getElementById('carform').querySelectorAll('input');
for(var i=0; i<options.length; i++){
	options[i].onclick = handleOption;
}

function handleOption(){
	var itemPrice = Number(this.value);
	if(this.checked){
		price += itemPrice;
	}
	else{
		price -= itemPrice;
	}

	showSelections();
	document.getElementById('price').innerHTML = price;
}

function showSelections(){
	var list = [];
	var checkedOnes = document.getElementById('carform').querySelectorAll('input:checked');
	for(var i=0; i<checkedOnes.length; i++){
		var itemname = checkedOnes[i].getAttribute('data-itemname');
		list.push(itemname);
	}
	document.getElementById('selections').innerHTML = list.join('<br>');
}