var Employee = function() {
  this.id = null;
  this.firstName = null;
  this.lastName = null;
  this.address = null;
  this.sssNumber = null;
  this.atmBank = null;
  this.atmNumber = null;
  this.clients = [];
};

var Client = function() {
  this.id = null;
  this.name = null;
  this.address = null;
  this.employees = [];
  this.payrollPeriods = [];
};

var PayrollPeriod = function() {
  this.id = null;
  this.clientId = null;
  this.fromDate = null;
  this.toDate = null;
};

var Payment = function() {
  this.id = null;
  this.payrollPeriodId = null;
  this.type = null;
  this.valyu = null;
};

var Deduction = function() {
  this.id = null;
  this.payrollPeriodId = null;
  this.type = null;
  this.valyu = null;
};

exports.Employee = Employee;
exports.Client = Client;
exports.PayrollPeriod = PayrollPeriod;
exports.Payment = Payment;
exports.Deduction = Deduction;
