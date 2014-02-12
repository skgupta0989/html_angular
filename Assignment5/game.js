
var text1 , text2 ;
function disabled() {
	document.getElementById("drop2").disabled = true;
}

function TextBox1(){
    
	var TextBox1Value = new Array();
	TextBox1Value[0] = "cat";
	TextBox1Value[1] = "lion";
	TextBox1Value[2] = "tiger";
	TextBox1Value[3] = "dog";
	TextBox1Value[4] = "monkey";

	text1 = document.getElementById("textBox1");
	var dlist1 = document.getElementById("drop1");
	var value1 = dlist1.options[dlist1.selectedIndex].value;
		if(value1==0)
		{
			text1.value = "";
			
		}
	    else if(value1==1)
	    {
	    	text1.value = TextBox1Value[0];	
	    	document.getElementById("drop2").disabled = false;
	    }
		
		else if(value1==2)
		{
			text1.value = TextBox1Value[1];
			document.getElementById("drop2").disabled = false;
		}
		
		else if(value1==3)
		{
			text1.value = TextBox1Value[2];
			document.getElementById("drop2").disabled = false;
		}
				
		else if(value1==4)
		{
			text1.value = TextBox1Value[3];
			document.getElementById("drop2").disabled = false;
		}
					
		else 
			text1.value = TextBox1Value[4];
			document.getElementById("drop2").disabled = false;
}

function TextBox2(){
    
	var TextBox2Value = new Array();
	TextBox2Value[0] = "monkey";
	TextBox2Value[1] = "dog";
	TextBox2Value[2] = "tiger";
	TextBox2Value[3] = "lion";
	TextBox2Value[4] = "cat";

	text2 = document.getElementById("textBox2");
	var dlist2 = document.getElementById("drop2");
	var value2 = dlist2.options[dlist2.selectedIndex].value;
	if(value2==0)
		text2.value = "";
	else if(value2==1)
	{
		text2.value = TextBox2Value[0];
	}
		
	else if(value2==2)
	{
		text2.value = TextBox2Value[1];
	}
			
	else if(value2==3)
	{
		text2.value = TextBox2Value[2];
	}
				
	else if(value2==4)
	{
		text2.value = TextBox2Value[3];
	}
					
	else 
		text2.value = TextBox2Value[4];

    setTimeout(function(){
	if(text1.value == text2.value){
		var r=confirm("Congratulates you won . Do u wanna play again?");
            if (r==true)
               {
               	 window.location.reload(true);
               	 
                 text1.value = "";
                 text2.value = "";
               }
            else
               {
                 window.location = "thanks.html"
               }

	}
	else{
		var r=confirm("You Lost !!! Do u wanna play again?");
            if (r==true)
               {
               	 
               	 window.location.reload(true);
               	 document.getElementById("playButton").value="Play Again !";
                 text1.value = "";
                 text2.value = "";
               	 
               	 
               }
            else
               {
                 window.location = "chicken.html"
               }
	}
	},2000);

}

