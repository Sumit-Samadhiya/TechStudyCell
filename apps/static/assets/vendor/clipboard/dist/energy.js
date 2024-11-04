function loadEnergyHistory() {
    const selectedDate = document.getElementById('datePicker').value;
  
    // Send AJAX request to server-side API endpoint
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/energy-history?date=' + selectedDate);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const energyHistory = response.data;
  
          // Update UI with energy history information
          const energyHistoryDiv = document.getElementById('energyHistory');
          energyHistoryDiv.innerHTML = ''; // Clear previous data
  
          if (energyHistory.length === 0) {
            energyHistoryDiv.innerHTML = 'No energy history available for the selected date.';
          } else {
            energyHistory.forEach(function(entry) {
              const entryDiv = document.createElement('div');
              entryDiv.innerHTML = 'Energy: ' + entry.energy + ' kWh<br>Date: ' + entry.date + '<hr>';
              energyHistoryDiv.appendChild(entryDiv);
            });
          }
        } else {
          console.error('Error:', xhr.status);
        }
      }
    };
    xhr.send();
  }
  