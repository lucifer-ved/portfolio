const { spawn } = require('child_process');
const path = require('path');

const command = process.argv[2];
const extraArgs = process.argv.slice(3);

if (!command) {
  console.error('Usage: node scripts/run-react-scripts.js <start|build|test> [args...]');
  process.exit(1);
}

const major = Number(process.versions.node.split('.')[0]);
const env = { ...process.env };

if (major >= 17) {
  const existing = env.NODE_OPTIONS ? `${env.NODE_OPTIONS} ` : '';
  if (!existing.includes('--openssl-legacy-provider')) {
    env.NODE_OPTIONS = `${existing}--openssl-legacy-provider`.trim();
  }
}

const scriptPath = path.resolve(
  __dirname,
  '..',
  'node_modules',
  'react-scripts',
  'scripts',
  `${command}.js`
);

const child = spawn(process.execPath, [scriptPath, ...extraArgs], {
  stdio: 'inherit',
  env
});

child.on('exit', (code) => process.exit(code ?? 0));
child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
