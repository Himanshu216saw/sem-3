const promise1 = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve({
            id: 1234,
            username: "himanshu"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve({
            id: 1234,
            orderLocation: "New Delhi"
        });
    } else {
        reject(new Error("Order data not fetched"));
    }
});

// Promise.all([promise1, promise2])
//     .then((responses) => {
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
    

// Promise.race([promise1, promise2])
//     .then((responses) => {
//         console.log(responses);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })

    // Promise.allSettled([promise1, promise2])
    // .then((responses) => {
    //     console.log(responses);
    // })
    // .catch((error) => {
    //     console.log(error.message);
    // })


    // Promise.any([promise1, promise2])
    // .then((responses) => {
    //     return(respond)=>
    //         console.log("response from 1st .then");
    //     return respond
    // })
    // return((respond2)=>{
    //         console.log("response from 2nd .then");
    // console.log(respond2)
    //    })  
    // .catch((error) => {
    //     console.log(error.message);
    // });

// promise1
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });




function fetchUserData() {
    return Promise.any([promise1, promise2])
        .then((response) => {
            console.log("Response from first .then:");
            return response;
        })
        .then((response) => {
            console.log("Response from second .then:");
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.error("Error:");
            throw error;
        });
}
async function getUser() {
    try {
        const user = await fetchUserData();
        console.log("User data:", user);
    } catch (error) {
        console.error("Failed to fetch user:");
    }
}

