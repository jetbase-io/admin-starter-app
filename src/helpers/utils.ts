const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;

export const formatNumberToSeconds = (seconds: number) => {
  const h = Math.floor(seconds / HOUR_IN_SECONDS) || "";
  const m = Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS) || "";
  const s = Math.floor((seconds % HOUR_IN_SECONDS) % MINUTE_IN_SECONDS) || "";
  return [h, m, s];
};

export const formatSecondToTimeView = (time: any) => {
  let [h, m, s] = formatNumberToSeconds(time);
  if (h.toString().length === 1) h = `0${h}`;
  if (m.toString().length === 1) m = `0${m}`;
  if (s.toString().length === 1) s = `0${s}`;
  return `${h || "00"}:${m || "00"}:${s || "00"}`;
};
