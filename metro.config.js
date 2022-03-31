const path = require("path");

const FOLDERS = ["../hooks"];

const resolver = FOLDERS.reduce(
  (prev, folder) => ({
    ...prev,
    [folder]: path.resolve(path.join(__dirname, folder)),
  }),
  {},
);

const watchFolders = FOLDERS.map((folder) =>
  path.resolve(path.join(__dirname, folder)),
);

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver,
  watchFolders,
};
