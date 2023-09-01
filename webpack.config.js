const path = require("path");

module.exports = {
  entry: "./src/index.js", // 여기서부터 빌드 시작
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 결과물 위치
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
