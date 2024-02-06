let Drawing_Color="black";
let initial=16;
let RainBow=false;
function Create_Pixels(){
    document.head.innerHTML+=`<style>*{--Span-Height:${300/initial}px; --Span-Width:${(600)/initial}px;}<style>`;
    let screen=document.getElementById('screen');
    screen.innerHTML="";
    for(let i=1;i<=initial*initial;i++)
    {
        let square=document.createElement('span');
        square.addEventListener("mouseover",Draw);
        screen.insertAdjacentElement("beforeend", square);
    }
}
function Draw(event)
{
    if(RainBow)
    {
        let Colors_Rainbow={0:'red',1:'green',2:'pink',3:'yellow',4:'chocolate',5:'chartreuse'};
        let color=Math.floor((Math.random()*7));
        Drawing_Color=Colors_Rainbow[color];
    }
    event.currentTarget.style.backgroundColor=Drawing_Color;
}
function Reset()
{
    let All_span=document.querySelectorAll('.screen>span');
    let RainBow=false;
    for(let span in All_span)
    {
        All_span[span].style.backgroundColor="#fff";
    }
}
function Pixel_User_Select()
{
    let size=document.getElementById('size').value;
    if(size>=2 && size<=100)
    {
        initial=size;
        Create_Pixels();
    }

}
Create_Pixels();