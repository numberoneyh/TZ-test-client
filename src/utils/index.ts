export const getPageCount = (totalcoun: number, limit: number) => {
  return Math.ceil(totalcoun / limit)
}
