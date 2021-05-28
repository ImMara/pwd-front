const path = require('path');

module.exports = {
    webpack: config => {
        config.module.rules.push({
            test: /\.(glb|gltf|glsl)$/,
            use: {
                loader: 'file-loader',
            }
        })
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    }
}