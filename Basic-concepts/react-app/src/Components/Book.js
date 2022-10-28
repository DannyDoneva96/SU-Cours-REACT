export const Book = (props) => {

    return (

        <li key={props.i}>
            <h4>{props.data.title}</h4>
            <ol>
                <li>Language:{props.data.language}</li>
                <li>Pages:{props.data.pages}</li>
                <li>Year:{props.data.year}</li>
            </ol>
            <footer>Author: {props.data.author}</footer>
        </li>
    )
}