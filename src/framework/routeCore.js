// stores the middleware functions
const use = function (fn) {
  this.arrMiddleware.push(fn);
};

// creates a subRouter to handle Request from a specific route
const useRoute = async function (prefix, router) {
  this.arrMiddleware.push(async (req, res) => {
    if (!req.url.startsWith(prefix)) return;

    const url = req.url.slice(prefix.length);
    if (url.startsWith("/") || url === "") {
      req.url = req.url.slice(prefix.length) || "/";
      await router.handle(req, res);
    }
  });
};

export { use, useRoute };
