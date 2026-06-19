// Function to Calculate Age
const ageCalculate = () => {
  const today = new Date();
  
  // Get the user-input birth date
  const inputDate = new Date(document.getElementById("date-input").value);
  
  // Convert dates to milliseconds 
  const birthTime = inputDate.getTime();
  const currentTime = today.getTime();
  
  // Check if birth date is valid
  if(birthTime > currentTime){
    alert("Please Enter a Valid Date");
    displayResult("-", "-", "-"); 
    return;
  }
  
  // When no birth date is entered, nothing will change 
 
  
  // Calculate the time difference in milliseconds
  const diffTime = currentTime - birthTime;
  
  // Calculate years, months and days from the time difference
  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 356));
  const months = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 356)) / (1000 * 60 * 60 * 24 * 30.44)
    );
  const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  
  // Display the calculated age
  displayResult(days, months, years);
};


// Function to display the age result
const displayResult = (days, months, years) => {
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
};

// Attach Age Calculator function to the button click event
document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);