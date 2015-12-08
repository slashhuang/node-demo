/**
 * Created by slashhuang on 15/12/3.
 */

var test = new Array(10);
for(var i = 0;i<test.length;i++){

    if(i==6){
       return false

    }else{
        test[i] = i;
    }
}
console.log(test);