function ac()
{
    document.getElementById("res").value="";
}
function show(val)
{
    document.getElementById("res").value+=val;
}

function cal()
{
    var a=eval(document.getElementById("res").value);
    document.getElementById("res").value=a;
}