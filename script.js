// Example data
const disasters = [
    { id: 1, type: 'earthquake', location: 'California', severity: 'Severe', time: '2024-09-25 10:30' },
    { id: 2, type: 'flood', location: 'India', severity: 'Moderate', time: '2024-09-25 11:00' },
    { id: 3, type: 'storm', location: 'Philippines', severity: 'Severe', time: '2024-09-25 12:00' },
    { id: 4, type: 'fire', location: 'Australia', severity: 'Severe', time: '2024-09-25 13:00' },
  ];
  
  // Load the disasters dynamically
  function loadDisasters() {
    const disasterList = document.getElementById('disaster-list');
    disasterList.innerHTML = '';
    disasters.forEach(disaster => {
      const disasterItem = document.createElement('div');
      disasterItem.className = 'disaster-item';
      disasterItem.innerHTML = `
        <h3>${disaster.type}</h3>
        <p><strong>Location:</strong> ${disaster.location}</p>
        <p><strong>Severity:</strong> ${disaster.severity}</p>
        <p><strong>Time:</strong> ${disaster.time}</p>
      `;
      disasterList.appendChild(disasterItem);
    });
  }
  
  // Filter disasters based on search and category filter
  function filterDisasters() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    
    const filteredDisasters = disasters.filter(disaster => {
      const matchesSearch = disaster.type.toLowerCase().includes(searchQuery) ||
                            disaster.location.toLowerCase().includes(searchQuery);
      const matchesCategory = !category || disaster.type === category;
      return matchesSearch && matchesCategory;
    });
    
    const disasterList = document.getElementById('disaster-list');
    disasterList.innerHTML = '';
    
    filteredDisasters.forEach(disaster => {
      const disasterItem = document.createElement('div');
      disasterItem.className = 'disaster-item';
      disasterItem.innerHTML = `
        <h3>${disaster.type}</h3>
        <p><strong>Location:</strong> ${disaster.location}</p>
        <p><strong>Severity:</strong> ${disaster.severity}</p>
        <p><strong>Time:</strong> ${disaster.time}</p>
      `;
      disasterList.appendChild(disasterItem);
    });
  }
  
  // Load initial disasters
  window.onload = () => {
    loadDisasters();
  };
  