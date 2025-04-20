export async function handler(event) {
  try {
    const varName = event.queryStringParameters.name;
    if (!varName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing environment variable name parameter' })
      };
    }

    const value = process.env[varName];
    
    if (typeof value === 'undefined') {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Environment variable not found' })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}
