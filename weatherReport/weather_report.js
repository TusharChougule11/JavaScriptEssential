function showweatherDetails(event) {
    event.preventDefault();
}
const city = document.getElementById('city').value;
const apiKey = '181629a2d4aab4d2a9abd103af1f6d78'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = ` document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });