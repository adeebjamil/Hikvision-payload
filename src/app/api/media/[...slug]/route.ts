import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const filePath = params.slug.join('/')
    const fullPath = path.join(process.cwd(), 'media', filePath)
    
    const file = await readFile(fullPath)
    
    const ext = path.extname(filePath).toLowerCase()
    const mimeType = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
    }[ext] || 'application/octet-stream'
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    console.error('Media serve error:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}