function ajaxRequest(str){

 
    var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      
      xmlhttp=new XMLHttpRequest();
    }
  else
   {// code for IE6, IE5
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            
            var jsondata=xmlhttp.responseText //retrieve result as an JavaScript object
            obj = JSON.parse(jsondata);

             // alert(obj.options[0]);
          
             if(obj.questionType == "CheckBox")
                {
                  var ques = obj.questionTitle;
                  var opt = obj.options;
                  multipleChoice(ques,opt);
                }
             else if(obj.questionType =="DropDown")
                {
                  var ques = obj.questionTitle;
                  var opt = obj.options;
                  dropdown(ques,opt);


                } 
            else if(obj.questionType == "SingleText") 
                {
                  var ques = obj.questionTitle;
                  var opt = obj.options;
                  textBox(ques,opt);

                } 
            else if(obj.questionType == "Radio")
                {
                  var ques = obj.questionTitle;
                  var opt = obj.options;
                  createRadio(ques,opt);

                }
          
         
         }
    }


   xmlhttp.open("GET", "http://10.132.160.182:8080/Question/Question?questionType="+str, true)
  xmlhttp.send()
    
}

function multipleChoice (a,b) {
      // body...
      var question = a;

              var objDiv = document.getElementById("radioDiv"); 
              objDiv.innerHTML ="";

              var heading = document.createElement("h3"); 
              var thirdQues = document.createTextNode(question);
              heading.appendChild(thirdQues);

              var checkbox1 = document.createElement("input");  
                  checkbox1.type = "checkbox";  
                  checkbox1.name = "checkGrp";  
                  checkbox1.id = "check1";  
                  checkbox1.value = b[0];

                  var checkbox2 = document.createElement("input");  
                  checkbox2.type = "checkbox";  
                  checkbox2.name = "checkGrp";  
                  checkbox2.id = "check2";  
                  checkbox2.value = b[1];

                  var checkbox3 = document.createElement("input");  
                  checkbox3.type = "checkbox";  
                  checkbox3.name = "checkGrp";  
                  checkbox3.id = "check3";  
                  checkbox3.value = b[2];


                  var checkbox4 = document.createElement("input");  
                  checkbox4.type = "checkbox";  
                  checkbox4.name = "checkGrp";  
                  checkbox4.id = "check4";  
                  checkbox4.value = b[3];

                  var objTextNode1 = document.createTextNode(b[0]);  
                  var objTextNode2 = document.createTextNode(b[1]);  
                  var objTextNode3 = document.createTextNode(b[2]); 
                  var objTextNode4 = document.createTextNode(b[3]); 
 
                  var objLabel = document.createElement("label");  
                  objLabel.htmlFor = checkbox1.id;  
                  objLabel.appendChild(checkbox1);  
                  objLabel.appendChild(objTextNode1); 

                  var objLabel2 = document.createElement("label");  
                  objLabel2.htmlFor = checkbox2.id;  
                  objLabel2.appendChild(checkbox2);  
                  objLabel2.appendChild(objTextNode2);  

                  var objLabel3 = document.createElement("label");  
                  objLabel3.htmlFor = checkbox3.id;  
                  objLabel3.appendChild(checkbox3);  
                  objLabel3.appendChild(objTextNode3); 

                  var objLabel4 = document.createElement("label");  
                  objLabel4.htmlFor = checkbox4.id;  
                  objLabel4.appendChild(checkbox4);  
                  objLabel4.appendChild(objTextNode4); 

                  var newAddButton = document.createElement('input');
                   newAddButton.type = "button";
                  newAddButton.value = " submitt ";
                  newAddButton.setAttribute('onclick','clickFunction1();');



         
                  objDiv.appendChild(heading);

                  var br = document.createElement("br");
                  objDiv.appendChild(br);
                  objDiv.appendChild(br);

                  objDiv.appendChild(objLabel);  
                  var br = document.createElement("br");
                  objDiv.appendChild(br);
                  objDiv.appendChild(objLabel2); 
                  var br = document.createElement("br");
                  objDiv.appendChild(br); 
                  objDiv.appendChild(objLabel3);
                  var br = document.createElement("br");
                  objDiv.appendChild(br);  
                  objDiv.appendChild(objLabel4);  
                  var br = document.createElement("br");
                  objDiv.appendChild(br);  

                  objDiv.appendChild(newAddButton);


}

function clickFunction1 () {
      // body...
      
      var chks = document.getElementsByName('checkGrp');
      var val = new Array();
     
      for (var i = 0; i < chks.length; i++)
      {
            if (chks[i].checked)
            {
                  val[i] = chks[i].value;

                
            // break;
            }
      }
      if (val.length >0) {
             alert("hi you selected : " +val);


      } else{
            alert("Please select at least one.");
      };
     
     
}

function dropdown(a,b){

            
            var question = a;

              var objDiv = document.getElementById("radioDiv"); 
              objDiv.innerHTML ="";

              var heading = document.createElement("h3"); 
              var secQues = document.createTextNode(question);
              heading.appendChild(secQues);

           
            var newDropdown = document.createElement('select');
            newDropdown.id = "selectVal";

            newDropdownOption = document.createElement("option");
            newDropdownOption.value = "value";
            newDropdownOption.text = "select answer";
         

                                          

            newDropdownOption1 = document.createElement("option");
            newDropdownOption1.value = "value1";
            newDropdownOption1.text = b[0];
           

            newDropdownOption2 = document.createElement("option");
            newDropdownOption2.value = "value2";
            newDropdownOption2.text = b[1];

            newDropdownOption3 = document.createElement("option");
            newDropdownOption3.value = "value3";
            newDropdownOption3.text = b[2];

            newDropdownOption4 = document.createElement("option");
            newDropdownOption4.value = "value4";
            newDropdownOption4.text = b[3];


            newDropdown.add(newDropdownOption);
            newDropdown.add(newDropdownOption1);
            newDropdown.add(newDropdownOption2);
            newDropdown.add(newDropdownOption3);
            newDropdown.add(newDropdownOption4);


            var newAddButton = document.createElement('input');
            newAddButton.type = "button";
            newAddButton.value = " submitt ";
            newAddButton.setAttribute('onclick','validate();');


             objDiv.appendChild(heading); 
             var br = document.createElement("br");
              objDiv.appendChild(br);
              objDiv.appendChild(br);
              objDiv.appendChild(newDropdown);
              var br = document.createElement("br");
              objDiv.appendChild(br);
              objDiv.appendChild(newAddButton);
           
        
}

function validate(){
       
      var e = document.getElementById("selectVal");
       var strUser = e.options[e.selectedIndex].text;
       if (strUser == "select answer") {
            alert("please select any option");
       } else{
            alert("hi u selected :"+strUser);
       };
       
}

function textBox(a,b){

       var question = a;

              var objDiv = document.getElementById("radioDiv"); 
              objDiv.innerHTML ="";

              var heading = document.createElement("h3"); 
              var thirdQues = document.createTextNode(question);
              heading.appendChild(thirdQues);

              var textbox = document.createElement("input");
              textbox.type = "text";
              textbox.id = "textVal";
              textbox.value = "";
              textbox.name = "value";

              var option = document.createTextNode("enter your answer");


              var objLabel = document.createElement("label");  
                  objLabel.htmlFor = textbox.id;  
                  objLabel.appendChild(textbox);  
                   objLabel.appendChild(option); 


             var newAddButton = document.createElement('input');
                   newAddButton.type = "button";
                  newAddButton.value = " submitt ";
                   newAddButton.setAttribute('onclick','validateText();');

              objDiv.appendChild(heading);

              var br = document.createElement("br");
              objDiv.appendChild(br);
              objDiv.appendChild(br);

              objDiv.appendChild(objLabel);
              objDiv.appendChild(textbox);

              var br = document.createElement("br");
              objDiv.appendChild(br);

              objDiv.appendChild(newAddButton);



}

function validateText (argument) {
      var answer = document.getElementById("textVal").value;
      if (answer =="") {
            alert("please enter your answer");
      } else{
            alert("hi you entered :" +answer);
      };
      
      
}

function createRadio(a,b){ 

// var question = this is sample survey question; 

       var question = a;

       var objDiv = document.getElementById("radioDiv"); 
       objDiv.innerHTML =""; 

       var heading = document.createElement("h3"); 
       var firstQues = document.createTextNode(question);
       heading.appendChild(firstQues);


         
       var radioItem1 = document.createElement("input");  
       radioItem1.type = "radio";  
       radioItem1.name = "radioGrp";  
       radioItem1.id = "rad1";  
       radioItem1.value = b[0];
       // radioItem1.setAttribute('onclick','clickFunction();');  
       radioItem1.defaultChecked = false;   
       radioItem1.checked = false;  
 
       var radioItem2 = document.createElement("input");  
       radioItem2.type = "radio";  
       radioItem2.name = "radioGrp";  
       radioItem2.id = "rad2";  
       radioItem2.value = b[1]; 
       // radioItem2.setAttribute('onclick','clickFunction();'); 

       
       var objTextNode1 = document.createTextNode(b[0]);  
       var objTextNode2 = document.createTextNode(b[1]);  
       
       var objLabel = document.createElement("label");  
       objLabel.htmlFor = radioItem1.id;  
       objLabel.appendChild(radioItem1);  
       objLabel.appendChild(objTextNode1); 
       var objLabel2 = document.createElement("label");  
       objLabel2.htmlFor = radioItem2.id;  
       objLabel2.appendChild(radioItem2);  
       objLabel2.appendChild(objTextNode2);  

      
       var newAddButton = document.createElement('input');
             newAddButton.type = "button";
            newAddButton.value = " submitt ";
             newAddButton.setAttribute('onclick','clickFunction();');



         
       objDiv.appendChild(heading);

       var br = document.createElement("br");
       objDiv.appendChild(br);
       objDiv.appendChild(br);

       objDiv.appendChild(objLabel);  
       var br = document.createElement("br");
       objDiv.appendChild(br);
       objDiv.appendChild(objLabel2); 
       
       var br = document.createElement("br");
       objDiv.appendChild(br);  

       objDiv.appendChild(newAddButton);


 
}  

function clickFunction(){

      var radios = document.getElementsByName("radioGrp");
        var found = 1;
        // var answer = new Array();

        for (var i = 0; i < radios.length; i++) {       
            if (radios[i].checked) {
                  
                alert("you selected :"+radios[i].value);
                found = 0;
                break;
            }
        }
        
        if(found == 1) {
            alert("Please Select your option");
        }    
       // alert("hi u selected " +answer );
}


