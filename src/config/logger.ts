import Pino from "pino";
import dayjs from "dayjs";

const transport = Pino.transport({
    target: 'pino-pretty',
    options: { colorize: true }
  })

const logger = Pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
}, transport);

export default logger;
