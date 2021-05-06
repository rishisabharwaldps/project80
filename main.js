function get_paragraph1() {
    var inputs=[];
    for (var i=1; i<=6; i++)
    {
        inputs.push(document.getElementById("para1_text_input1_"+i).value);
    }

    document.getElementById("show_paragraph1").innerHTML=inputs.join(". ");
}
 
function get_paragraph2(){
    var inputs=[];
    for (var k=1; k<=6; k++)
    {
        inputs.push(document.getElementById("para2_text_input1_"+i).value);
        
    }
    inputs.join(". ");

    document.getElementById("show_paragraph2").innerHTML=inputs.join(". ");
}