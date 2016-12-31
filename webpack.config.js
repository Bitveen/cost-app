module.exports = {
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/src",
        alias: {
            App: "components/App.jsx",
            Menu: "components/Menu.jsx",
            Content: "components/Content.jsx",
            TopBar: "components/TopBar.jsx",
            ListEditForm: "components/ListEditForm.jsx",
            UserList: "components/UserList.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/src"
            }
        ]
    }
};
