export async function TestarIP(numero, tipoTeste) {
    try {
        const response = await fetch("http://localhost:3000/api/testarIP", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ numero, tipoTeste }),
        });

        if (!response.ok) {
            throw new Error("Resposta de rede não foi bem-sucedida.");
        }

        const pings = await response.json();
        return pings;
    } catch (error) {
        console.error("Erro no fetch:", error);
        throw error;
    }
}
