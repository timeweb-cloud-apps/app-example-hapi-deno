import Hapi from "npm:@hapi/hapi@21";

const server = Hapi.server({
  port: Number(Deno.env.get("PORT")) || 3000,
  host: "0.0.0.0",
});

server.route({
  method: "GET",
  path: "/",
  handler: () => "Timeweb Cloud + Hapi on deno",
});

await server.start();
console.log(`Server running on ${server.info.uri}`);
