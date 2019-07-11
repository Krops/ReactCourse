
const Utils = {
  parseRequestURL: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: r[1],
      id: r[2],
      verb: r[3],
    };

    return request;
  },
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms)),
};

export default Utils;
