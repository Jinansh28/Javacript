require('dotenv').config()

console.log("Chai aur code");
const express  = require('express')
const app = express()
const PORT = 3000

const gitHubData = {
  "login": "Jinansh28",
  "id": 195888288,
  "node_id": "U_kgDOC60EoA",
  "avatar_url": "https://avatars.githubusercontent.com/u/195888288?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Jinansh28",
  "html_url": "https://github.com/Jinansh28",
  "followers_url": "https://api.github.com/users/Jinansh28/followers",
  "following_url": "https://api.github.com/users/Jinansh28/following{/other_user}",
  "gists_url": "https://api.github.com/users/Jinansh28/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Jinansh28/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Jinansh28/subscriptions",
  "organizations_url": "https://api.github.com/users/Jinansh28/orgs",
  "repos_url": "https://api.github.com/users/Jinansh28/repos",
  "events_url": "https://api.github.com/users/Jinansh28/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Jinansh28/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-21T10:14:04Z",
  "updated_at": "2025-10-20T04:49:11Z"
}

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('Jinanshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(gitHubData);
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})