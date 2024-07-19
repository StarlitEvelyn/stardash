export default function ProgressCalc(timeLeft: number, timeTotal: number) {
  //   3600 / 7200 = 0.5 * 100
  return parseInt(((timeLeft / timeTotal) * 100).toString());
}
