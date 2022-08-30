import path from "path";
import { VueLoaderPlugin } from "vue-loader";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";


export const root = path.join(__dirname, "../");

/**
 * @type { import("webpack").Configuration; }
 */
export default {
    mode: "development",
    entry: {
        app: path.join(root, "src/main.ts")
    },
    devtool: "eval-source-map",
    devServer: {
        hot: true,
        port: "auto",
        open: true,
        compress: true,
        client: {
            progress: false,
            overlay: {
                errors: true,
                warnings: true,
            }
        }
    },
    module: {
        rules: [
            {
                test: /(\.ts)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/(\.vue)$/]
                        }
                    }
                ]
            },
            {
                test: /(\.s|css)$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /(\.vue)$/,
                use: ["vue-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                // 输出一个url
                type: "assets/resource"
            },
            {
                test: /\.svg/,
                // 输出一个data-url
                type: "assets/inline"
            }
        ],
        output: {
            chunkFilename: "[name].[chunkhash:8].js",
            filename: "[name].[contenthash:8].bundle.js",
            path: path.join(root, "dist")
        },
        resolve: {
            alias: {
                "@": path.join(root, "src"),
            },
            extensions: [".ts", ".ts"],
            modules: ["node_modules"],
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                name: "vendor"
            }
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: path.join(root, "src", "index.html"),
        }),
    ]
}