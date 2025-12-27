import "dotenv/config";

export default {
  expo: {
    extra: {
      localIp: process.env.REACT_NATIVE_LOCAL_IP,
      serverPort: process.env.REACT_NATIVE_SERVER_PORT,
    },
  },
};
