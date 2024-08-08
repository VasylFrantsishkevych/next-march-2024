import { IComment } from "@/models/comments.interface";
import { IPost } from "@/models/post.interface";
import { IUser } from "@/models/user.interface";

const userService = {
   getAll: async (): Promise<IUser[]> => {
      let users = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
      return users;
   },
   getById: async (id: number) => {
      let user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then(value => value.json());
      return user;
  }
}

const postService = {
   getAll: async (): Promise<IPost[]> => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
      return response
   }
}

const commentService = {
   getAll: async (): Promise<IComment[]> => {
      let response = await fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json())
      return response
   }
}

export {
   userService,
   postService,
   commentService
}