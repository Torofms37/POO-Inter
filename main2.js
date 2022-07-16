class Comment {
  constructor({
    content,
    studentName, 
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content + " me gustó");
    //JuanDC (estudiante)
    // 0 likes
    //me encantó
  }
}

function videoPlay(id) {
    const urlSecreta = "https://platiz.com"
    console.log("Se está produciendo desde la url " + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://platiz.com"
    console.log("Se está pausando la url " + urlSecreta)
}

class PlatziClass {
    constructor({
        name,
        videoID, 
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });
  
  
  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
      const Comment = new Comment({
        content: commentContent,
        studentName: this.name,
      });
      comment.publicar();
    }
  }
  
  class FreeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
      }
    }
  }
  
  class BasicStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
      }
    }
  }
  
  class ExpertStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  }

  class TeacherStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
      const Comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: "profesor",
      });
      comment.publicar();
    }
  }
  
  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

  const freddy = new TeacherStudent({
    name: "Freddy",
    username: "freddyer",
    email: "freddier@juanito.com",
    instagram: "freddier_feliz",
  });

// const juan1 = {
//     name: "JuamDC",
//     username: "juandc",
//     points: 100,
//     socialMedia: {
//         titter: "toro",
//         insta: "toro",
//         face: undefined,
//     },

//     approvedCourses: [
//         "Curso definitivo de html y css",
//         "Curso práctico de html y css",
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso definitivo de html y css",
//                 "Curso práctico de html y css",
//                 "Curso Responsive de html y css",
//                 "Curso Grid de html y css",
//             ],
//         },
//         {
//             name: "Escuela de Videojuegos en Js en Web",
//             courses: [
//                 "Curso juego de html y css",
//                 "Curso js de html y css",
//                 "Curso respon de html y css",
//                 "Curso flex de html y css",
//             ],

//         },
//     ],
// };

// const miguelito1 = {
//     name: "Miguelito",
//     username: "MigueliFee",
//     points: 1000,
//     socialMedia: {
//         titter: "Miguelitoee",
//         insta: "Miguelitooe",
//         face: undefined,
//     },

//     approvedCourses: [
//         "Curso Data Base",
//         "Curso dataviz",
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso definitivo de html y css",
//                 "Curso práctico de html y css",
//                 "Curso Responsive de html y css",
//                 "Curso Grid de html y css",
//             ],
//         },
//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso bussines",
//                 "Curso bussines-1",
//                 "Curso bussines-2",
//                 "Curso bussines-3",
//             ],

//         },
//     ],
// };

// const natalia = {
//     name: "Natalia",
//     age: 27,
//     cursosAprobados: [
//         "Curso definitivo de HTML y CSS",
//         "Curso práctico de HTML y CSS"
//     ],

//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito);
//     }
// };

// function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
//     this.aprobarCurso = function(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito);
//     }
// }

// Student.prototype.aprobarCurso = function (nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito);
// }

// const juanita = new Student(
//     "Juanita ale",
//      15,
//      [
//         "Curso de Introducción a los videojuegos",
//         "Curso de Creación de Personajes en los videojuegos",
//      ],
//      );

//      // Prototio con la sintaxis de clases

//      class Student2 {
//         constructor({
//             name, 
//             age, 
//             cursosAprobados = [],
//             email,
//             }){ 
//             this.name = name;
//             this.age = age;
//             this.email = email;
//             this.cursosAprobados = cursosAprobados;
//         }

//         aprobarCurso(nuevoCursito) {
//             this.cursosAprobados.push(nuevoCursito);
//         }

//         const miguelito = new Student2({
//             email: "Miguelito@hotmal.cimom",
//             name: "Miguel",
//             age: 28,
//          });
//         }