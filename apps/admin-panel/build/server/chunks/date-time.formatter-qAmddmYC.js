const defaultDateTimeFormatter = new Intl.DateTimeFormat("id", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Jakarta",
  hour12: false
});
const dateTimeFormatterWithoutSeconds = new Intl.DateTimeFormat("id", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jakarta",
  hour12: false
});
const shortDateTimeFormatter = new Intl.DateTimeFormat("id", {
  day: "numeric",
  month: "short",
  timeZone: "Asia/Jakarta"
});

export { defaultDateTimeFormatter as a, dateTimeFormatterWithoutSeconds as d, shortDateTimeFormatter as s };
//# sourceMappingURL=date-time.formatter-qAmddmYC.js.map
