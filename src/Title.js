const Title = ({ title }) => {
    const titleWords = title.split(' ')
    
    let formattedWords = []
    titleWords.forEach((word, index, words) => {
        formattedWords.push(<span className="firstLetter">{word.charAt(0)}</span>)
        formattedWords.push(word.slice(1,word.length))
        if(index !== words.length-1) formattedWords.push(" ") //add space between words
    })
    
    return (
        <div className='title'>
            <h1>{formattedWords.map(item => item)}</h1>
        </div>
      )
}
 
export default Title