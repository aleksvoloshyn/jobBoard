export const getDaysPassed = (postedDate) => {
  const endDate = Date.now() / 1000 / 24 / 60 / 60
  const startDate = Date.parse(postedDate) / 1000 / 24 / 60 / 60
  return Math.round(endDate - startDate)
}
