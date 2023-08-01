import { Post } from "../models/post.interface";

let posts: Post[] = [
    {
        "id": 1,
        "body": "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title": "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active": true,
        "type": "news"
    },
    {
        "id": 2,
        "body": "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title": "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active": true,
        "type": "education"
    },
    {
        "id": 3,
        "body": "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title": "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active": true,
        "type": "politic"
    },
    {
        "id": 4,
        "body": "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title": "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active": false,
        "type": "news"
    },
    {
        "id": 5,
        "body": "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title": "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active": false,
        "type": "education"
    }
]

export async function getPosts() {
    return posts;
}

export async function updatePost(data: Partial<Post>, id: number) {
    posts = posts.map(post => post.id == id ? { ...post, ...data } : post);
    return posts.find(post => post.id == id) as Post
}
