// export default () => ({});
module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'local', // Default file upload provider
            providerOptions: {
                sizeLimit: 1000000, // Adjust size limit as needed (in bytes)
            },
        },
    },
});
