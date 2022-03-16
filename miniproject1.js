var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        console.log("Nationality is ".concat(this.nationality));
    };
    return Students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, gender, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    return UnderGraduates;
}(Students));
var student1 = new Students("Beth", 35, "Female", "American");
var student2 = new Students("Jo", 38, "Female", "Mexican");
var student3 = new UnderGraduates("Bobby", 31, "Male", "Albertan", 5, 4);
var student4 = new UnderGraduates("Rick", 42, "Male", "Mexican", 3, 2);
var student5 = new UnderGraduates("Dutton", 59, "Male", "American", 4, 1.5);
student1.getNationality();
student2.getNationality();
student3.getNationality();
student4.getNationality();
student3.gender = "female";
student4.gender = "female";
student5.gender = "female";
console.log(student3);
console.log(student4);
console.log(student5);
