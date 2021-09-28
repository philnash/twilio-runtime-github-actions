exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Kayla!"
    }

    callback(null, result);
  };
