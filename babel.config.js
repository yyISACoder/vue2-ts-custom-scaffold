module.exports = {
  //sourceType: "unambiguous",
  presets: [
    [
      '@babel/preset-env',
      // {
      //   "modules": false
      // }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3 
      }
    ]
  ]
}