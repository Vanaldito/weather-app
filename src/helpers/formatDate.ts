export function formatDate(date: Date) {
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });

  return `${dayName}, ${day} ${month}`;
}
