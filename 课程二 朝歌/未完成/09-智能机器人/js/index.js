let Add = document.getElementsByClassName("right"),//添加
    Cut = document.getElementsByClassName("left"),//减少
    Price = document.getElementsByClassName("new-price"),//单价
    num  = document.getElementsByTagName("input"),//每个产品数量
    List = document.getElementsByClassName("chk-box"),//选框
    checkAll = document.getElementsByClassName("chk-all")[0],//全选
    Sum = document.getElementsByClassName("Sum"),//每款产品总价格
    shopCheck = document.getElementById("shop-chk"),//选择商店
    totalN = document.getElementsByClassName("total")[0],
    totalP = document.getElementsByClassName("totalPrice")[0],
    PriceArr = [],
    NumArr = [];
    containArr = [];
   // console.log(totalPrice);
    
let Num;
let totalNum = 0;
let totalPrice = 0;
// 点击增加 减少
for (let i = 0; i < Add.length; i++) {
    
    NumArr[i] = num[i].value
    PriceArr[i] = parseFloat(Price[i].innerHTML);
    //console.log(PriceArr[i])
    List[i].mark = false;
    Add[i].onclick = function(){
        NumArr[i] ++;
        sum(i);
    }
    Cut[i].onclick  = function(){
        NumArr[i] --;
        if (NumArr[i] < 1) {
            NumArr[i] = 1; 
        }
        sum(i);
    }
    List[i].onclick = function(){
        if(!this.mark){
            this.className = "on";
            containArr[i] = NumArr[i]*PriceArr[i];
            
        }else{
            this.className  = "";
            containArr[i] = 0;
        }
        
        this.mark = !this.mark;
        console.log(this.mark)
        
    }
    
    
    
} 
//totalP.innerHTML = totalPrice; 
//totalNum.innerHTML = totalPrice;
//计算价钱
function sum(i){
    num[i].value = NumArr[i];
    let sumPrice = NumArr[i]*PriceArr[i];
    Sum[i].innerHTML = sumPrice.toFixed(2) + "￥";
    //totalPrice = (NumArr[i]*PriceArr[i]).toFixed(2);
    totalPrice += sumPrice;
    console.log(NumArr[i]*PriceArr[i])
    
    
    // console.log(sumPrice)
    console.log(totalPrice)
  
}

