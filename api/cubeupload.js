// This module proxies image requests from scratory to cubeupload because there are cases of SSL insecurities
const https = require("https");

module.exports = (req, res) => {
  if (!req.query.path) {
    return res.json({ error: "cannot find 'path' query" });
  }

  let options = {
    hostname: "u.cubeupload.com",
    port: 443,
    path: req.query.path,
    method: "GET",
  };

  let resp = https.request(options, (serverRes) => {
    let body = "";

    if (String(serverRes.headers["content-type"]).indexOf("text/html") !== -1) {
      serverRes.on("data", (chunk) => {
        body += chunk;
      });

      serverRes.on("end", () => {
        res.writeHead(serverRes.statusCode, serverRes.headers);
        res.end(body);
      });
    } else {
      serverRes.pipe(res, {
        end: true,
      });

      res.contentType(serverRes.headers["content-type"]);
    }
  });

  resp.end();
};
