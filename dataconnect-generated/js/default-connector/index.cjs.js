const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Soft1_CloneX_DigitalCrewNew',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

