const { Client } = require('tplink-smarthome-api');

const client = new Client();

const plug = client.getPlug({ host: 'xxx.xxx.xxx.xxx' }); // input IP address assigned to HS105
plug.setPowerState(true);
plug.setPowerState(false);

