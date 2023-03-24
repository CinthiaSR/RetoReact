
const serverURL = process.env.API_BACKEND_JOBINDER;
console.log("🚀 ~ file: endpoints.js:7 ~  process.env:",  process.env)

export const endpoints = {
    getTodos: `${serverURL}/post`,
}       