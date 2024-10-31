export default {
  async fetch(request) {
    return new Response("Hello, API!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
