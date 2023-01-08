const environment = {
  nodeEnv: process.env.NODE_ENV || 'production',
  port: parseInt(process.env.PORT) || 5001,
  isDev: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? false : true,
};

export default environment;
