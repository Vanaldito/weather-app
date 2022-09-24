export function getAbbrFromDirection(degs: number) {
  if (degs >= 348.75 || degs < 11.25) return "N";
  if (degs >= 11.25 && degs < 33.75) return "NNE";
  if (degs >= 33.75 && degs < 56.25) return "NE";
  if (degs >= 56.25 && degs < 78.75) return "ENE";
  if (degs >= 78.75 && degs < 101.25) return "E";
  if (degs >= 101.25 && degs < 123.75) return "ESE";
  if (degs >= 123.75 && degs < 146.25) return "SE";
  if (degs >= 146.25 && degs < 168.75) return "SSE";
  if (degs >= 168.75 && degs < 191.25) return "S";
  if (degs >= 191.25 && degs < 213.75) return "SSW";
  if (degs >= 213.75 && degs < 236.25) return "SW";
  if (degs >= 236.25 && degs < 258.75) return "WSW";
  if (degs >= 258.75 && degs < 281.25) return "W";
  if (degs >= 281.25 && degs < 303.75) return "WNW";
  if (degs >= 303.75 && degs < 326.25) return "NW";
  if (degs >= 326.25 && degs < 348.75) return "NNW";
}
