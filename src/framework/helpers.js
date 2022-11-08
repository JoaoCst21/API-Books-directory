const checkIfParamsValid = (arrRegex, arrUrl, url) => {
  // replace the regex params with the url params
  const newUrl = replaceParams(arrRegex, arrUrl);

  // if the url does match the regex, then return the new url, else false
  if (newUrl !== url.slice(1)) return false;
  return `/${newUrl}`;
};

const createObjectParams = (arrRegex, arrUrl, params) => {
  const objParams = {};
  const value = arrRegex.filter((regex) => regex.startsWith(":"));
  params.forEach((param, i) => {
    const index = arrRegex.findIndex((route) => route.startsWith(":"));
    objParams[params[i]] = arrUrl[index];
  });
  return objParams;
};

// replace the regex params with the url params
const replaceParams = (arrRegex, arrUrl) => {
  return arrRegex
    .map((regex, index) => {
      if (regex.startsWith(":")) return arrUrl[index];
      return regex;
    })
    .join("/");
};

export { checkIfParamsValid, createObjectParams, replaceParams };
