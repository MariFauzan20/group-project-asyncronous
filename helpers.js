export const getPosts = async () => {
  // EDIT HERE
  const posts = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return posts;
};

export const getPost = async (post_id) => {
  // EDIT HERE
  const post = fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return post;
};

export const getPostComments = async (post_id) => {
  // EDIT HERE
  const postComment = fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`,
    {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return postComment;
};

export const getAuthor = async (user_id) => {
  // EDIT HERE
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch("https://source.unsplash.com/random/720x480");
    return image.url;
  } catch (error) {
    console.log("getRandomPic", error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch("https://source.unsplash.com/480x480/?profile");
    return image.url;
  } catch (error) {
    console.log("getRandomProfile", error);
    throw error;
  }
};
