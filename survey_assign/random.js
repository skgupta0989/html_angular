function randomFunction() {
	
	var x=document.getElementById("loop").value;
	var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,k=0,j=0;
	
	for (var i = 1; i <= x; i++) {
		var y = Math.floor((Math.random()*10)+1);
		// alert (+y);
		document.getElementById("col21").value = i;
		if (y == 1) {
			var a = a+1;
			document.getElementById("col1").value = a;
			var z = (a/x)*100;
			document.getElementById("col11").value = z;

			 var growImg = document.getElementById('imageResize');
			if(growImg && growImg.style) {
   			 growImg.style.height = a+'px';
    		
			}
		} 
		else if (y == 2) {
			var b = b+1;
			document.getElementById("col2").value = b;
			var z = (b/x)*100;
			document.getElementById("col12").value = z;

			var growImg = document.getElementById('imageResize1');
			if(growImg && growImg.style) {
   			 growImg.style.height = b+'px';
    		
			}
		} 
		else if (y == 3){
			var c = c+1;
			document.getElementById("col3").value = c;
			var z = (c/x)*100;
			document.getElementById("col13").value = z;

			var growImg = document.getElementById('imageResize2');
			if(growImg && growImg.style) {
   			 growImg.style.height = c+'px';
    		
			}
		}
		else if (y == 4){
			var d = d+1;
			document.getElementById("col4").value = d;
			var z = (d/x)*100;
			document.getElementById("col14").value = z;

			var growImg = document.getElementById('imageResize3');
			if(growImg && growImg.style) {
   			 growImg.style.height = d+'px';
    		
			}
		}
		else if (y == 5){
			var e = e+1;
			document.getElementById("col5").value = e;
			var z = (e/x)*100;
			document.getElementById("col15").value = z;

			var growImg = document.getElementById('imageResize4');
			if(growImg && growImg.style) {
   			 growImg.style.height = e+'px';
    		
			}
		}
		else if (y == 6){
			var f = f+1;
			document.getElementById("col6").value = f;
			var z = (f/x)*100;
			document.getElementById("col16").value = z;

			var growImg = document.getElementById('imageResize5');
			if(growImg && growImg.style) {
   			 growImg.style.height = f+'px';
    		
			}
		}
		else if (y == 7){
			var g = g+1;
			document.getElementById("col7").value = g;
			var z = (g/x)*100;
			document.getElementById("col17").value = z;

			var growImg = document.getElementById('imageResize6');
			if(growImg && growImg.style) {
   			 growImg.style.height = g+'px';
    		
			}
		}
		else if (y == 8){
			var h = h+1;
			document.getElementById("col8").value = h;
			var z = (h/x)*100;
			document.getElementById("col18").value = z;

			var growImg = document.getElementById('imageResize7');
			if(growImg && growImg.style) {
   			 growImg.style.height = h+'px';
    		
			}
		}
		else if (y == 9){
			var k = k+1;
			document.getElementById("col9").value = k;
			var z = (k/x)*100;
			document.getElementById("col19").value = z;

			var growImg = document.getElementById('imageResize8');
			if(growImg && growImg.style) {
   			 growImg.style.height = k+'px';
    		
			}
		}
		else if (y == 10){
			var j = j+1;
			document.getElementById("col10").value = j;
			var z = (j/x)*100;
			document.getElementById("col20").value = z;

			var growImg = document.getElementById('imageResize9');
			if(growImg && growImg.style) {
   			 growImg.style.height = j+'px';
    		
			}

		};
	}
		
	
}