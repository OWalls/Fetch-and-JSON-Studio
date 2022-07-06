window.addEventListener('load', function() {
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
            response.json().then(function(json){
                console.log(json);

                const div = document.getElementById("container");

                let austronauts = '';

                for(austronaut in json) 
                {
                    austronauts += 
                    `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[austronaut].firstName} ${json[austronaut].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[austronaut].hoursInSpace} </li>
                            <li>Active: ${json[austronaut].active} </li>
                            <li>Skills: ${json[austronaut].skills} </li>
                        </ul>
                        </div>
                        <img class="avatar" src=${ json[austronaut].picture} >   
                        </div>
                    `;
                }
                div.innerHTML = austronauts;
               
            });
    });

});