var resumeButton = document.getElementById("resume-button");
var resumeViewer = document.getElementById("resume-pdf");
var resumeShown = false;


function toggleResume(){
    resumeViewer.style.width = 0;
    resumeViewer.style.height = 0;
    //resumeViewer.style.transition = 0.5 +"s";
    resumeViewer.style.visibility = "visible";

    if(!resumeShown)
    {
        resumeViewer.style.width = 900 + "px";
        resumeViewer.style.height = 1120 + "px";
        resumeButton.style.height = 20 + "px";
        resumeButton.innerText = "Hide Resume";
        resumeShown = true;
    }
    else
    {
        resumeViewer.style.width = 0;
        resumeViewer.style.height = 0;
        resumeButton.style.height = 100 + "px";
        resumeButton.innerText = "Show Resume";
        resumeShown = false;
    }
}