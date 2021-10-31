export default function printMe() {
  const today = new Date();
  console.log('I get called from print.js at '
      + today.getHours() + ':'
      + today.getMinutes() + ':'
      + today.getSeconds()
      + '!');
}