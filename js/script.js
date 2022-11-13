//liste varsa gelsin
var itemsArray = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];
if(itemsArray.length > 0){
	//gorev bulduk html olusturuyoruz
	itemsArray.forEach(function(gorev){
		var li=document.createElement("li");
		//remove
		let removeBtn = document.createElement("span");
		removeBtn.classList.add("close");
		let txt = document.createTextNode("\u00D7");
		removeBtn.appendChild(txt);
		// Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
		li.textContent = gorev;
		// appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
		document.getElementById('list').appendChild(li);
		li.appendChild(removeBtn);
		$('#liveToastError').toast('hide');
		$('#liveToastSuccess').toast('show');
		
		removeBtn.addEventListener("click", gorevKaldir);
		function gorevKaldir() {
			let onay = window.confirm("Görevi kaldırmak istediğinizden emin misiniz?");
			if (onay) {
				li.remove();
			}
		}
		
		li.addEventListener("click", selectedTodoElement);
		function selectedTodoElement(){
			li.classList.toggle("checked");
		}
	});
}

function saveElements(){
	localStorage.clear();
	localStorage.setItem('todolist', JSON.stringify(itemsArray));
}
function newElement(){
	var todo = document.getElementById('task').value;
	if(todo.length < 1){
		$('#liveToastSuccess').toast('hide');
		$('#liveToastError').toast('show');
	}else{
		var li=document.createElement("li");
		let removeBtn = document.createElement("span");
		removeBtn.classList.add("close");
		let txt = document.createTextNode("\u00D7");
		removeBtn.appendChild(txt);
		// Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
		li.textContent = todo;
		// appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
		document.getElementById('list').appendChild(li);
		itemsArray.push(todo);
		//sil dugmesini son eklenen gorev listesinin sonuna ekliyoruz
		li.appendChild(removeBtn);
		$('#liveToastError').toast('hide');
		$('#liveToastSuccess').toast('show');
		//sil dugmesi silme fonksiyonu
		removeBtn.addEventListener("click", gorevKaldir);
		function gorevKaldir() {
			let surethat = window.confirm("Bu görevi kaldırmak istediğinizden emin misiniz?");
			if (surethat) {
				li.remove();
			}
		}
		//gorev listesi secme fonksiyonu
		li.addEventListener("click", selectedTodoElement);
		function selectedTodoElement(){
			li.classList.toggle("checked");
		}
	}
}