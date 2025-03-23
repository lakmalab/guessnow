
let tries = 3

let number = Math.floor(Math.random() * 10);



    function clickhello(){
        let guesed = document.getElementById("hello3").value
      
        document.getElementById("tries").innerText = "Tries Left : " + tries 
        tries = tries - 1
        if  (tries < 0 ){
            document.getElementById("hello2").innerText=  "You Lose"
            tries = 3
            alert("You Lose")
            document.getElementById("tries").innerText = "Tries Left : " + tries 
        }
        if (guesed == number){
            document.getElementById("hello2").innerText=  "Congratualation You Won!!!!"
            tries = 3
            document.getElementById("tries").innerText = "Tries Left : " + tries 
        } else if  (guesed > number ){
            document.getElementById("hello2").innerText=  "YOur number is greater"
        } else if  (guesed < number){
            document.getElementById("hello2").innerText=  "YOur number is Lower"
        }else{
             document.getElementById("hello2").innerText=  "Enter Valid number"
        }

    }
    