import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const astroSession = request.cookies.get('astro_session')?.value || null;
  
  return NextResponse.json({
    astro_session: astroSession
  });
}
