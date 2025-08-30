export interface ZodiacSign {
    name: string
    symbol: string
    dates: string
    element: string
    rulingPlanet: string
    quality: string
    description: string
    personality: string
    strengths: string[]
    weaknesses: string[]
    compatibility: string[]
    career: string[]
    loveLife: string
    color: string
    traits: string[]
}

export const zodiacData: Record<string, ZodiacSign> = {
    aries: {
        name: 'Aries',
        symbol: '♈',
        dates: 'March 21 - April 19',
        element: 'Fire',
        rulingPlanet: 'Mars',
        quality: 'Cardinal',
        description: 'Bold, ambitious, and energetic leaders who are always ready for action.',
        personality: 'Aries individuals are natural-born leaders with an infectious enthusiasm for life. They approach challenges with courage and determination, often charging ahead where others might hesitate. Their pioneering spirit makes them excellent at starting new projects and inspiring others to follow their vision.',
        strengths: ['Courageous', 'Energetic', 'Pioneering', 'Confident', 'Optimistic', 'Independent', 'Passionate'],
        weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive', 'Selfish', 'Competitive'],
        compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
        career: ['Entrepreneurship', 'Athletics', 'Military', 'Sales', 'Politics', 'Emergency Services', 'Leadership Roles'],
        loveLife: 'Passionate and direct in love, Aries seeks excitement and adventure in relationships. They are loyal partners who bring energy and spontaneity, but need independence and respect for their ambitions.',
        color: 'from-red-500 to-orange-500',
        traits: ['Dynamic', 'Fearless', 'Innovative']
    },
    taurus: {
        name: 'Taurus',
        symbol: '♉',
        dates: 'April 20 - May 20',
        element: 'Earth',
        rulingPlanet: 'Venus',
        quality: 'Fixed',
        description: 'Reliable, patient, and determined individuals who value stability and comfort.',
        personality: 'Taurus individuals are known for their steadfast nature and appreciation for the finer things in life. They are practical, reliable, and incredibly loyal to those they care about. Their connection to Venus gives them an eye for beauty and a love of luxury.',
        strengths: ['Patient', 'Reliable', 'Practical', 'Devoted', 'Persistent', 'Stable', 'Sensual'],
        weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Self-indulgent', 'Materialistic', 'Lazy', 'Inflexible'],
        compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
        career: ['Finance', 'Real Estate', 'Agriculture', 'Art & Design', 'Banking', 'Luxury Goods', 'Food Industry'],
        loveLife: 'Seeks stability and security in relationships. Taurus is deeply loyal and sensual, showing love through physical affection and material comfort. They expect the same devotion in return.',
        color: 'from-green-500 to-emerald-500',
        traits: ['Steadfast', 'Luxurious', 'Grounded']
    },
    gemini: {
        name: 'Gemini',
        symbol: '♊',
        dates: 'May 21 - June 20',
        element: 'Air',
        rulingPlanet: 'Mercury',
        quality: 'Mutable',
        description: 'Versatile, expressive, and quick-witted communicators who love variety.',
        personality: 'Gemini individuals are the social butterflies of the zodiac, always curious and eager to learn. They adapt quickly to new situations and love intellectual stimulation. Their dual nature allows them to see multiple perspectives on any issue.',
        strengths: ['Adaptable', 'Versatile', 'Communicative', 'Witty', 'Intellectual', 'Curious', 'Sociable'],
        weaknesses: ['Nervous', 'Inconsistent', 'Indecisive', 'Superficial', 'Restless', 'Anxious', 'Gossipy'],
        compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
        career: ['Communication', 'Media', 'Teaching', 'Writing', 'Technology', 'Sales', 'Public Relations'],
        loveLife: 'Values mental connection and stimulating conversation above all. Gemini needs freedom and variety in relationships, seeking partners who can match their wit and intellectual curiosity.',
        color: 'from-blue-400 to-cyan-500',
        traits: ['Communicative', 'Adaptable', 'Intellectual']
    },
    cancer: {
        name: 'Cancer',
        symbol: '♋',
        dates: 'June 21 - July 22',
        element: 'Water',
        rulingPlanet: 'Moon',
        quality: 'Cardinal',
        description: 'Nurturing, protective, and intuitive individuals who value emotional security.',
        personality: 'Cancer individuals are deeply emotional and intuitive, with a strong protective instinct. They create warm, nurturing environments and are incredibly loyal to family and friends. Their connection to the Moon makes them highly empathetic and emotionally intelligent.',
        strengths: ['Nurturing', 'Protective', 'Intuitive', 'Loyal', 'Sympathetic', 'Imaginative', 'Caring'],
        weaknesses: ['Moody', 'Pessimistic', 'Suspicious', 'Manipulative', 'Insecure', 'Clingy', 'Oversensitive'],
        compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
        career: ['Healthcare', 'Counseling', 'Hospitality', 'Real Estate', 'Education', 'Social Work', 'Childcare'],
        loveLife: 'Seeks emotional security and deep connection in relationships. Cancer is incredibly devoted and nurturing, creating a safe haven for their loved ones while expecting emotional support in return.',
        color: 'from-blue-600 to-indigo-600',
        traits: ['Nurturing', 'Intuitive', 'Protective']
    },
    leo: {
        name: 'Leo',
        symbol: '♌',
        dates: 'July 23 - August 22',
        element: 'Fire',
        rulingPlanet: 'Sun',
        quality: 'Fixed',
        description: 'Creative, passionate, and generous individuals who love to be in the spotlight.',
        personality: 'Leo individuals are natural performers who love attention and admiration. They are generous, warm-hearted, and have a natural ability to inspire others. Their connection to the Sun gives them confidence and a magnetic personality.',
        strengths: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Confident', 'Dramatic'],
        weaknesses: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible', 'Dominating', 'Vain'],
        compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
        career: ['Entertainment', 'Leadership', 'Sales', 'Fashion', 'Arts', 'Public Speaking', 'Management'],
        loveLife: 'Romantic and dramatic in love, Leo seeks admiration and loyalty from their partners. They are generous lovers who enjoy spoiling their partners and being the center of their world.',
        color: 'from-yellow-500 to-orange-500',
        traits: ['Charismatic', 'Generous', 'Confident']
    },
    virgo: {
        name: 'Virgo',
        symbol: '♍',
        dates: 'August 23 - September 22',
        element: 'Earth',
        rulingPlanet: 'Mercury',
        quality: 'Mutable',
        description: 'Analytical, kind, and hardworking individuals who strive for perfection.',
        personality: 'Virgo individuals are practical, analytical, and detail-oriented. They have a strong sense of duty and are always willing to help others. Their perfectionist nature drives them to continuously improve themselves and their surroundings.',
        strengths: ['Analytical', 'Kind', 'Hardworking', 'Practical', 'Loyal', 'Organized', 'Helpful'],
        weaknesses: ['Worried', 'Overcritical', 'Harsh', 'Perfectionist', 'Conservative', 'Judgmental', 'Fussy'],
        compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
        career: ['Healthcare', 'Research', 'Accounting', 'Administration', 'Quality Control', 'Editing', 'Service Industry'],
        loveLife: 'Shows love through acts of service and practical support. Virgo is loyal and dedicated, seeking partners who appreciate their attention to detail and desire for improvement.',
        color: 'from-green-600 to-teal-600',
        traits: ['Analytical', 'Helpful', 'Perfectionist']
    },
    libra: {
        name: 'Libra',
        symbol: '♎',
        dates: 'September 23 - October 22',
        element: 'Air',
        rulingPlanet: 'Venus',
        quality: 'Cardinal',
        description: 'Diplomatic, gracious, and fair-minded individuals who seek harmony and balance.',
        personality: 'Libra individuals are natural peacemakers who value harmony and justice. They have excellent taste and a strong sense of fairness. Their connection to Venus gives them an appreciation for beauty and a desire for partnership.',
        strengths: ['Diplomatic', 'Gracious', 'Fair-minded', 'Social', 'Peaceful', 'Idealistic', 'Charming'],
        weaknesses: ['Indecisive', 'Avoids confrontations', 'Self-pity', 'Unreliable', 'Superficial', 'Vain', 'Gullible'],
        compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
        career: ['Law', 'Diplomacy', 'Design', 'Counseling', 'Public Relations', 'Art', 'Mediation'],
        loveLife: 'Seeks harmony and partnership in relationships. Libra is romantic and values intellectual connection, always striving to create balance and beauty in their love life.',
        color: 'from-pink-400 to-rose-500',
        traits: ['Diplomatic', 'Harmonious', 'Artistic']
    },
    scorpio: {
        name: 'Scorpio',
        symbol: '♏',
        dates: 'October 23 - November 21',
        element: 'Water',
        rulingPlanet: 'Pluto',
        quality: 'Fixed',
        description: 'Passionate, determined, and magnetic individuals with intense emotions.',
        personality: 'Scorpio individuals are intense, passionate, and mysterious. They have incredible emotional depth and are fiercely loyal to those they trust. Their connection to Pluto gives them transformative power and the ability to see beyond surface appearances.',
        strengths: ['Passionate', 'Determined', 'Magnetic', 'Loyal', 'Resourceful', 'Intuitive', 'Transformative'],
        weaknesses: ['Jealous', 'Secretive', 'Vindictive', 'Suspicious', 'Manipulative', 'Obsessive', 'Controlling'],
        compatibility: ['Cancer', 'Pisces', 'Taurus', 'Capricorn'],
        career: ['Psychology', 'Investigation', 'Research', 'Surgery', 'Finance', 'Occult Studies', 'Transformation Work'],
        loveLife: 'Intense and passionate in love, Scorpio seeks deep emotional connection and complete loyalty. They are all-or-nothing lovers who transform themselves and their partners through love.',
        color: 'from-purple-600 to-red-600',
        traits: ['Intense', 'Mysterious', 'Transformative']
    },
    sagittarius: {
        name: 'Sagittarius',
        symbol: '♐',
        dates: 'November 22 - December 21',
        element: 'Fire',
        rulingPlanet: 'Jupiter',
        quality: 'Mutable',
        description: 'Optimistic, adventurous, and independent individuals who love freedom and exploration.',
        personality: 'Sagittarius individuals are free spirits who love adventure and learning. They are optimistic, honest, and always looking for the next big adventure. Their connection to Jupiter gives them a philosophical nature and a desire for higher knowledge.',
        strengths: ['Optimistic', 'Adventurous', 'Independent', 'Honest', 'Philosophical', 'Generous', 'Enthusiastic'],
        weaknesses: ['Impatient', 'Tactless', 'Restless', 'Overconfident', 'Inconsistent', 'Careless', 'Irresponsible'],
        compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
        career: ['Travel', 'Education', 'Publishing', 'Sports', 'Philosophy', 'International Business', 'Adventure Tourism'],
        loveLife: 'Values freedom and honesty in relationships. Sagittarius seeks adventure and intellectual stimulation with partners who share their love of exploration and growth.',
        color: 'from-purple-500 to-indigo-500',
        traits: ['Adventurous', 'Philosophical', 'Free-spirited']
    },
    capricorn: {
        name: 'Capricorn',
        symbol: '♑',
        dates: 'December 22 - January 19',
        element: 'Earth',
        rulingPlanet: 'Saturn',
        quality: 'Cardinal',
        description: 'Responsible, disciplined, and ambitious individuals who value structure and achievement.',
        personality: 'Capricorn individuals are practical, ambitious, and disciplined. They have a strong work ethic and are natural leaders who achieve their goals through persistence. Their connection to Saturn gives them patience and the ability to build lasting structures.',
        strengths: ['Responsible', 'Disciplined', 'Ambitious', 'Patient', 'Loyal', 'Practical', 'Determined'],
        weaknesses: ['Pessimistic', 'Stubborn', 'Suspicious', 'Cold', 'Rigid', 'Controlling', 'Unforgiving'],
        compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
        career: ['Business', 'Finance', 'Management', 'Government', 'Architecture', 'Engineering', 'Corporate Leadership'],
        loveLife: 'Takes relationships seriously and values stability and commitment. Capricorn is loyal and dependable, seeking partners who share their long-term vision and work ethic.',
        color: 'from-gray-600 to-slate-700',
        traits: ['Ambitious', 'Disciplined', 'Responsible']
    },
    aquarius: {
        name: 'Aquarius',
        symbol: '♒',
        dates: 'January 20 - February 18',
        element: 'Air',
        rulingPlanet: 'Uranus',
        quality: 'Fixed',
        description: 'Progressive, original, and independent individuals who value innovation and humanitarian causes.',
        personality: 'Aquarius individuals are innovative, independent, and humanitarian. They are forward-thinking and often ahead of their time in their ideas and values. Their connection to Uranus gives them a revolutionary spirit and a desire to improve society.',
        strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Intellectual', 'Innovative', 'Friendly'],
        weaknesses: ['Unpredictable', 'Aloof', 'Stubborn', 'Uncompromising', 'Detached', 'Rebellious', 'Eccentric'],
        compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
        career: ['Technology', 'Science', 'Social Work', 'Innovation', 'Humanitarian Work', 'Research', 'Activism'],
        loveLife: 'Values intellectual connection and independence in relationships. Aquarius seeks partners who respect their need for freedom and share their vision for a better world.',
        color: 'from-cyan-500 to-blue-500',
        traits: ['Innovative', 'Independent', 'Humanitarian']
    },
    pisces: {
        name: 'Pisces',
        symbol: '♓',
        dates: 'February 19 - March 20',
        element: 'Water',
        rulingPlanet: 'Neptune',
        quality: 'Mutable',
        description: 'Compassionate, artistic, and intuitive individuals who are deeply connected to the spiritual realm.',
        personality: 'Pisces individuals are compassionate, artistic, and highly intuitive. They have a deep connection to the spiritual world and are incredibly empathetic. Their connection to Neptune gives them imagination and the ability to transcend ordinary reality.',
        strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Musical', 'Spiritual', 'Empathetic'],
        weaknesses: ['Escapist', 'Overly idealistic', 'Secretive', 'Vague', 'Weak-willed', 'Gullible', 'Fearful'],
        compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
        career: ['Arts', 'Healing', 'Spirituality', 'Music', 'Photography', 'Social Work', 'Therapy'],
        loveLife: 'Romantic and idealistic in love, Pisces seeks deep emotional and spiritual connection. They are devoted partners who love unconditionally and seek transcendent experiences in love.',
        color: 'from-blue-500 to-purple-500',
        traits: ['Compassionate', 'Imaginative', 'Spiritual']
    }
}

export const zodiacSigns = Object.keys(zodiacData) as Array<keyof typeof zodiacData>