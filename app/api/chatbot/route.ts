import { NextRequest, NextResponse } from 'next/server';
import { generateEnhancedLagnaChart } from '@/lib/astrologyEngine';

export async function POST(request: NextRequest) {
    try {
        const { message, birthData } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        const messageLower = message.toLowerCase();

        // Handle Lagna Chart generation requests
        if (messageLower.includes('lagna') || messageLower.includes('ascendant') ||
            messageLower.includes('birth chart') || messageLower.includes('kundali')) {

            // If birth data is provided, generate real chart
            if (birthData && birthData.name && birthData.date && birthData.time && birthData.place) {
                try {
                    // Generate chart using local calculations
                    const chartData = generateEnhancedLagnaChart({
                        name: birthData.name,
                        date: birthData.date,
                        time: birthData.time,
                        place: birthData.place,
                        gender: birthData.gender || 'Male'
                    });

                    return NextResponse.json({
                        response: `🎯 **Your Lagna Chart Generated Successfully!**\n\n**Personal Details:**\n• Name: ${birthData.name}\n• Birth Date: ${birthData.date}\n• Birth Time: ${birthData.time}\n• Birth Place: ${birthData.place}\n\n**Chart Summary:**\n• Lagna (Ascendant): ${chartData.lagna_rashi}\n• Lagna Nakshatra: ${chartData.lagna_nakshatra}\n• Lagna Lord: ${chartData.lagna_lord}\n\n**Key Planetary Positions:**\n${chartData.planets.map((planet) => `• ${planet.name}: ${planet.rashi} (${planet.house}th house)`).join('\n')}\n\n**Next Steps:**\n1. View detailed chart analysis\n2. Get personalized predictions\n3. Download PDF report\n\nYour chart has been generated with professional accuracy using Scientific Astrology calculations!`,
                        chartData: chartData,
                        timestamp: new Date().toISOString(),
                        category: 'lagna_chart_generated'
                    });
                } catch (error) {
                    console.error('Chart generation error:', error);
                    return NextResponse.json({
                        response: "I can help you generate your complete Lagna chart (Kundali)! Please provide your birth details:\n\n• Full Name\n• Date of Birth\n• Exact Time of Birth\n• Place of Birth (City, Country)\n\nOnce you share these details, I'll create your personalized Scientific Astrology birth chart with:\n• Your Lagna (Ascendant)\n• All 12 Houses\n• Planetary Positions\n• Nakshatra Details\n• House Lords\n\nYou can also use our dedicated Lagna Chart Generator above for instant results!",
                        timestamp: new Date().toISOString(),
                        category: 'astrology_guidance'
                    });
                }
            } else {
                // No birth data provided, ask for details
                return NextResponse.json({
                    response: "I can help you generate your complete Lagna chart (Kundali)! Please provide your birth details:\n\n• Full Name\n• Date of Birth\n• Exact Time of Birth\n• Place of Birth (City, Country)\n\nOnce you share these details, I'll create your personalized Scientific Astrology birth chart with:\n• Your Lagna (Ascendant)\n• All 12 Houses\n• Planetary Positions\n• Nakshatra Details\n• House Lords\n\nYou can also use our dedicated Lagna Chart Generator above for instant results!",
                    timestamp: new Date().toISOString(),
                    category: 'astrology_guidance'
                });
            }
        }

        // Handle other astrology questions
        let response = '';
        if (messageLower.includes('marriage') || messageLower.includes('spouse')) {
            response = "For marriage timing, I need to analyze your 7th house and Venus position. The 7th house represents partnerships and spouse. Can you share your birth details for a personalized analysis?";
        } else if (messageLower.includes('career') || messageLower.includes('job')) {
            response = "Career prospects are determined by the 10th house (career), its lord, and the position of Sun and Saturn. What specific career guidance are you seeking?";
        } else if (messageLower.includes('health')) {
            response = "Health matters are governed by the 1st house (physical body) and 6th house (diseases). For accurate health predictions, I'll need your complete birth chart analysis.";
        } else if (messageLower.includes('money') || messageLower.includes('wealth')) {
            response = "Wealth potential is seen through the 2nd house (accumulated wealth) and 11th house (gains). Jupiter and Venus positions also play crucial roles.";
        } else if (messageLower.includes('dasha') || messageLower.includes('period')) {
            response = "Dasha periods show the timing of events in your life. The current planetary period influences your experiences. Share your birth details for dasha analysis.";
        } else {
            response = `I understand you're asking about "${message}". In scientific astrology, every question relates to specific houses and planets. Could you be more specific about what aspect of your life you'd like guidance on? I can help with career, marriage, health, wealth, education, and spiritual matters.`;
        }

        return NextResponse.json({
            response,
            timestamp: new Date().toISOString(),
            category: 'astrology_guidance'
        });

    } catch (error) {
        console.error('Chatbot API error:', error);
        return NextResponse.json(
            { error: 'Failed to process your message' },
            { status: 500 }
        );
    }
}