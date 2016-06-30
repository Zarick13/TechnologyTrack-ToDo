var changeTheme = function() {
    var style = document.getElementById('pageStyle');
    if(style.getAttribute('href') == "css/manilaStyle.css")
    {
        style.setAttribute('href', "css/darkStyle.css");
    }
    else if(style.getAttribute('href') == "css/darkStyle.css")
    {
        style.setAttribute('href', "css/lightStyle.css");
    }
    else if(style.getAttribute('href') == "css/lightStyle.css")
    {
        style.setAttribute('href', "css/manilaStyle.css");
    }
};