const handleToTop = () => {
  window.scrollTo(0, 0);
};

const toCurrency = (value) => {
  console.log(
    "toCurrency",
    Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  );
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export { handleToTop, toCurrency };
