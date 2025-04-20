export default function getEnvVariable(variableName) {
  return fetch("/.netlify/functions/getEnv/")
    .then(response => response.text())
    .then(html => html)
    .catch(err => {
      console.log(err.message);
      return "";
    });
}