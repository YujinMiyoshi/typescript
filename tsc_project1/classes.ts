abstract class Department {
    static fiscalYear = 2022;
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
        console.log(Department.fiscalYear);
    }

    abstract describe(this: Department): void;

    addEmployees(employee: string) {
        this.employees.push(employee)
    }

    printEpmloyeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT部門・ID ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('レポートが見つかりません。');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を入力してください。')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('会計部門・ID ' + this.id)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport() {
        console.log(this.reports)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}

// const accounting = new Department("d1", "Accounting");

const employee1 = Department.createEmployee('Max');
console.log(employee1)

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

console.log(it)

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

accounting2.printEpmloyeeInfomation()