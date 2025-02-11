const users = [
  { id: "1", name: "Robin" },
  { id: "2", name: "Dennis" },
  { id: "3", name: "Sara" },
]

// Imagine this function was 10x bigger
// with 10x more references to `id`

// How do we change id to userId?
// => (answer: use F2 or right click -> rename symbol)
const filterUsersById = (id: string) => {
  return users.filter((u) => u.id === id)
}
