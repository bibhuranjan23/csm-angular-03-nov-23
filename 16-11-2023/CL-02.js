function fetchData( url , callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}

const apiUrl = 'https://fakestoreapi.com/products/1';
fetchData(apiUrl, function(data) {
  console.log('Fetched data:', data);
});
