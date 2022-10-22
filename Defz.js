    // Easie Fetch Function in js 
    // @Emiroow 
    // Fetch Easier :)
    const FetchVip = async (EndPoint, Route, Body, Method, Token, TokenName, FormData) => {

        // log the parametrs
        let LogData = {
            "EndPoint": EndPoint,
            "Route": Route,
            "Body": Body,
            "Method": Method,
            "Token": Token,
            "TokenName": TokenName,
            "FormData": FormData,
        }
        console.log(LogData);
        let MainResult 
        if (EndPoint && Route && Method) {
            // Fetch With Token
            if (Token && TokenName === null) {

                if (EndPoint && Route && Method === "GET" && Token) {
                    console.log("GET / Token");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            "Auth-Token": Token
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && Body && Token) {
                    console.log("POST / Token");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Auth-Token": Token
                        },
                        body: JSON.stringify(Body),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && FormData && Token) {
                    console.log("POST FORM DATA / Token");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Auth-Token": Token
                        },
                        body: JSON.stringify(Body),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else {
                    console.log("Please fill curent parametrs");
                }
            }
            // Fetch With Out Token = !!! Get From LocalStorage !!!
            else if (Token === null && TokenName !== null) {

                if (EndPoint && Route && Method === "GET") {
                    console.log("GET");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            "Auth-Token": localStorage.getItem(TokenName)
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && Body) {
                    console.log("POST");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Auth-Token": localStorage.getItem(TokenName)
                        },
                        body: JSON.stringify(Body),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && FormData) {
                    console.log("POST FORM DATA ");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Auth-Token": localStorage.getItem(TokenName)
                        },
                        body: JSON.stringify(FormData),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else {
                    console.log("Please fill curent parametrs");
                }

            } else if (Token === null && TokenName === null) {

                if (EndPoint && Route && Method === "GET") {
                    console.log("GET");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && Body) {
                    console.log("POST");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(Body),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else if (EndPoint && Route && Method === "POST" && FormData) {
                    console.log("POST FORM DATA ");
                   await fetch(`${EndPoint}${Route}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(FormData),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                             MainResult = data
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                } else {
                    console.log("Please fill curent parametrs");
                }
            }
            else {
                console.log("Please fill curent parametrs");
            }

        } else {
            console.log("Please fill curent parametrs");
        }
        
        return MainResult
    }

    
    // Help !
    // Fetch types :
    // - GET => With / without Token & TokenName 
    // --------------------------------------------------------------------
    // - POST => Send Body & formData |  With / without Token & TokenName 
    // 
    // !!! According to the type of request Fill in the required parameters | And leave the parameters you don't need << null >> !!!
    // 
    // Sample Control Parametrs Config :
    // =====================================================================================================================
    // let EndPoint = null , Route = null , Body = null , Method = null , Token = null , TokenName = null , FormData = null ;
    // =====================================================================================================================

