export function selectbook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
