let tableau = [500,3,12,15,2,96,35,65,15,78,15]
let tableauTrie = tableau.sort((a,b)=>{
    return a-b
})
console.log(tableauTrie);
var matrice = new Array;

    for (let index = 0; index <= tableauTrie[tableauTrie.length-1]; index++) {
        matrice[index] = index;
        for (let j = 0; j < tableauTrie.length; j++) {
            if(matrice[index]==tableauTrie[j]) {
                console.log('arrive',tableauTrie[j])
                break;
            }
        }
        
        
    }
   

    // console.table(matrice)

