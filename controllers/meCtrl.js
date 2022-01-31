const { raiseException, responseServer } = require('../utils/response');
const meCtrl = {
  // get data from dad model
  getMe: async (req, res) => {
    try {
      return responseServer(res, 200, 'Felix', {
        name: 'Viet Anh Le - Felix',
        age: '20',
        live: 'Canada',
        description: 'Felix is a handsome boy',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = meCtrl;
