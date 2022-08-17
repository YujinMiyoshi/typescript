enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}

//const person: {
//  name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
//} = {
//    name: 'yota',
//    age: 30,
//    hobbies: ['Sports', 'Cooking'],
//    role: [2, 'author'],
//};

//person.role.push('admin');
//person.role[1] = 10;

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}