let a=[[2,2,2],[1,3,4],[6,1,5]];
let b=[[1,2,3],[4,5,6],[7,8,9]];

let c_=[];

for (let indexA = 0; indexA < a.length; indexA++) { //pasa por cada fila
    let fila=[];
    for (let indexAA = 0; indexAA < a[indexA].length; indexAA++) {
            console.log(a[indexA][indexAA]*b[indexAA][indexA]);
            let elementos=a[indexA][indexAA]*b[indexAA][indexA];
            fila.push(elementos);
        }
        c_.push(fila);
    }
    console.log(c_);

