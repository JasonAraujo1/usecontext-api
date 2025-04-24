export async function fetchApiUsers() {
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
       const data = await response.json()
       return data
    } catch (error) {
       console.log("erro no fetch", error)
    }
 }
export async function fetchApiUsersComments() {
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/comments")
       const data = await response.json()
       return data
    } catch (error) {
       console.log("erro no fetch", error)
    }
 }
export async function fetchApiUsersTodos() {
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/todos")
       const data = await response.json()
       return data
    } catch (error) {
       console.log("erro no fetch", error)
    }
 }