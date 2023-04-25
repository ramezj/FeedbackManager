import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge'
}

export default async function handler(req, res) {
    return new Response(
        JSON.stringify({
            name:'Ramez Joseph.'
        }),
        {
            status:200,
            headers: {
                'content-type':'application/json'
            }
        }
    )
}