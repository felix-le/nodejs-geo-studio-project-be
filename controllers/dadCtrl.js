const { raiseException, responseServer } = require('../utils/response');
const dadCtrl = {
  // get data from dad model
  getDad: async (req, res) => {
    try {
      return responseServer(res, 200, 'dad', {
        name: 'dad',
        age: '20',
        live: 'Canada',
        description: 'dad is a good',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = dadCtrl;
