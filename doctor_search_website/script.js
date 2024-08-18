document.getElementById('search-button').addEventListener('click', searchDoctors);

const doctors = [
  { name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  { name: 'Dr. Emily Johnson', specialization: 'Neurologist' },
  { name: 'Dr. Michael Brown', specialization: 'Pediatrician' }
];

function searchDoctors() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const results = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(query) || 
    doctor.specialization.toLowerCase().includes(query)
  );

  displayResults(results);
}

function displayResults(results) {
  const resultsList = document.getElementById('results-list');
  resultsList.innerHTML = '';

  if (results.length > 0) {
    results.forEach(doctor => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `${doctor.name} - ${doctor.specialization}`;
      resultsList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = 'No results found';
    resultsList.appendChild(li);
  }
}
