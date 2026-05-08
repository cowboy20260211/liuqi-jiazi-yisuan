import { calculate } from '../../src/calculator';

export async function onRequestPost(context: any) {
  const { request } = context;
  
  try {
    const body = await request.json();
    const { renming, sitian } = body;

    // Parameter validation
    if (!renming || !sitian) {
      return new Response(JSON.stringify({ error: 'Missing parameters: renming and sitian are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Call calculation function
    const result = calculate(renming, sitian);

    // Check if calculation returned an error
    if ('error' in result) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
