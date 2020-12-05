export const logger = () => (next) => (a) => {
  const date = Date.now();
  const action = JSON.stringify(a);
  console.log(date, action);
  return next(a);
};

export default logger;
