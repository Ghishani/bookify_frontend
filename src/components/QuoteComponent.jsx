const QuoteComponent = ({quote}) => {

    console.log("quote object: "+quote);

    return(
        <>
            <div className="quote-container">
                <article className="quote-text">{`"${quote[0].content}" - `}</article>
                <article className="quote-author">{`${quote[0].author}`}</article>
            </div>
        </>
    )
}

export default QuoteComponent;