 function calculateBMI() {
      var gender = document.getElementById("gender").value;
      var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
      var weight = parseFloat(document.getElementById("weight").value);
      
      var bmi = weight / (height * height);
      bmi = bmi.toFixed(2);
      
      var resultElement = document.getElementById("result");
      resultElement.textContent = "Your BMI is: " + bmi + " kg/m²";
    }
