const { raiseException, responseServer } = require('../utils/response');
const momCtrl = {
  // get data from Mom model
  getMom: async (req, res) => {
    try {
      return responseServer(res, 200, 'mom', {
        name: 'My mom',
        age: '55',
        live: 'Canada',
        description: 'Mom is the best',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = momCtrl;
