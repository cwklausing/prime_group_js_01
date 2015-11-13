var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [];

var Employee = function(array) {
	this.name = array[0];
	this.empNum = array[1];
	this.salary = parseInt(array[2]);
	this.rating = array[3];
};

var Atticus1 = new Employee(atticus);
var Jem1 = new Employee(jem);
var Boo1 = new Employee(boo);
var Scout1 = new Employee(scout);

employees.push(Atticus1);
employees.push(Scout1);
employees.push(Boo1);
employees.push(Jem1);

var Evaluation = function(eObject) {
	this.name = eObject.name;
	function percentSTI() {
		var empNum = eObject.empNum;
		var rating = eObject.rating;
		var salary = eObject.salary;
		var percent = 0;
		if (rating <= 2) {
			percent = 0;
		} else if (rating === 3) {
			percent = 0.04;
		} else if (rating === 4) {
			percent = 0.06;
		} else if (rating === 5) {
			percent = 0.1;
		}

		if (empNum.length === 4) {
			percent += 0.05;
		}

		if (salary > 65000) {
			percent -= 0.01;
		}

		if (percent > 0.13) {
			percent = 0.13;
		};

		return percent;
	};
	this.sti = percentSTI();
	this.aac = Math.round(eObject.salary + eObject.salary * this.sti);
	this.totalBonus = Math.round(eObject.salary * this.sti);
};

var atticusEval = new Evaluation(Atticus1);
var jemEval = new Evaluation(Jem1);
var booEval = new Evaluation(Boo1);
var scoutEval = new Evaluation(Scout1);

console.log(atticusEval, jemEval, booEval, scoutEval);

