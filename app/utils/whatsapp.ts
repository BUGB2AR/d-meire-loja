export const getWhatsAppLink = (productName: string, price: number) => {
  const phone = "5585992922434";
  const message = `Olá! Vi no site o produto *${productName}* por R$ ${price.toFixed(2)} e gostaria de saber a disponibilidade.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};