const fetuserdata = new Promise((resolve, reject) => {
    let sucess = true;
    setTimeout(() => {
        if (sucess) {
            resolve({ id: 10, username: "himanshu" });
        } else {
            reject("failed to fetch the user data");
        }
    }, 1000);
});

fetuserdata
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });