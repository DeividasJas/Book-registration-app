import { books } from '../../json_server/data_json.json';
import BuyButtonModal from '../components/BuyButtonModal';
function Books() {
  return (
    <>
      <div className='grid grid-cols-3'>
        {books.map((book, index) => {
          return (
            <div key={index} className='card card-compact min-w-52 max-w-72 bg-base-100 shadow-xl'>
              <figure style={{position: 'relative'}}>
                <img
                  src={book.cover}
                  alt='knyga'
                  className='max-h-80 min-h-80'
                />

                {book.reserved ? 
                <div className='badge badge-accent' style={{position: 'absolute', zIndex: '2', bottom: '5px', left: '30px'}}>Available</div> :
                <div className="badge badge-secondary" style={{position: 'absolute', zIndex: '2', bottom: '5px', left: '30px'}}>Sold out</div>

            }
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{book.title}</h2>
                <p>{book.author}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>
                    ${book.price}
                    <BuyButtonModal book={book}/>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Books;
