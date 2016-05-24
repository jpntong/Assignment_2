data = [
 John Hopkins
 Greg Demartius
 Jim Bardenson
 Jon Riesinger
 Hamish Apples
]

//for each iteration of i, call corresponding styles from the data array

for  (var i = 0; i <= 5; i ++) {
    var name = document.createElement('div');
    bar.setAttribute('class', 'name');
    document.getElementById('artists').appendChild(name);
    printArray(data[i]);

    
}