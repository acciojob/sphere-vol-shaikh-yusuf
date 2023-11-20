function volume_sphere() {
    //Write your code here
	// Get the radius value from the input field
      var radius = parseFloat(document.getElementById('radius').value);

      // Check if the input is a valid number
      if (isNaN(radius) || radius <= 0) {
        console.log("Please enter a valid positive number for the radius.");
        return;
      }

      // Calculate the volume of the sphere
      var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      // Display the volume in the output field
      document.getElementById('volume').value = volume.toFixed(2);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
