let UUID = 0;

export const uuid = () => {
  const getId = () => {
    UUID++;

    return `id-${UUID}`;
  };

  return { getId };
};
