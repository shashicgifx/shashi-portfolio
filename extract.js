const fs = require('fs');
const html = fs.readFileSync('C:/Users/mrsar/AppData/Local/Temp/shashi.html', 'utf8');
const regex = /<img[^>]*memo_[^>]*>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  const start = Math.max(0, m.index - 200);
  const end = Math.min(html.length, m.index + m[0].length + 200);
  console.log('--- SNIPPET ---');
  console.log(html.substring(start, end));
}
