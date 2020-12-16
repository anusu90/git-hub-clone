const { Octokit } = require("@octokit/core");

// rajavasanthan@guvi.in


async function searchGithub (){

    const url = "https://api.github.com";
    const request = await fetch(url);
    const response = await request.json();

    console.log(response);
}

// searchGithub ();

// d5a9be1d108841736b180821d95cb1527f720d7d

async function MyFunc (){


    try {
        
        const octokit = new Octokit({ auth: `d5a9be1d108841736b180821d95cb1527f720d7d` });
        const response = await octokit.request('GET /users/{user}',{
            user: 'anusu900uy',
        });
        
        
    } catch (error) {
        
        
        const octokit = new Octokit({ auth: `d5a9be1d108841736b180821d95cb1527f720d7d` });
        const res2 = await octokit.request('GET /search/code', {
            q: 'guvi',
        });

        

        console.log(res2.data)
        
    }



}

MyFunc();
