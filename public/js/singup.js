const singupBtn =   document.getElementById("singup-btn")
const fullName =    document.getElementById("name-signup")
const email  = document.getElementById("email-address-signup")
const pass =   document.getElementById("password-signup")


console.log(singupBtn)
singupBtn.addEventListener("click"  ,  async()=>{
    if (fullName.value === "" || email.value === "" || pass.value === ""){
        alert("please fill full information")
        return
    }
    
    let user  = {
        fullName:fullName.value,
        email:email.value,
        password:pass.value
    }

    const response = await fetch("/auth/singup" ,  {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
})