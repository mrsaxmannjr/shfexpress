module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///shf",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
