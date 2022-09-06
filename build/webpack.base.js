import path from "path";
import { VueLoaderPlugin } from "vue-loader";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import Webpackbar from "webpackbar";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

export const root = path.join(_dirname, "../");


/**
 * @type { import("webpack").Configuration; }
 */
export default {
    mode: "development",
    entry: {
        app: path.join(root, "src/main.ts")
    },
    devtool: "eval-source-map",
    infrastructureLogging: {
        level: "warn"
    },
    stats: "errors-warnings",
    devServer: {
        client: {
            logging: "error",
            progress: false,
            overlay: {
                errors: true, // 在热更新时全屏出现编译错误
                warnings: false, // 只在控制台出现编译警告
            }
        },
        static: path.join(root, "dist"),
        // 启动G-ZIP
        compress: true,
        port: "auto",
        open: true,
        hot: true,
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
                use: ["style-loader", "css-loader", "sass-loader"],
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
    },
    output: {
        chunkFilename: "[name].[chunkhash:8].js",
        filename: "[name].[contenthash:8].bundle.js",
        path: path.join(root, "dist")
    },
    resolve: {
        alias: {
            "@": path.join(root, "src"),
        },
        extensions: [".ts", ".vue", ".js"],
        modules: ["node_modules"],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendor"
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: path.join(root, "src", "index.html"),
        }),
        new Webpackbar({
            name: "webpack",
        })
    ]
}