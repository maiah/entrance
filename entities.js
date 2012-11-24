exports.Employee = function() {
  this.id = null;
  this.firstName = null;
  this.lastName = null;
  this.address = null;
  this.sssNumber = null;
  this.atmBank = null;
  this.atmNumber = null;
  this.clients = [];
};

exports.Client = function() {
  this.id = null;
  this.name = null;
  this.address = null;
  this.employees = [];
  this.payrollPeriods = [];
};

exports.PayrollPeriod = function() {
  this.id = null;
  this.clientId = null;
  this.fromDate = null;
  this.toDate = null;
};

exports.Payment = function() {
  this.id = null;
  this.payrollPeriodId = null;
  this.type = null;
  this.valyu = null;
};

exports.Deduction = function() {
  this.id = null;
  this.payrollPeriodId = null;
  this.type = null;
  this.valyu = null;
};