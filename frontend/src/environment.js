let IS_PROD = true;
const server = IS_PROD
  ? "http://localhost:8000"
  : "https://apna-video-call-xw3s.onrender.com/";

export default server;
