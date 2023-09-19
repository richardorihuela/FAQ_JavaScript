function onQuestionClick(event){
    if(event.target.nextElementSibling.style.display != "inline-block"){
        event.target.nextElementSibling.style.display = "inline-block"
    }else{
        event.target.nextElementSibling.style.display = "none"
    }
}

var list_item_template = "<li id={id} class=question_container><h3 class=question>{id}: {question}</h3><p id={id} class=answer>{answer}</p></li>"

function insertQuestions(){
    var xmlhttp = new XMLHttpRequest();
    var url = "faq_list.json";

    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var myJsonObjectArray = JSON.parse(xmlhttp.responseText);
            var html_text = "";
            for(i in myJsonObjectArray){
                var template = list_item_template;
                template = template.replaceAll("{id}", myJsonObjectArray[i].id);
                template = template.replaceAll("{question}", myJsonObjectArray[i].question);
                template = template.replaceAll("{answer}", myJsonObjectArray[i].answer);
                html_text += template;
            }
            
            document.getElementById("question_list").innerHTML = html_text;
        }
    }
    xmlhttp.send(); //activate onreadystatechange
}

function onClickShowAll(){
    var questions = document.getElementById("question_list").children;
    
    //console.log(document.getElementById("question_list"));
    /*
    quizz = Array.from(questions);
    for(j in quizz){
        console.log(questions[j].children[1]);
    }
    */
    for(var i = 0; i < questions.length; i++){
        //console.log(questions[i].children[1]);
        questions[i].children[1].style.display = "inline-block";
    }
}

function onClickHideAll(){
    var questions = document.getElementById("question_list").children;

    //
    quizz = Array.from(questions);
    for(j in quizz){
        console.log(questions[j].children[1]);
    }
    //
    for(var i = 0; i < questions.length; i++){
        questions[i].children[1].style.display = "none";
    }
}
