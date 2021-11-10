import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname === '/') {
        console.log("req = ",req);
        console.log("ev = ",ev);
        return NextResponse.redirect('/login')
    }
    return NextResponse.next()
}