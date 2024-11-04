function showTodayEnergyData() {
  // Send AJAX request to server-side API endpoint
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/today-energy-data');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const energyData = response.data;

        // Update UI with energy data
        const energyDataDiv = document.getElementById('energyData');
        energyDataDiv.innerHTML = 'Energy: ' + energyData.energy + ' kWh<br>Date: ' + energyData.date;
      } else {
        console.error('Error:', xhr.status);
      }
    }
  };
  xhr.send();
}
