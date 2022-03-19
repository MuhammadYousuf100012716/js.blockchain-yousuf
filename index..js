// TWO DIMENSIONAL ARRAY /MULTI DIMENSIONAL ARRAY
var student1=["yousuf","atif","ibrahim","kashif","asif"];
var subjects=["maths","english","urdu","computer","physics"];
var marks=[
    [23,31,45,87,54],
    [34,54,64,86,88],
    [90,85,93,82,21],
    [32,43,23,22,11],
    [81,35,65,44,33]
]
for(var i=0;i<student1.length;i++){
    for(var j=0;j<subjects.length;j++){
console.log(student1[i]+" got "+marks[i][j]+" marks in " +subjects[j])
    }
}
