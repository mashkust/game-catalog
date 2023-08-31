export const stopScroll = () => {
  document.body.style.overflow = "hidden";
};

export const startScroll = () => {
  document.body.style.overflow = "auto";
};

export const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  let dd: string | number = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm: string | number = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yyyy: string | number = date.getFullYear();

  return dd + "." + mm + "." + yyyy;
};
