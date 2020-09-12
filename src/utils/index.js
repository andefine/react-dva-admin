export const delay = (ms, val) => {
  let timer;
  const promise = new Promise((resolve) => {
    timer = setTimeout(resolve, ms, val);
  });
  promise.cancel = () => clearTimeout(timer);
  return promise;
};
