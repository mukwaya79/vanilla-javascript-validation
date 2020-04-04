function Validate(){
    var firstName = document.forms.name.value;
    var lastName = document.forms.ln.value;
    var password = document.forms.password.value;
    var confirm = document.forms.cp.value;
    var email = document.forms.email.value;
    var mobile = document.forms.num.value;
    var address = document.forms.address.value;
    var gender = document.forms.g.value;
    //var hobby1 = document.forms.x.value;
    var date = document.forms.datetoday.value
    var country = document.forms.country.value;
    var file = document.forms.file.value;
    var messages =document.getElementById("messages");
    var text;
   
    if (firstName == 0 || firstName == null){
      text = "FILL IN FIRST NAME";
      messages.innerHTML=text;
      return false;
    }
    if(!isNaN(firstName)){ 
        text="Use characters as firstname";
        messages.innerHTML= text;
         return false;
     }
    if(lastName == 0 || lastName == null){
        text = "FILL IN LAST NAME"
        messages.innerHTML=text;
    }
    if(firstName.length < 3){
       text= "Invalid Name";
       messages.innerHTML=text;
        return false;
    }
    if(!isNaN(lastName)){ 
        text= "Only Characters as lastname";
        messages.innerHTML= text;
         return false;
 }
    if(lastName.length < 3){
        text= "Invalid last Name";
        messages.innerHTML=text;
        return false;
    }
    if(password == 0 || password ==null){
        text ="Blank Password not allowed"
        messages.innerHTML=text;
    }
    if(password.length < 5){
       text= "Password is too short";
       messages.innerHTML= text;
        return false;
    }
     if(password != confirm){
           text= "The passwords dont Match";
           messages.innerHTML= text;
           return false;
            }
    if(email ==0 || email == null){
        text="Enter Email";
        messages.innerHTML=text;
        return false;
    }
    if(mobile == 0 || mobile == null){
      text="Enter Mobile";
      messages.innerHTML=text;
      return false;
    }
    if(isNaN(mobile)){ 
       text="Only digits are allowed";
       messages.innerHTML= text;
        return false;
    }
    if(mobile.length >11){ 
        text= "The mobile number must be less than 11";
        messages.innerHTML= text;
        return false;
    }
    if(address == 0 || address == null){
        text="Enter address";
        messages.innerHTML=text;
        return false;
    }
    
    if(email.indexOf("@") <= 0){ 
      text="Email ID is required";
      messages.innerHTML= text;
     return false;
    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
       text= "Invalid Email Address";
       messages.innerHTML= text;
        return false;
    }
    if(date ==0 || date == null){
        text="Enter date";
        messages.innerHTML=text;
        return false;
    }
     if(gender == null || gender == 0){
            text="Pick Gender";
            messages.innerHTML= text;
            return false;
      }
     
    if(country == null || country == 0){
        text="Select Country";
        messages.innerHTML= text;
        return false;
    } 
    if(file == 0 || file == null){
        text="Upload File";
        messages.innerHTML= text;
        return false;
    
    }
   alert("Your data is sucessfully submited");
    return true;
}  




