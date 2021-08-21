var users = [
    {
        name: 'Camilo',
        gender: 'O',
        hobby: 'Sports, read, study',
        avatar: 'atleta.png', 
    },
    {
        name: 'Adah',
        gender: 'F',
        hobby:'Draw, dance, traveling',
        avatar:'disfraz.png',
    },
    {
        name:'Julio',
        gender: 'M',
        hobby:'Cooking, read',
        avatar:'masculino.png',
    },
    {
        name: 'Abril',
        gender: 'O',
        hobby: 'Gardering',
        avatar: 'granjero.png',
    },
    {
        name: 'Daniela',
        gender: 'O',
        hobby: 'Dance, sports',
        avatar: 'mujer-de-negocios.png',
    },
    {
        name: 'Olga',
        gender: 'F',
        hobby: 'Study, drawing',
        avatar: 'mujer.png',
    },
]
window.addEventListener('load', function(){

    function search() {

        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender); 

        var resultsHTML = '';
        var numUsers = users.length;

        for(var i = 0; i < numUsers; i++){

            if (gender == 'A' || gender == users[i].gender){
                if(hobby == '' || hobby == users[i].hobby){
                    resultsHTML += '<div class="person-row">\
                                    <img src="images/' + users[i].avatar +'" />\
                                    <div class="person-info">\
                                    <div>' + users[i].name + '</div>\
                                    <div>' + users[i].hobby + '</div></div>\
                                    <button>Add as friend</button></div>';
                }
            }
        }

        results.innerHTML = resultsHTML;
    };

    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});