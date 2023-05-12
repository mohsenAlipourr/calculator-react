export const cloneVariable = (variable) => {
  if (!variable) return;
  return JSON.parse(JSON.stringify(variable));
};
