// D:\website\lib\astro-api.js
class OrbsAstroAPI {
    constructor(baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1') {
        this.baseUrl = baseUrl;
    }

    async generateKundli(name, dob, tob, place, lat = null, lon = null) {
        const payload = {
            name,
            date_of_birth: dob,
            time_of_birth: tob,
            place_of_birth: place
        };

        if (lat && lon) {
            payload.latitude = lat;
            payload.longitude = lon;
        }

        const response = await fetch(`${this.baseUrl}/kundli/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async getPlanetaryPositions(date, time, lat, lon) {
        const payload = { date, time, latitude: lat, longitude: lon };

        const response = await fetch(`${this.baseUrl}/planets/positions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async calculateDasha(birthDate, birthTime, moonNakshatra, targetDate = null) {
        const payload = {
            birth_date: birthDate,
            birth_time: birthTime,
            moon_nakshatra: moonNakshatra
        };

        if (targetDate) {
            payload.target_date = targetDate;
        }

        const response = await fetch(`${this.baseUrl}/dasha/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async calculateAshtakavarga(birthDate, birthTime, lat, lon) {
        const payload = {
            birth_date: birthDate,
            birth_time: birthTime,
            latitude: lat,
            longitude: lon
        };

        const response = await fetch(`${this.baseUrl}/ashtakavarga/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async calculateCompatibility(person1, person2) {
        const payload = { person1, person2 };

        const response = await fetch(`${this.baseUrl}/compatibility/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async getHealth() {
        const response = await fetch(`${this.baseUrl}/health`);
        return await response.json();
    }
}

export default OrbsAstroAPI;
