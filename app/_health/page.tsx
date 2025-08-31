'use client';

import { useState } from 'react';

export default function HealthPage() {
    const [logs, setLogs] = useState<string[]>([]);
    const [sessionValue, setSessionValue] = useState<string | null>(null);

    const addLog = (message: string) => {
        setLogs(prev => [...prev, `${new Date().toISOString()}: ${message}`]);
    };

    const testKundaliProxy = async () => {
        try {
            addLog('Testing Kundali Proxy...');

            const response = await fetch('/api/proxy/kundali', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Test',
                    date: '1997-10-01',
                    time: '20:50',
                    tz: '+05:30',
                    place: 'Kota, Rajasthan'
                })
            });

            if (response.ok) {
                const data = await response.json();
                addLog(`✅ Kundali Proxy Success: ${JSON.stringify(data, null, 2)}`);

                // Check session cookie
                const sessionResponse = await fetch('/api/debug/session');
                const sessionData = await sessionResponse.json();
                setSessionValue(sessionData.astro_session);
                addLog(`🔮 Session Cookie: ${sessionData.astro_session || 'null'}`);
            } else {
                const error = await response.text();
                addLog(`❌ Kundali Proxy Error: ${response.status} - ${error}`);
            }
        } catch (error) {
            addLog(`❌ Kundali Proxy Exception: ${error}`);
        }
    };

    const testChatProxy = async () => {
        try {
            addLog('Testing Chat Proxy...');

            const response = await fetch('/api/proxy/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: 'Career kab improve hoga?'
                })
            });

            if (response.ok) {
                const data = await response.json();
                addLog(`✅ Chat Proxy Success: ${JSON.stringify(data, null, 2)}`);
            } else {
                const error = await response.text();
                addLog(`❌ Chat Proxy Error: ${response.status} - ${error}`);
            }
        } catch (error) {
            addLog(`❌ Chat Proxy Exception: ${error}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">AI Integration Test Harness</h1>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={testKundaliProxy}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Test Kundali Proxy
                        </button>
                        <button
                            onClick={testChatProxy}
                            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Test Chat Proxy
                        </button>
                    </div>

                    {sessionValue && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <strong>Session Cookie Set:</strong> {sessionValue}
                        </div>
                    )}

                    {!sessionValue && (
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <strong>Note:</strong> No session cookie found. Generate kundali first.
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Test Logs</h2>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96 text-sm">
                        {logs.length > 0 ? logs.join('\n') : 'No logs yet. Click a test button to start...'}
                    </pre>
                </div>
            </div>
        </div>
    );
}
