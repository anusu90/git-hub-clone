const { Octokit } = require("@octokit/core");

// require('dotenv').config()


// rajavasanthan@guvi.in


// async function searchGithub (){

//     const url = "https://api.github.com";
//     const request = await fetch(url);
//     const response = await request.json();

//     console.log(response);
// }

// searchGithub ();

// 8a2d0df6b4a58d9d0bafbd1cd3e78938d3f1f189

const myGitKey = process.env.myGitKey


async function MyFunc (){

    try {
        const octokit = new Octokit({ auth: myGitKey });
        const response = await octokit.request('GET /users/{user}',{
            user: 'anusu900uy',
        });
        
    } catch (error) {
        
        const octokit = new Octokit({ auth: myGitKey });
        const res2 = await octokit.request('GET /search/code', {
            q: 'guvi',
        });
        console.log(res2.data)   
    }

}

MyFunc();
