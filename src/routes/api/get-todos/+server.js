import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET(event) {
    // log all headers
    // console.log(...event.request.headers);

    return json({
        // retrieve a specific header
        "message": "Hello World I am Todos!",
        // userAgent: event.request.headers.get('user-agent')
    });
}