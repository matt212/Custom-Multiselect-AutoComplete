//const pinoInspector = require("pino-inspector");
const path = require("path");
/*fastify middleware*/
const fastify = require("fastify")({
  //logger: { prettyPrint: true, level: "debug", prettifier: pinoInspector },
  //connectionTimeout:20000,
  
});
/* ContentSecurityPolicy */

/*static file routing*/
fastify.register(require("fastify-static"), {

  root: path.join(__dirname, "../") + "/public",
  // prefix:'/public',
});
/*Views for EJS template Render*/
fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
  root: path.join(__dirname, "../views"),
});
/*Cors*/

fastify.register(require("../routes/multiselect"), {
  prefix: "/multiselect",
});

// Run the server!
fastify.listen(3012, function (err, address) {
  if (err) {
    // console.log(err)
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`App Server listening on port ${address}`);
});
/*Socket IO for download and upload Notification services*/
