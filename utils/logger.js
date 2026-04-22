import { createWriteStream, mkdirSync } from 'fs';
import { join } from 'path';

mkdirSync('test-results', { recursive: true });

const logStream = createWriteStream(join('test-results', 'test-run.log'), { flags: 'a' });

const LEVELS = { INFO: 'INFO', WARN: 'WARN', ERROR: 'ERROR', DEBUG: 'DEBUG', STEP: 'STEP' };

function timestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 23);
}

function write(level, message) {
  const line = `[${timestamp()}] [${level.padEnd(5)}] ${message}`;
  console.log(line);
  logStream.write(line + '\n');
}

const logger = {
  info:  (msg) => write(LEVELS.INFO,  msg),
  warn:  (msg) => write(LEVELS.WARN,  msg),
  error: (msg) => write(LEVELS.ERROR, msg),
  debug: (msg) => write(LEVELS.DEBUG, msg),
  step:  (msg) => write(LEVELS.STEP,  `▶ ${msg}`),
};

export default logger;