const Books = [
{Title:'Amulet' , Author: 'John Davis' , Genre: 'Sci-fi' },
{Title:'Among The Hidden', Author:'Jax Green', Genre: 'Fiction'}
]


function addBook (Title, Author, Genre) {
    
    Books.push({Title, Author, Genre })
}

function showBooks () {
    let index = 0
for (const Book of Books) {
    

    
    console.log (` ${index} .${Book.Title} , ${Book.Title}`)
    index++
}
}
function showBook (index) {
    console.log (Books[index])
}

