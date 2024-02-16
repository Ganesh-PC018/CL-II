function validate()
{
    username =document.getElementById('passwd').value;
     password= document.getElementById('username').value;
    if(username=="2023501" && password=="sggs")
    {
        alert("Login Successful..!!");
    }
    else
    {
        alert("Wrong password or User Name");
    }
}