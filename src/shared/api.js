import fetch from 'isomorphic-fetch';

export function fetchPopularRepos(language = 'all') {
  const encodedURI = encodeURI(`https://jsonplaceholder.typicode.com/posts`);

  return fetch(encodedURI)
    .then((data) => data.json())
    .catch((error) => {
      console.warn(error);
      return null;
    });
}
