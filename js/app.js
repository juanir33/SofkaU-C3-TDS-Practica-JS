import { table } from "./table.js";

import { createData } from "./db/data.js";

export const init = () => {
  createData();
  table();
};
init();
