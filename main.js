function savename() 
{
    docname = document.getElementById("document_name").value;
    document.getElementById("document_name_label").innerHTML = docname;
}

function bold()
{
    var target = document.getElementById("write_area");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}

function italics()
{
        var target = document.getElementById("write_area");
        if( target.style.fontStyle == "italic" ) {
            target.style.fontStyle = "normal";
        } else {
            target.style.fontStyle = "italic";
        }
}

function underline()
{
    var target = document.getElementById("write_area");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }   
}

function add_font_family()
{
    document.getElementById("write_area").style.fontFamily = document.getElementById("font_family_input").value;
}

function add_font_size()
{
    document.getElementById("write_area").style.fontSize = document.getElementById("font_size_input").value;
}

function add_font_color()
{
    document.getElementById("write_area").style.color = document.getElementById("font_color_input").value;
}

function replace()
{
    text = document.getElementById("write_area").value;
    word1 = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    replaced_text = text.replace(word1, word2);
}

function delete_all()
{
    
}

function backgroundcolor_save()
{
    document.getElementById("write_area").style.backgroundColor = document.getElementById("bgcolor_save_text").value;
}

function save_margins()
{
    rm = document.getElementById("rm").value;
    lm = document.getElementById("lm").value;
    tm = document.getElementById("tm").value;
    bm = document.getElementById("bm").value;

    document.getElementById("write_area").style.marginTop = tm;
    document.getElementById("write_area").style.marginLeft = lm;
    document.getElementById("write_area").style.marginRight = rm;
    document.getElementById("write_area").style.marginBottom = bm;
}