const class_Ten =[{"roll_no":1 ,"telugu":50,"hindi":55,"english":78,"maths":49,"science":55,"social":70},
{"roll_no":2 ,"telugu":40,"hindi":40,"english":90,"maths":99,"science":65,"social":30},
{"roll_no":3 ,"telugu":60,"hindi":35,"english":90,"maths":99,"science":75,"social":40},
{"roll_no":4 ,"telugu":95,"hindi":35,"english":90,"maths":99,"science":85,"social":70},
{"roll_no":5 ,"telugu":20,"hindi":35,"english":50,"maths":39,"science":75,"social":80},
{"roll_no":6 ,"telugu":40,"hindi":35,"english":40,"maths":29,"science":45,"social":40},
{"roll_no":7 ,"telugu":40,"hindi":85,"english":90,"maths":99,"science":65,"social":40},
{"roll_no":8 ,"telugu":90,"hindi":75,"english":30,"maths":39,"science":75,"social":70},
{"roll_no":9 ,"telugu":70,"hindi":55,"english":60,"maths":99,"science":85,"social":88},
{"roll_no":10 ,"telugu":70,"hindi":35,"english":30,"maths":49,"science":95,"social":70},
];

const percentage_class = (student)=>{
    total = (student.telugu+student.hindi+student.english+student.maths+student.science+student.social);
    student.percent = (total/6).toFixed(2);
    student.classAwarded = student.percent >= 90 ? "Distinction" : student.percent >= 70 ? "First Class" : student.percent >= 60 ? "Second Class" : student.percent >= 40 ? "Third Class" : "Fail" ;
}
const getStemPerformers = (student)=> {
    return (((student.maths + student.science)/2) > 90)
}

const main = () =>{
    class_Ten.map(percentage_class);
    console.table(class_Ten);
    console.log("Students with more than 90 percent in Science and Maths");
    let SciMathPercent = class_Ten.filter(getStemPerformers);
    console.table(SciMathPercent);
    console.log("Students who have failed");
    checkPromote = class_Ten.filter(student => (student.maths < 40 || student.english < 40 || student.hindi < 40 || student.telugu < 40 || student.social < 40 || student.science < 40));
    console.table(checkPromote);
    let sortedClassTen = (class_Ten.sort((a, b) => (a.percent < b.percent) ? 1 : -1));
    console.log("Sorted by overall percentage")
    console.table(sortedClassTen);   
}
main();

 //let subject_marks = class_Ten.map(({ roll_no, ...rest }) => rest);
//obj.value
// dont mutate objects, make new objects every time
