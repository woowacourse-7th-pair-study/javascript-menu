export const parseCantEatMenuInput = (input) => {
  if (input === '') return [];

  return input.split(',').map((menu) => menu.trim());
};
