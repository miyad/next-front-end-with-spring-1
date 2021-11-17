import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl;
    if (pathname === '/') {
       // if(!localStorage.getItem('isLoggedIn'))
         //   return NextResponse.redirect('/login')
    }
    return NextResponse.next()
}