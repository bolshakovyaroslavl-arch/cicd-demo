const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.js', 'console.log("Hello from build!");');
console.log('Build done: dist/index.js создан');