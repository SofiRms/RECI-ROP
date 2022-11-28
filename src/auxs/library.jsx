export const diccionario={
    getUser: async()=>{
        try{
            const req= await fetch ('http://localhost:4024/user')
            const response= await req.json()
            return(response)
        }catch(error){
            console.log(error);
            return{msg: 'error :' +error}
        }
    },

    // loginUser: async()=>{
    //     try{
    //         const req= await fetch ('http://localhost:4024/login',{
    //             method:'POST',
    //             body:
    //         })
    //         const response= await req.json()
    //         return(response)
    //     }catch(error){
    //         console.log(error);
    //         return{msg: 'error :' +error}
    //     }
    // },


       
    createUser: async(username,email,password)=>{
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": username,
      "email": email,
      "password":password
    });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try {
    console.log(raw)
   // const res = await fetch("http://localhost:4024/user", requestOptions)
    const resjson = await res.json();
    return resjson;
 } catch (error) {
    console.log(error)
    
        //Se obtienen los datos enviados por metodo POST
    //    const {username, email, password} = req.body;
    
        //Encriptacion de la contraseña
        //const newPassword= bcrypt.hashSync(passwordRecibida, 10);
    
//         //Instancia un nuevo documento de mongoDB para luego ser guardado
//         const newuser = new user ({
//             username,
//             email,
//             password
//         });
//         const user = await newuser.save();
//         return res.json({
//             msg: 'Usuario creado',
//             user
//         });
// }



}}}
