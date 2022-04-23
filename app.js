var email=document.getElementById('email')
var setpass=document.getElementById('setpass')
var conpass=document.getElementById('conpass')
function signup(){

    localStorage.setItem('email',email.value)
    localStorage.setItem('setpass',setpass.value)
    localStorage.setItem('conpass',conpass.value)
    if(setpass.value!=conpass.value){
        document.getElementById('error').innerHTML=("Password doesn't match")
    }
    else{  
        location.href='index2.html'
    }
}

var checkemail=document.getElementById('checkemail')
var checkpass=document.getElementById('checkpass')
function signin(){
    localStorage.setItem('checkemail',checkemail.value)
    localStorage.setItem('checkpass',checkpass.value)

    if(checkemail.value!=localStorage.getItem('email') && checkpass!=localStorage.getItem('setpass')){
           
        document.getElementById('message1').innerHTML=('Email or Password incorrect')
    }
    else{
        
        location.href='data.html'
    }}
    function addData(){
        var description=document.getElementById('description').value
        var amount=document.getElementById('amount').value
        var category=document.getElementById('category').value
        var today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        var dateTime = date+' '+time
        if(description =="" || amount =="" || category==""){
            alert("Please enter something first!")
        }else{
            var data=""
     
            data="<tr><td>"+description+"</td><td>"+amount+"</td><td>"+category+"</td><td>"+dateTime+"</td></tr>"
     
            document.getElementById('result').innerHTML+=data
     
            document.getElementById('descrition').value=""
            document.getElementById('amount').value=""
            document.getElementById('category').value=""
        }
     
    }