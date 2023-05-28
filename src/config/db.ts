import mongoose from "mongoose";

import logger from "./logger";

function connect() {
    const DBURL = process.env.DBURL as string
  
    return mongoose
      .connect(DBURL, )
      .then((conn) => {
        logger.info(` Database connected on host ${conn.connection.host}`);
      })
      .catch((error) => {
        logger.error(`DB could not connect dur to ${error}`);
        process.exit(1);
      });
  }
  
  export default connect;