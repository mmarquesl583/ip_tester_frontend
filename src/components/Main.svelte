<script>
    import { TestarIP } from "../api";
    let ips
    let loading = "Esperando"
    let fetch = false

    async function api(){
        let ramal = parseInt(document.getElementById("ramal").value)
        let type =  parseInt(document.getElementById("type").value)
        fetch = false
        loading = "Carregando"
        ips = await TestarIP(ramal, type)
        console.log(ips)
        loading = "Pronto"
        fetch = true
    }
</script>

<div class="main w-3/4 h-auto">
    <div class="header border border-black rounded-t-lg w-full flex items-center justify-center font-bold text-2xl p-2">
        IP TESTER
    </div>
    <div class="content border border-black rounded-b-lg w-full">
        <div class="questions flex justify-around h-auto p-2">
            <div class="ramal">
                <span>Ramal:</span>
                <input id="ramal" value="0" type="number" class="w-14 h-10 border border-black rounded-xl text-lg text-center">
            </div>
            <div class="search ml-6 flex items-center">
                <span>Tipo:</span>
                <select id="type">
                    <option value="1">Internet</option>
                    <option value="2">Voz</option>
                    <option value="3">Imagem</option>
                    <option value="4">JFL's</option>
                    <option value="5">Dispositivos</option>
                </select>
            </div>
            <div class="submit flex items-center">
                <button on:click={api} class="bg-blue-500 hover:bg-blue-600 text-white w-20 h-full rounded-xl font-bold" id="btn_ping">PING</button>
            </div>
        </div>
        <div class="table grid items-center">
            {#if fetch}
                {#each ips as ip, index}
                    {#if index === ips.length - 1}
                        {#if ip[1] == true}
                            <span class="bg-green-500 hover:bg-green-400 w-full text-xl p-2 text-center rounded-b-lg">
                                {ip[0]}
                            </span>
                        {:else}
                            <span class="bg-red-500 hover:bg-red-400 w-full text-xl p-2 text-center rounded-b-lg">
                                {ip[0]}
                            </span>
                        {/if}
                        {:else}
                        {#if ip[1] == true}
                            <span class="bg-green-500 hover:bg-green-400 w-full text-xl p-2 text-center">
                                {ip[0]}
                            </span>
                            {:else}
                            <span class="bg-red-500 hover:bg-red-400 w-full text-xl p-2 text-center">
                                {ip[0]}
                            </span>
                        {/if}
                    {/if}
                {/each}
                {:else}
                <span class="bg-gray-200 w-full text-xl p-2 text-center rounded-b-lg">
                    {#if loading == "Carregando"}
                        <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                    {:else}
                        {loading}
                    {/if}
                </span>
            {/if}
        </div>
    </div>
</div>

<style>
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    .main{
        max-width: 800px;
    }

</style>