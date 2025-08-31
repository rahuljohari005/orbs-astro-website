'use client';

import { useState } from 'react';
import { generateKundali } from '@/app/(actions)/generateKundali';

export default function BirthForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        tz: '+05:30',
        place: '',
    });
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await generateKundali(formData);
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Place"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <button
                type="submit"
                disabled={loading}
                className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
                {loading ? 'Generating...' : 'Generate Kundali'}
            </button>

            {result && (
                <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </form>
    );
}
