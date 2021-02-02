const uniqSort = function (arr){
    const breadCrumbs = {}; 
    const result = []
    for (let i = 0; i< arr.length; i++){ 
        if(!breadCrumbs[arr[i]]) {
            result.push(arr[i])
            breadCrumbs[arr[i]] = true;
            
        }
    }
    return result.sort((a,b) => a - b) // returning in ascending order
}


console.log(uniqSort([4,2,2,3,2,2,2]));
