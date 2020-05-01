	window.onload = init;
		function init(){
			var pencacah = 1
			var teks = ""

			while(pencacah < 15){
			teks = teks + pencacah + ". javascript" + "<br>\n"
			pencacah = pencacah + 1

		}
		var infohtml = document.getElementById('id')
		infohtml.innerHTML = teks

		}