/* Add your JavaScript to this file */
window.onload = function(){

    var msg = document.querySelector(".message");
    console.log(msg);
    var subscribe = document.querySelector("button");
    console.log(subscribe);

    subscribe.addEventListener('click', validate);

    function validate(event){
        event.preventDefault();
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mail = document.getElementById("email").value;
        
        

        if (validRegex.test(mail)){
            msg.textContent ='Thank you! Your email address ' + mail +' has been added to our mailing list!'
            return true;
            

        }
        else{
            msg.textContent ="Please enter a valid email address."
            return false;
      
        }
    }
}