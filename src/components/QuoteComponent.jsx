const QuoteComponent = ({quote}) => {

    return(
        <>
        {/* <p>{`${quote[0].content} - ${quote[0].author}`}</p> */}
        <div>
            {quote[0].content}
        </div>
        </>
    )
}

export default QuoteComponent;