import getModels from "./llamadas/llamadas"
import Image from "next/image"

const UsageTop = async() => {
    const modelos = await getModels()
    return (
        <div className="flex flex-wrap">
            {modelos.map((modelo) => (
                <div key={modelo.id}>
                    <Image src={modelo.src} width={500} height={500} alt="fotin" />
                </div>
            ))}
        </div>
    )
}

export default UsageTop