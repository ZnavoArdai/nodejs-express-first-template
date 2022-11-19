

 export const getData = async() => {

    const respo=await fetch("http://localhost:8080/travel");
    return respo.json()

}


getData.then(res=>console.log(res))