Travelo
Travelo is a web application that provides travel planning services including coordinates, weather information, images, and flight data. It uses various APIs to fetch data and serves a static client-side application.

Features
Coordinates Lookup: Get latitude and longitude for a given location.
Weather Information: Retrieve weather data for specified coordinates and date.
Image Search: Get an image URL related to a specific location.
Flight Search: Find flights based on origin, destination, and travel dates.
Static Files: Serve HTML, CSS, and JavaScript files for the client-side application.
Installation
Clone the repository:

bash
  
git clone https://github.com/Mohammadsabbah1/travelo.git
cd travelo
Install dependencies:

bash
  
npm install
Set up environment variables:
Create a .env file in the root directory and add your API keys:

plaintext
  
GEONAMES_USERNAME=your_geonames_username
WEATHERBIT_API_KEY=your_weatherbit_api_key
PIXABAY_API_KEY=your_pixabay_api_key
AMADEUS_API_KEY=your_amadeus_api_key
Usage
Start the server:

bash
  
npm start
The server will run on port 3000 by default.

Endpoints:

GET /: Serve the main HTML file.
POST /coordinates: Get coordinates based on location.
Request body: { "location": "City Name" }
POST /weather: Get weather data for coordinates and date.
Request body: { "lat": 0, "lng": 0, "date": "YYYY-MM-DD" }
POST /image: Get an image URL based on location.
Request body: { "location": "City Name" }
POST /flights: Get flight data based on origin, destination, and dates.
Request body: { "origin": "City A", "destination": "City B", "departDate": "YYYY-MM-DD", "returnDate": "YYYY-MM-DD" }
GET /airports: Serve the airports JSON file.
Testing
To run tests, use:

bash
  
npm test
Troubleshooting
If you encounter issues, ensure:

Your environment variables are correctly set.
The server is not already running on port 3000.
For detailed error logs, check the console output.

https://github.com/user-attachments/assets/6c193ab8-b59e-48b5-a077-c87ffa2d6a90

