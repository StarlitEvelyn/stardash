//! Timestamp must be in seconds!
export function intToHuman(s: number) {
  let timestamp = s;
  let days: number = 0,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0;

  const SECOND = 1,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
    DAY = 24 * HOUR;

  while (timestamp >= DAY) {
    days++;
    timestamp -= DAY;
  }
  while (timestamp >= HOUR) {
    hours++;
    timestamp -= HOUR;
  }
  while (timestamp >= MINUTE) {
    minutes++;
    timestamp -= MINUTE;
  }
  seconds = parseInt(timestamp.toString());

  let result: string = "";
  if (days > 0) result += days + "d ";
  if (hours > 0) result += hours + "h ";
  if (minutes > 0) result += minutes + "m ";
  if (seconds > 0) result += seconds + "s ";

  result = `${days > 10 ? "" : "0"}${days > 0 ? days : "0"}:${
    hours > 10 ? "" : "0"
  }${hours > 0 ? hours : "0"}:${minutes > 10 ? "" : "0"}${
    minutes > 0 ? minutes : "0"
  }:${seconds > 10 ? "" : "0"}${seconds > 0 ? seconds : "0"}`;

  return result;
}

export function humanToInt(d: number, h: number, m: number, s: number) {
  const SECOND = 1,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
    DAY = 24 * HOUR;

  return d * DAY + h * HOUR + m * MINUTE + s * SECOND;
}
