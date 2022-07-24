const url = "https://jsonplaceholder.typicode.com/posts"


export async function getPost(){
    let response = await fetch(url)
    let data = await response.json()
    return data;
}

