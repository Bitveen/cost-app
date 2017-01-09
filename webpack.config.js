module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname + '/src',
        alias: {
            reducers: 'reducers.jsx',
            actions: 'actions.jsx',
            App: 'components/App.jsx',
            Sidebar: 'components/Sidebar.jsx',
            Index: 'components/Index.jsx',
            ListView: 'components/ListView.jsx',
            TopBar: 'components/TopBar.jsx',
            UsersList: 'components/UsersList.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /.\jsx?$/,
                include: __dirname + '/src'
            }
        ]
    }
};
