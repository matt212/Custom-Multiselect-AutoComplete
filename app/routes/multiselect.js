

async function routes(fastify, options) {
  fastify.get("/",
  async (request, reply) => {
  
    reply.view(`base_multiselect.ejs`)
   });
  

  fastify.post("/api/searchtypegroupby/", (request, reply) => {
    var req = {};
    req.body = request.body;
    var mainapp = req.body;
    reply.send({"rows":[{"gender":"m"},{"gender":"f"}]})
  });

}

module.exports = routes;
