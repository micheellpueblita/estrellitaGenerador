const canva = document.getElementById("estrella"); 
const ctx = canva.getContext("2d"); 
const color = document.getElementById("color"); 
const lados = document.getElementById("lados");
const picudez = document.getElementById("picudez"); 
const relleno =  document.getElementById("relleno");

function rellenar(){
        if(relleno.value == "off")
                ctx.stroke(); 
                
        else if(relleno.value == "on")
                ctx.fill(); 
}; 
function estrella(){

        var tamaño = 500; 
        var X = tamaño/2; 
        var Y = tamaño/2; 
        var Inte = (picudez.value); 
        var Ext = 250; 
        var numLados = (lados.value)*2; 
        var grados = (Math.PI * 2) /numLados; 
        var radio; 
        var angulo; 
        var ejex, ejey; 

        ctx.lineWidth = 4; 
        ctx.strokeStyle = color.value;
        ctx.fillStyle = color.value; 
        
        ctx.beginPath(); 
        
        for(var i = 0; i< numLados; i++)
        {
                if(i%2==0) 
                        radio = Inte; 
                else 
                        radio = Ext; 

                angulo = i * grados; 
                ejex = radio * Math.cos(angulo) + X; 
                ejey = radio * Math.sin(angulo) + Y; 
                ctx.lineTo(ejex, ejey); 
        }
        ctx.closePath(); 
        rellenar(); 
};
estrella();  
color.addEventListener("change", (evento)=>
{
        canva.width = 500;
        estrella(); 
});
lados.addEventListener("change", (eventos) =>
{
        if(lados.value>=4 && lados.value <= 30)
        {
                canva.width = 500; 
                estrella(); 
        }
        else 
                alert("No puedo hacer una estrella con esos lados :("); 
});

picudez.addEventListener("change", (eventos) =>
{
        canva.width = 500; 
        estrella(); 
});

relleno.addEventListener("change", (evento) =>
{
        canva.width = 500; 
        if(relleno.value == "off")
                relleno.value = "on";
                
        else if(relleno.value == "on")
                relleno.value = "off"; 
        estrella(); 
});
