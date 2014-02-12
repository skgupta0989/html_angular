function createRadio(){ 

// var question = this is sample survey question; 

       var question = "This is the sample survey question.please give the correct feedback. this is regarding singlr option radio type.";

       var objDiv = document.getElementById("radioDiv"); 
       objDiv.innerHTML =""; 

       var heading = document.createElement("h3"); 
       var firstQues = document.createTextNode(question);
       heading.appendChild(firstQues);


         
       var radioItem1 = document.createElement("input");  
       radioItem1.type = "radio";  
       radioItem1.name = "radioGrp";  
       radioItem1.id = "rad1";  
       radioItem1.value = "Answer1";
       // radioItem1.setAttribute('onclick','clickFunction();');  
       radioItem1.defaultChecked = false;   
       radioItem1.checked = false;  
 
       var radioItem2 = document.createElement("input");  
       radioItem2.type = "radio";  
       radioItem2.name = "radioGrp";  
       radioItem2.id = "rad2";  
       radioItem2.value = "Answer2"; 
       // radioItem2.setAttribute('onclick','clickFunction();'); 

       var radioItem3 = document.createElement("input");  
       radioItem3.type = "radio";  
       radioItem3.name = "radioGrp";  
       radioItem3.id = "rad3";  
       radioItem3.value = "Answer3"; 
       // radioItem3.setAttribute('onclick','clickFunction(this.value);');

       var radioItem4 = document.createElement("input");  
       radioItem4.type = "radio";  
       radioItem4.name = "radioGrp";  
       radioItem4.id = "rad4";  
       radioItem4.value = "Answer4"; 
       // radioItem4.setAttribute('onclick','clickFunction(this.value);');
 
       var objTextNode1 = document.createTextNode("Answer1");  
       var objTextNode2 = document.createTextNode("Answer2");  
       var objTextNode3 = document.createTextNode("Answer3"); 
       var objTextNode4 = document.createTextNode("Answer4"); 
 
       var objLabel = document.createElement("label");  
       objLabel.htmlFor = radioItem1.id;  
       objLabel.appendChild(radioItem1);  
       objLabel.appendChild(objTextNode1); 
       var objLabel2 = document.createElement("label");  
       objLabel2.htmlFor = radioItem2.id;  
       objLabel2.appendChild(radioItem2);  
       objLabel2.appendChild(objTextNode2);  

       var objLabel3 = document.createElement("label");  
       objLabel3.htmlFor = radioItem3.id;  
       objLabel3.appendChild(radioItem3);  
       objLabel3.appendChild(objTextNode3); 

       var objLabel4 = document.createElement("label");  
       objLabel4.htmlFor = radioItem4.id;  
       objLabel4.appendChild(radioItem4);  
       objLabel4.appendChild(objTextNode4); 

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
       objDiv.appendChild(objLabel3);
       var br = document.createElement("br");
       objDiv.appendChild(br);  
       objDiv.appendChild(objLabel4);  
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

function dropdown(){

            
            var question = "This is the sample survey question.please give the correct feedback.This is regarding drop down buttons.";

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
            newDropdownOption1.text = "Answer1";
           

            newDropdownOption2 = document.createElement("option");
            newDropdownOption2.value = "value2";
            newDropdownOption2.text = "Answer2";

            newDropdownOption3 = document.createElement("option");
            newDropdownOption3.value = "value3";
            newDropdownOption3.text = "Answer3";

            newDropdownOption4 = document.createElement("option");
            newDropdownOption4.value = "value4";
            newDropdownOption4.text = "Answer4";


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

function textBox(){

       var question = "This is the sample survey question.please give the correct feedback.This is regarding single line text question.";

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

function multipleChoice () {
      // body...
      var question = "This is the sample survey question.please give the correct feedback.This is regarding multiple choice text question.";

              var objDiv = document.getElementById("radioDiv"); 
              objDiv.innerHTML ="";

              var heading = document.createElement("h3"); 
              var thirdQues = document.createTextNode(question);
              heading.appendChild(thirdQues);

              var checkbox1 = document.createElement("input");  
                  checkbox1.type = "checkbox";  
                  checkbox1.name = "checkGrp";  
                  checkbox1.id = "check1";  
                  checkbox1.value = "Answer1";

                  var checkbox2 = document.createElement("input");  
                  checkbox2.type = "checkbox";  
                  checkbox2.name = "checkGrp";  
                  checkbox2.id = "check2";  
                  checkbox2.value = "Answer2";

                  var checkbox3 = document.createElement("input");  
                  checkbox3.type = "checkbox";  
                  checkbox3.name = "checkGrp";  
                  checkbox3.id = "check3";  
                  checkbox3.value = "Answer3";


                  var checkbox4 = document.createElement("input");  
                  checkbox4.type = "checkbox";  
                  checkbox4.name = "checkGrp";  
                  checkbox4.id = "check4";  
                  checkbox4.value = "Answer4";

                  var objTextNode1 = document.createTextNode("Answer1");  
                  var objTextNode2 = document.createTextNode("Answer2");  
                  var objTextNode3 = document.createTextNode("Answer3"); 
                  var objTextNode4 = document.createTextNode("Answer4"); 
 
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
             alert("hi you selected" +val);


      } else{
            alert("Please select at least one.");
      };
     
     
}