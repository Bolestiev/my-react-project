const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>; // Додайте ключ до елементів списку
      })}
    </ul>
  );
};

export default BookList;
