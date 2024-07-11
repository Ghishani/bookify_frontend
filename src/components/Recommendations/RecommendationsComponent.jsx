const RecommendationsComponent = ({books}) => {
    
    console.log("books"+books);

    const genreArray = books.map((book) => book.genre);
    console.log(genreArray);

    const getTopThreeGenres = (genreArray) => {
        
        const genreCount = genreArray.reduce((accumulator, genre) => {
            accumulator[genre] = (accumulator[genre] || 0) +1;
            return accumulator;
        }, {})

        const sortedGenres = Object.keys(genreCount).sort((a,b) => genreCount[b] - genreCount[a]);

        return sortedGenres.slice(0, 3);
    }

    const topThreeGenres = getTopThreeGenres(genreArray);

    return(
        <ul>
            {topThreeGenres.map((genre, index)=> {
                return(
                    <li key={index}>{genre}</li>
                )})}
        </ul>
    )
}

export default RecommendationsComponent;