function isObject(subject){
    return typeof subject == "object";
}

function isArray (subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject){
        copySubject = {};
    } else{
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else{
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else{
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedcourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         instagram: undefined,
//         tiwtter: undefined,
//         facebook: undefined,
//     },
// };

function requireParam(param) {
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requireParam("name"), email = requireParam("email"), age, twitter, instagram, facebook, approvedCourses = [],
    learningPaths = [],
} = {}) {

    return{
        name,
        email,
        age,
        approvedCourses, 
        learningPaths,
        socialMedia: {
            twitter: twitter, instagram, facebook,
        },
    };
}

const juan = createStudent({ email: "juanito@elhuerfanito.com", name: "jaunito" });

const juanito = createStudent({
    name: "juanito",
    age: 18,
    email: "juanito@elhuerfanito.com",
    twitter: "tetejuanito",
});

// const juan = deepCopy(studentBase);
// Object.seal(juan);
// Object.isSealed(juan);
// juan.name = "juanito";

// Object.defineProperty(juan, "name", {
//     value: "juanito",
//     configurable: false,
// });

// const stringFiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringFiedComplexObj);

/////////////////////////////////////////////////////////////////////
    // for (prop in obj1) {
    //     obj2[prop] = obj1[prop];
    // }

    // const obj3 = Object.assign({}, obj1)
    // const obj4 = Object.assign(obj1)

///////////////////////////////////////////////primero///////////////

// const juan = {
//     name: "Jusnito",
//     age: 18,
//     approvedCourses: ["Curso 1"],
//     addCourse(newCourse){
//         console.log("This", this);
//         console.log("This.approvedCourses", this);
//         this.approvedCourses.push(newCourse)
//     }
// };

// // console.log(Object.keys(juan));
// // console.log(Object.getOwnPropertyNames(juan));
// // console.log(Object.entries(juan));

// Object.seal(juan); // no se puede borrar
// Object.freeze(juan); //no se puede borrar ni eliminar ni sobreescribir

// console.log(Object.getOwnPropertyDescriptor(juan));
