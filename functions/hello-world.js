exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello wrld"
    }

    callback(null, result);
  };
