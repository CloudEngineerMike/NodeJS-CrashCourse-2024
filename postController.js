const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
];

const getPosts = () => posts;

export const getPostLength = () => posts.length;

// export as default when using ES6 modules, because it's the only thing being exported
// or use module.exports for CommonJS
export default getPosts;

