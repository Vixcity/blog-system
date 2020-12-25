let i = 25;
setInterval(function(){if(i==25){i=26}else if(i==26){i=25};document.getElementsByClassName('clearfix')[i].click();console.log(i)},100)

function showPassWord(){
    let arrs = []
    let passWord = []
    let num = 0
    function getPassWord(sum){
        num+=1
        if (num == 7) {arrs = sum;return}
        if(sum.length==0){
            getPassWord(['0','2','3','5'])
        }else {
            let arr = []
            for (let i in sum){
                for(o in ['0','2','3','5']){
                    arr.push(sum[i]+['0','2','3','5'][o])
                }
            }
            getPassWord(arr)
        }
    }
    getPassWord([])
    for (let i in arrs){
        if(arrs[i].indexOf('0')!=-1&&arrs[i].indexOf('2')!=-1&&arrs[i].indexOf('3')!=-1&&arrs[i].indexOf('5')!=-1){
            passWord.push(arrs[i])
        } else {
            continue
        }
    }
    console.log(passWord)
}
