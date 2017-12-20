// include the Lo-Dash library
    var _ = require("lodash");
    // console.log(_);

    var worker = function(collection) {
      // console.log(collection);
        return _.filter(collection, {active: true});
    };

    // export the worker function as a nodejs module
    module.exports = worker;


