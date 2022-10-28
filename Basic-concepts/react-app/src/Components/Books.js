
import {Book} from './Book'
export const Books = (props) => {
   
   const data = [{
        "author": "Chinua Achebe",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
      {
        "author": "Dante Alighieri",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
      },
      {
        "author": "Unknown",
        "language": "Akkadian",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
      },
      {
        "author": "Unknown",
        "language": "Hebrew",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
      }]

     
    return (
        <div className="div">
            <ul> {data.map((x,i)=><Book key={i} data = {x} />)}</ul>
        </div>
    )

}