export async function onRequest(context) {
  const response = {
    message: "1"
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
