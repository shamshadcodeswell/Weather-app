# Weather App

A clean, responsive weather application that lets users search for any city worldwide and get real-time weather data. Built with vanilla JavaScript and the Open-Meteo API.

## Features

- Search any city worldwide with live autocomplete suggestions
- Debounced search to limit API calls while typing
- Real-time weather data: temperature, wind speed, humidity, and feels-like temperature
- Two-page flow — search on the first page, weather details on the second
- City coordinates persisted via localStorage across pages

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- [Open-Meteo API](https://open-meteo.com/) — weather data and geocoding

## How It Works

1. The user types a city name; a debounced fetch hits the Open-Meteo geocoding API and shows up to 5 suggestions.
2. Clicking a suggestion saves its latitude and longitude to localStorage and navigates to the weather page.
3. The weather page reads the stored coordinates and fetches current conditions from the Open-Meteo forecast API.

## Getting Started

1. Clone the repo:
```bash
   git clone https://github.com/shamshadcodeswell/Weather-app.git
```
2. Open `page1.html` in your browser.
3. Search for a city and view its weather. No API key or build step required.

## APIs Used

- Geocoding: `https://geocoding-api.open-meteo.com/v1/search`
- Forecast: `https://api.open-meteo.com/v1/forecast`
