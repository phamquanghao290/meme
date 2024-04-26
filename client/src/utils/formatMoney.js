export const formatMoney = (value) => {
    const USD = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return USD.format(value)
}