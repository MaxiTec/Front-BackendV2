const webpack = require('webpack')
const path = require('path')
const endPath = path.resolve(__dirname, 'build')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './theme.less'), 'utf8'))
    // __dirname devuelve ruta de donde estoy ejecutando mi servidor y lo une con 'build'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
    // const nib = require('nib')
    // const rupture = require('rupture')
const globLess = require('less-plugin-glob')
console.log(process.env.NODE_ENV)
    // ternario para configuracion de StylusLoader
    // const useStylus = (process.env.NODE_ENV === 'production') ?
    //     ExtractTextPlugin.extract({
    //         fallback: 'style-loader',
    //         use: [{
    //                 loader: 'css-loader'

//             },
//             {
//                 loader: 'stylus-loader',
//                 options: {
//                     use: [nib(), rupture()],
//                     import: ['~nib/lib/nib/index.styl']
//                 }
//             }
//         ]
//     }) : [{
//             loader: 'style-loader'
//         },
//         {
//             loader: 'css-loader'

//         },
//         {
//             loader: 'stylus-loader',
//             options: {
//                 use: [nib(), rupture()],
//                 import: ['~nib/lib/nib/index.styl']
//             }
//         }
//     ];

module.exports = {
    // indica que extensiones ira resolviendo
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
    // conserva el cache
  cache: true,
  // se usa un arreglo por el Hot Reload.
  entry: [
    // activa el Hot reload para React
    'react-hot-loader/patch',
    // link donde se sriven los
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server', // solo para development no genera el bundle
    './src/app.jsx'
  ],
  output: {
    path: endPath,
    filename: 'app.js',
    publicPath: '/' // necesario para el Hot Reload
  },
  module: {
      // las tranformaciones ahora se dan atraves de rules
    rules: [{ // cada regla es un objeto, necesita dos propiedades
      // Una expresion regular y la configuracion
      test: /\.(js|jsx)$/,
      // buena practica
      exclude: '/node_modules/',
      loader: 'babel-loader',
      options: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }]
        ]
      }
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    { // Agregar para Entorno de produccion Autoprefixer, con POSTCSS
        test: /\.less$/,
        use: [{
            loader: 'style-loader' // creates style nodes from JS strings
        }, {
            loader: 'css-loader' // translates CSS into CommonJS
        }, {
            // loader: "less-loader" // compiles Less to CSS
            loader: 'less-loader',
            options: {
                paths: [
                    path.resolve(path.join(__dirname, '/'))
                ],
                modifyVars: themeVariables,
                plugins: [
                    globLess
                ]
            }
        }]
    }
    // {
    //     test: /\.styl$/,
    //     use: useStylus
    // }

    // Para trabajar con CSS Puro
    // {
    //     test: /\.css$/,
    //     use: [
    //         'style-loader', //inserta el css en el html via <style>
    //         {
    //             loader: 'css-loader', //Retorna el css procesado via webpack
    //             options: {
    //                 modules: true
    //             }
    //         }
    //     ]
    // }
    ]
  },
  plugins: [
    // activa el hot reload globalmente
    new ExtractTextPlugin('css/estilos.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // parte Pública de la aplicacion
    contentBase: endPath,
    // guarda los cambios en el navegador para que solo refresque los cambios hechos
    inline: true,
    // compresion de recursos
    compress: true,
    port: 9000,
    publicPath: '/'
  }
}
