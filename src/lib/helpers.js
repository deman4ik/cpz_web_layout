import cookie from "cookie";

function parseCookies(req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || "" : document.cookie,
    options
  );
}

const getToken = req => () => parseCookies(req).token;

export { getToken, parseCookies };
