// api for adding content to cards in Html 




//alt codes (some keys on my keyboard isn't working )
// ` = alt 96
// x = alt 120 
// → = 26 

function getCard(title,description,usage){
    return `<div class="card">     
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"> ${description}    </p>
                    <p class="card-text"><small class="text-muted">${usage}</small></p>
                </div>
            </div>
            `;
}

module.exports = getCard;