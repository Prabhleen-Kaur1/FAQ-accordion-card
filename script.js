
let q=document.getElementsByClassName("ques");
let flag =new Array(q.length);
for(let i=0;i<flag.length;i++)
{
    flag[i]=false;
}
for(let index=0;index<q.length;index++)
{
    q[index].addEventListener("click",()=>{display(index+1)});
}
function display(index)
{
    let a=document.querySelector(".ans"+index);
    if(flag[index-1]==false)
    {
        a.style.display="block";
    q[index-1].style.fontWeight="bold";
    flag[index-1]=true;
    document.querySelector(".i"+index).style.transform="rotate(180deg)";
    }
    else{
        a.style.display="none";
        q[index-1].style.fontWeight="normal";
        flag[index-1]=false;
        document.querySelector(".i"+index).style.transform="rotate(0deg)";
    }
    
    

}

