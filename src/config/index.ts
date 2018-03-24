const env = process.env.NODE_ENV || "development";

const configs: { [key: string]: any } = {
  development: {
    postgres: {
      username: "postgres",
      password: "",
      database: "memoize-me",
      pgData: "/data",
      host: "localhost",
      port: "5435",
      dialect: "postgres",
      replication: {
        read: [
          {
            host: "localhost",
            username: "postgres",
            password: "",
          },
        ],
        write: {
          host: "localhost",
          username: "postgres",
          password: "",
        },
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
    graphql: {
      port: 4000,
    },
  },
  staging: {
    postgres: {
      username: "postgres",
      password: "",
      database: "memoize-me",
      pgData: "/data",
      host: "localhost",
      port: "5435",
      dialect: "postgres",
      replication: {
        read: [
          {
            host: "localhost",
            username: "postgres",
            password: "",
          },
        ],
        write: {
          host: "localhost",
          username: "postgres",
          password: "",
        },
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
    graphql: {
      port: 8080,
    },
  },
  production: {
    postgres: {
      username: "postgres",
      password: "",
      database: "memoize-me",
      pgData: "/data",
      host: "localhost",
      port: "5435",
      dialect: "postgres",
      replication: {
        read: [
          {
            host: "localhost",
            username: "postgres",
            password: "",
          },
        ],
        write: {
          host: "localhost",
          username: "postgres",
          password: "",
        },
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
    graphql: {
      port: 8080,
    },
  },
};

export default configs[env];
