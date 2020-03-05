var orm = require("../configs/orm");

var Pokemon = {
  all: function(cb) {
    orm.all("pokemon", function(res) {
      cb(res);
    });
  },

  select: function(table, tabColVal, condition, cb) {
    orm.select("pokemon", table, tabColVal, condition, function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("pokemon", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("pokemon", objColVals, condition, cb, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("pokemon", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = Pokemon;
