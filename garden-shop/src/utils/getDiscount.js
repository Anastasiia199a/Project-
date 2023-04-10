export function getDiscount(instrument) {
  return (100 - (instrument.discont_price * 100) / instrument.price).toFixed(2);
}
