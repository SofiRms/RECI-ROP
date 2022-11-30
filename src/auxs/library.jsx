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
    createUser: async(username,email,password)=>{
        if(!username || !email || !password){
            return { error: 'Todos los datos son necesarios'}
        }
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
       username,
       email,
      password
    });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try {

    console.log(raw)

   const res = await fetch("http://localhost:4024/user", requestOptions)
    const resjson = await res.json();
    return resjson;
 } catch (error) {
    console.log()
    
    
 }},
    iniciarSesion: async(email,password) => {
        if(!email || !password){
            return { error: 'Todos los datos son necesarios'}
        }
    //const {email, password} = req.body;

    try{
        //Busca si el email existe
        const user = await user.findOne({email});
       
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticar usuario' 
            });
        }
        if (!user.isActive){
            return res.status(400).json({
                ok: false,
                msg: 'Error: usuario inactivo'
            });
        }
   //verificar password
   //const validPassword= bcrypt.compareSync(password, user.password);

   if (!password) {
       return res.status(400).json({
           ok: false,
           msg: 'Error al autenticarse'
       })
   }
   const res = await fetch("http://localhost:4024/login", requestOptions)
   const resjson = await res.json();
   console.log('logged')
   return resjson;
//    const token = await generarJWT({uid:user._id})
//    res.json(token)
}catch(error){
    console.log(error);
    return{msg: 'error :' +error}
}},
}

