let item1=170
let item2=200
let item3=117
let item4=80
let total=item1+item2+item3+item4
let VAT1="VAT"
let paid=2000
let change=1433
let servedby="ANN"
let number=567
let percentage=10
let result=(number*percentage)/100

console.log(170)
console.log(200)
console.log(117)
console.log(80)
console.log(total)

let first=document.getElementById("I1")
first.innerHTML=item1
let second=document.getElementById("I2")
second.innerHTML=item2
let third=document.getElementById("I3")
third.innerHTML=item3
let fourth=document.getElementById("I4")
fourth.innerHTML=item4
let fifth=document.getElementById("TT")
fifth.innerHTML=total
let sixth=document.getElementById("RS")
sixth.innerHTML=result
let seventh=document.getElementById("PD")
seventh.innerHTML=paid
let eighth=document.getElementById("CH")
eighth.innerHTML=change
let ninth=document.getElementById("SB")
ninth.innerHTML=servedby
