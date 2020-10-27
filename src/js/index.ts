//Write your Typescript code here

let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

if (myElement.hasAttribute("class"))
{
    if(myElement.getAttribute("class")=="unhealthy")
    {
        myElement.setAttribute("class", "healthy");
    }
}

let myElement2:HTMLLIElement = <HTMLLIElement> document.getElementById("1");
myElement2.setAttribute("hidden","true");
console.log(myElement2);

let myList:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");

for(let i=0; i<myList.length; i++)
{
    if (myList[i].hasAttribute("class"))
    {
        if(myList[i].getAttribute("class")=="unhealthy")
        {
            myList[i].setAttribute("class", "healthy");
        }
    }
}
console.log(myList);

let x = document.getElementById("3").parentNode.nodeName;
console.log(x);