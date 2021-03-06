/* */ 
var fromArray_1 = require('../observable/fromArray');
var combineLatest_support_1 = require('./combineLatest-support');
var isScheduler_1 = require('../util/isScheduler');
var isArray_1 = require('../util/isArray');
function combineLatest() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i - 0] = arguments[_i];
  }
  var project = null;
  var scheduler = null;
  if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }
  if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0];
  }
  return new fromArray_1.ArrayObservable(observables, scheduler).lift(new combineLatest_support_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
