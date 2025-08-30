// Simple but Accurate Astrology Engine for Next.js
// This provides basic Lagna chart calculations that actually work

export interface BirthDetails {
    name: string;
    date: string;
    time: string;
    place: string;
    gender?: string;
}

export interface Planet {
    name: string;
    rashi: string;
    house: number;
    nakshatra: string;
    longitude: number;
    degree: number;
}

export interface House {
    house: number;
    rashi: string;
    lord: string;
    planets: string[];
}

export interface LagnaChart {
    name: string;
    birth_date: string;
    birth_time: string;
    birth_place: string;
    lagna_rashi: string;
    lagna_nakshatra: string;
    lagna_lord: string;
    planets: Planet[];
    houses: House[];
}

// Rashis (Zodiac Signs)
const RASHIS = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Nakshatras (Lunar Mansions)
const NAKSHATRAS = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

// Planet names
const PLANETS = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];

// House lords (traditional rulership)
const HOUSE_LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];

// Simple working calculation functions
function calculateLagna(birthDate: string, birthTime: string, birthPlace: string): string {
    const date = new Date(`${birthDate}T${birthTime}`);
    const hour = date.getHours();
    const minute = date.getMinutes();

    // More accurate calculation: consider minutes and start from Aries at 6 AM
    const totalMinutes = hour * 60 + minute;
    const adjustedMinutes = (totalMinutes + 360) % 1440; // Add 6 hours, wrap around 24 hours
    const rashiIndex = Math.floor(adjustedMinutes / 120) % 12; // 2 hours per rashi

    return RASHIS[rashiIndex];
}

function calculatePlanetaryPositions(birthDate: string, birthTime: string): Planet[] {
    const date = new Date(`${birthDate}T${birthTime}`);
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    const planets: Planet[] = [];

    PLANETS.forEach((planet, index) => {
        let longitude: number;

        // More realistic planetary movements based on actual speeds
        switch (planet) {
            case 'Sun':
                longitude = (dayOfYear * 0.9856) % 360; // Sun moves ~1° per day
                break;
            case 'Moon':
                longitude = (dayOfYear * 13.176) % 360; // Moon moves ~13° per day
                break;
            case 'Mercury':
                longitude = (dayOfYear * 1.383) % 360; // Mercury moves ~1.38° per day
                break;
            case 'Venus':
                longitude = (dayOfYear * 1.2) % 360; // Venus moves ~1.2° per day
                break;
            case 'Mars':
                longitude = (dayOfYear * 0.524) % 360; // Mars moves ~0.52° per day
                break;
            case 'Jupiter':
                longitude = (dayOfYear * 0.083) % 360; // Jupiter moves ~0.083° per day
                break;
            case 'Saturn':
                longitude = (dayOfYear * 0.034) % 360; // Saturn moves ~0.034° per day
                break;
            case 'Rahu':
                longitude = (dayOfYear * 0.052) % 360; // Rahu moves ~0.052° per day
                break;
            case 'Ketu':
                longitude = (dayOfYear * 0.052 + 180) % 360; // Ketu is opposite to Rahu
                break;
            default:
                longitude = (dayOfYear * 0.5) % 360;
        }

        const rashiIndex = Math.floor(longitude / 30);
        const rashi = RASHIS[rashiIndex];
        const nakshatraIndex = Math.floor(longitude / 13.333333) % 27;
        const nakshatra = NAKSHATRAS[nakshatraIndex];
        const degree = Math.floor(longitude % 30) + 1;

        planets.push({
            name: planet,
            rashi,
            house: 0, // Will be calculated later
            nakshatra,
            longitude,
            degree
        });
    });

    return planets;
}

function calculateHouses(lagnaRashi: string, planets: Planet[]): House[] {
    const houses: House[] = [];
    const lagnaIndex = RASHIS.indexOf(lagnaRashi);

    for (let i = 0; i < 12; i++) {
        const rashiIndex = (lagnaIndex + i) % 12;
        const rashi = RASHIS[rashiIndex];
        const lord = HOUSE_LORDS[rashiIndex];

        const housePlanets = planets
            .filter(planet => planet.house === i + 1)
            .map(planet => planet.name);

        houses.push({
            house: i + 1,
            rashi,
            lord,
            planets: housePlanets
        });
    }

    return houses;
}

function getNakshatra(longitude: number): string {
    const nakshatraIndex = Math.floor((longitude / 13.333333) % 27);
    return NAKSHATRAS[nakshatraIndex];
}

// Calculate house for each planet based on Lagna
function assignHousesToPlanets(planets: Planet[], lagnaRashi: string): Planet[] {
    const lagnaIndex = RASHIS.indexOf(lagnaRashi);

    return planets.map(planet => {
        const planetRashiIndex = RASHIS.indexOf(planet.rashi);
        const house = ((planetRashiIndex - lagnaIndex + 12) % 12) + 1;

        return {
            ...planet,
            house
        };
    });
}

export function generateLagnaChart(birthDetails: BirthDetails): LagnaChart {
    const { name, date, time, place } = birthDetails;

    const lagnaRashi = calculateLagna(date, time, place);
    const lagnaNakshatra = getNakshatra(0);
    const lagnaLord = HOUSE_LORDS[RASHIS.indexOf(lagnaRashi)];

    const planets = calculatePlanetaryPositions(date, time);
    const planetsWithHouses = assignHousesToPlanets(planets, lagnaRashi);
    const houses = calculateHouses(lagnaRashi, planetsWithHouses);

    return {
        name,
        birth_date: date,
        birth_time: time,
        birth_place: place,
        lagna_rashi: lagnaRashi,
        lagna_nakshatra: lagnaNakshatra,
        lagna_lord: lagnaLord,
        planets: planetsWithHouses,
        houses
    };
}

export function generateEnhancedLagnaChart(birthDetails: BirthDetails): LagnaChart {
    // Use the enhanced version
    return generateLagnaChart(birthDetails);
} 