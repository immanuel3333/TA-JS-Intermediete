/*
Soal - 04
Kamu diminta untuk membuat beberapa class dengan spesifikasi sebagai berikut:
Course
properties:
subject [String] => nama pelajaran
quota [Number] => jumlah peserta atau siswa
attendance [Number] => jumlah minimum kehadiran sebagai syarat untuk mengikuti ujian
methods:
getSubject [String] => mengembalikan nama course saat ini
getAttendance [Number] => mengembalikan attenance course saat ini
decreaseQuota [void] => mengurangi jumlah quota dengan 1
CourseOffering
properties:
course [String] => mata pelajran yang diambil oleh siswa
grade [Number] => nilai yang diraih oleh siswa
attendance [Number] => total kehadiran siswa pada suatu kelas, secara default dia memiliki nilai 0
Student
properties:
name [String] => nama lengkap siswa
gender [String] => jenis kelamin
courseOfferings [Array of CourseOffering] => daftar mata pelajaran yang diambil oleh siswa
methods:
takeNewCourse [void] => fungsi ini akan menambahkan course yang ingin kita ambil kedalam property courseOfferings, kita tidak boleh mengambil atau menambahkan mata pelajaran yang sudah kita ambil kedalam property courseOfferings
courseAttendance [void] => menambahkan kehadiran dengan 1 poin
courseTest [void] => akan memasukan nilai secara acak kedalamm property grade, namun sebelum kita dapat mengambil ujian kita haruslah lolos absensi terlebih dahulu
*/

class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
  }

  getIndexFromCourse(course) {
    const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
      return courseOffering.course.getSubject() === course.getSubject();
    });
    return indexOfCourse;
  }

  takeNewCourse(course) {
    // check if course already in array
    const isCourseExist = this.courseOfferings.find((courseOffering) => {
      return courseOffering.course.getSubject() === course.getSubject();
    });

    // push the course into array if the course not exist yet
    if (this.courseOfferings.length === 0 || !isCourseExist) {
      this.courseOfferings.push(new CourseOffering(course));
      course.decreaseQuota();
    }
  }

  courseAttendance(course) {
    const indexOfCourse = this.getIndexFromCourse(course);
    if (indexOfCourse >= 0) {
      this.courseOfferings[indexOfCourse].attendance++;
    }
  }

  takeATest(course) {
    const indexOfCourse = this.getIndexFromCourse(course);
    if (indexOfCourse >= 0) {
      if (
        this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()
      ) {
        this.courseOfferings[indexOfCourse].grade = Math.floor(
          Math.random() * 100
        );
      } else {
        console.log("please fill your absent");
      }
    }
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }
  getSubject() {
    return this.subject;
  }
  getAttendance() {
    return this.attendance;
  }
  decreaseQuota() {
    this.quota--;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
