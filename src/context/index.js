const contextMemory = [];

export const get = () => contextMemory;

export const add = (data) => {
  contextMemory.push(data);
  return contextMemory;
};
