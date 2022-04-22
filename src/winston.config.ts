import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

/**
 * Declare the daily Winston log rotator
 */
const dailyRotatorTransport: DailyRotateFile = new DailyRotateFile({
  filename: 'logs/%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
});

/**
 * Log the daily rotation
 */
dailyRotatorTransport.on(
  'rotate',
  (oldFilename: string, newFilename: string) => {
    console.log(`Rotating log file from ${oldFilename} to ${newFilename}`);
  }
);

/**
 * Export the Winston logger
 */
export default winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: false,
    }),
    dailyRotatorTransport,
  ],
});
