function spiralorderMatrix(arr){
    const res = [];
    let top = 0, bottom = arr.length - 1, left = 0, right = arr[0].length - 1;
    let dir = 0;

    while(top<=bottom && left<=right){
        if(dir == 0){
            for (let index = left; index <= right; index++) {
                const element = arr[top][index];
                res.push(element)
            }
            top+=1
            dir=1
        }

        else if(dir == 1){
            for (let index = top; index <= bottom; index++) {
                const element = arr[index][right];
                res.push(element)
            }
            right-=1
            dir=2
        }

        else if(dir == 2){
            for (let index = right; index >= left; index--) {
                const element = arr[bottom][index];
                res.push(element)
            }
            bottom-=1
            dir=3
        }
        
        else if(dir == 3){
            for (let index = bottom; index >= top; index--) {
                const element = arr[index][left];
                res.push(element)
            }
            left+=1
            dir=0
        }
    }
    return res;
}
console.log(spiralorderMatrix([[1,2,3],[4,5,6],[7,8,9]]));
