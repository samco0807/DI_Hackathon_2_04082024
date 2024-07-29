const knex = require("knex");

const PGHOST = "ep-winter-shape-a2rbuxds.eu-central-1.aws.neon.tech"; // localhost 127.0.0.1
const PGDATABASE = "neondb"; // dvdrental postgres
const PGUSER = "neondb_owner"; // postgres
const PGPASSWORD = "RiC1Xg4vELMZ";
const PGPORT = 5432;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

async function getVersion() {
  try {
    const result = await db.raw("select version()");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getVersion()