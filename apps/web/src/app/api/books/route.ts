import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const civilization = searchParams.get('civilization')
  const difficulty = searchParams.get('difficulty')

  // Placeholder response
  return NextResponse.json({
    data: [],
    total: 0,
    page,
    limit,
    filters: { civilization, difficulty },
    message: 'Books API pending database connection',
  })
}
