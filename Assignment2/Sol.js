
function All()
{
    document.getElementById("c1").src= "./images/cake.jpg";
    document.getElementById("c2").src = "./images/cup cake.jpg";
    document.getElementById("c3").src = "./images/sweetcake.jpg";

    document.getElementById("c1Name").innerHTML= "Cake";
    document.getElementById("c2Name").innerHTML= "Cup Cake";
    document.getElementById("c3Name").innerHTML= "Sweet Cake";

    document.getElementById("c1cost").innerHTML= "$10";
    document.getElementById("c2cost").innerHTML = "$5";
    document.getElementById("c3cost").innerHTML = "$15";
}
function cake1()
{
    document.getElementById("c1").src= "./images/cake3.jpg"; //Displaying  cake Images 
    document.getElementById("c2").src= "./images/cake1.jpg";
    document.getElementById("c3").src = "./images/cake2.jpg";

    var data=document.querySelectorAll(".Name");  
    data.forEach((i) => i.innerHTML="Cake");        //Displaying name of cake
                                                   
    var cost=document.querySelectorAll(".cost");  
    cost.forEach((i) => i.innerHTML="$10");          // Displaying Cost of cake

 
}

function cake2()
{
  
    document.getElementById("c1").src= "./images/cup cake.jpg"; //Displaying  cake Images 
    document.getElementById("c2").src= "./images/cup cake1.jpg";
    document.getElementById("c3").src = "./images/cup cake2.jpg";

    var data=document.querySelectorAll(".Name");  
    data.forEach((i) => i.innerHTML="Cup Cake");        //Displaying name of cake
                                                   
    var cost=document.querySelectorAll(".cost");  
    cost.forEach((i) => i.innerHTML="$5");          // Displaying Cost of cake
}
function cake3()
{

    document.getElementById("c1").src= "./images/sweetcake.jpg"; //Displaying  cake Images 
    document.getElementById("c2").src= "./images/sweetcake1.jpg";
    document.getElementById("c3").src = "./images/sweetcake2.jpg";

    var data=document.querySelectorAll(".Name");  
    data.forEach((i) => i.innerHTML="Sweet Cake");        //Displaying name of cake
                                                   
    var cost=document.querySelectorAll(".cost");  
    cost.forEach((i) => i.innerHTML="$15");        //Displaying cost of cake
}

function search(){
    var data= document.getElementById("query").value;
    data=data.toLowerCase();
    switch (data) {
        case 'all':
            All();
            break;
        case 'cake':
            cake1();
            break;
        case 'cupcake':
            cake2();
            break;
        case 'sweetcake':
            cake3();
            break;
        case '':
            alert("Enter Cake Name");
            break;
        default: 
           alert("Sorry the cake u are searching not there");
           document.getElementById("query").value="";
            break;
    }

}