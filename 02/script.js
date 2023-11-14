function cal() {

    let weight = document.getElementById("weight").value; 
    let height = document.getElementById("height").value; 
    let answer = document.getElementById("answer");
    let condition ;
    let advise;

    height *= 0.01;

    let bmi = Number(weight)/(Number(height)*Number(height));
    
    if(bmi<18.5){
        condition = "Underweight";
        advise = "Meet your doctor."
        document.getElementById("answer").style.color="red";
    }
    else if(bmi>18.5 && bmi<24.9){
        condition = "Normal";
        advise = "You are a healthy person. Keep it up."
        document.getElementById("answer").style.color="green";
    }
    else if(bmi>25 && bmi<29.9){
        condition = "Overweight";
        advise = "Meet your doctor."
        document.getElementById("answer").style.color="red";
    }
    else if(bmi>30){
        condition = "Obese";
        advise = "Meet your doctor."
        document.getElementById("answer").style.color="red";
    }


    answer.innerHTML = "Your BMI is "+ bmi.toFixed(2) + " and your condition is "+ condition + ". "+advise;
}