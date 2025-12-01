const getTheTitles = function(books) {
    let titles = []
    for (let i of books) {
        titles.push(i.title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
