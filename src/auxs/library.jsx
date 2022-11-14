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
    }


}