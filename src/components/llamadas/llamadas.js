

export default async function getModels(){
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/modelos.json");
        const data = await res.json();
        return data
    }
    catch (error) {
        console.log("esto es un error: ", error);
        
    }
}