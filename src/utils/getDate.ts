export const getDate = () => {
  const date = new Date();

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(date);
};
