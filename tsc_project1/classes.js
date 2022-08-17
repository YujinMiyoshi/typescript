"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEpmloyeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT部門・ID ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません。');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を入力してください。');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('会計部門・ID ' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
// const accounting = new Department("d1", "Accounting");
const employee1 = Department.createEmployee('Max');
console.log(employee1);
const it = new ITDepartment('d2', ['Max']);
// accounting.addEmployees('Max');
// accounting.addEmployees('Manu');
// accounting.describe()
// accounting.printEpmloyeeInfomation();
it.addEmployees('Max');
it.addEmployees('Manu');
it.addEmployees('Alex');
it.describe();
it.printEpmloyeeInfomation();
console.log(it);
// const accounting2 = new AccountingDepartment('d3', []);
const accounting2 = AccountingDepartment.getInstance();
const accounting3 = AccountingDepartment.getInstance();
console.log(accounting2, accounting3);
accounting2.describe();
accounting2.addEmployees('Alex');
accounting2.addEmployees('Manu');
accounting2.printEpmloyeeInfomation();
accounting2.addReport('Something');
console.log(accounting2.mostRecentReport);
accounting2.mostRecentReport = 'something2';
accounting2.printReport();
console.log(accounting2);
accounting2.addEmployee('Sam');
accounting2.addEmployee('Max');
accounting2.printEpmloyeeInfomation();
