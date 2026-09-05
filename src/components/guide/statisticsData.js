import { balls } from "./ballData";

export const marketData = {
  grossGTLPrice: 5200,
  gtlTax: 1000,
  netGTLPrice: 4200,
  boxSize: 60,
  boxPrice: 300000,
};

export const boxPriceHistory = [
  { month: "Jul", price: 320000 },
  { month: "Ago", price: 350000 },
  { month: "Sep", price: 300000 },
];

const parsePrice = (price) => {
  if (typeof price !== "string" || !price.startsWith("$")) {
    return null;
  }

  return Number(price.replace(/[$,]/g, ""));
};

export const ballEconomyData = balls.map((ball) => ({
  id: ball.id,
  name: ball.name,
  captureRate: ball.captureRate,
  captureRateLabel: ball.captureRateLabel,
  captureCondition: ball.captureCondition,
  price: parsePrice(ball.price),
  acquisition: parsePrice(ball.price) === null ? ball.price : null,
}));

export const formatMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(value));

export const getCaptureCosts = (ball) => {
  const averageBalls = 100 / ball.captureRate;

  if (ball.price === null) {
    return { averageBalls, costPerDitto: null };
  }

  return {
    averageBalls,
    costPerDitto: averageBalls * ball.price,
  };
};
