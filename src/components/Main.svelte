<script>
    import { TestarIP } from "../api";
    let ips
    let loading = "Esperando"
    let fetch = false
    let show_offline = true

    async function api(){
        let ramal = parseInt(document.getElementById("ramal").value)
        let type =  parseInt(document.getElementById("type").value)
        fetch = false
        loading = "Carregando"
        ips = await TestarIP(ramal, type)
        console.log(ips)
        loading = "Pronto"
        fetch = true
        let checkbox = document.getElementById("ip_show").checked
        console.log(checkbox)
    }

    function setIpShow(){
        show_offline = !show_offline
    }
</script>

<div class="main w-3/4 h-auto">
    <div class="header border border-black rounded-t-lg w-full flex items-center justify-center font-bold text-2xl p-2">
        IP TESTER
    </div>
    <div class="content border border-black rounded-b-lg w-full">
        <div class="questions flex justify-around h-auto p-2">
            <div class="ramal">
                <span>Cond:</span>
                <select dir="ltr" id="ramal">
                    <option value="27">Acácia</option>
                    <option value="56">Albatroz</option>
                    <option value="120">Alfredo Abreu</option>
                    <option value="103">Alice Neffa</option>
                    <option value="36">Arabica</option>
                    <option value="49">Capitania</option>
                    <option value="62">Caravellas</option>
                    <option value="77">Carol Wojtyla</option>
                    <option value="32">Cavalcante</option>
                    <option value="205">Costa Dourada</option>
                    <option value="83">Debret</option>
                    <option value="112">Dom Pedro II</option>
                    <option value="18">Espelho Dagua</option>
                    <option value="54">François de Paule</option>
                    <option value="10">Green Hill</option>
                    <option value="64">Henrique Zacarias</option>
                    <option value="02">Ilhas de Roccas</option>
                    <option value="85">Junieh</option>
                    <option value="13">Lubianka</option>
                    <option value="17">Maison Suisse</option>
                    <option value="72">Malibu</option>
                    <option value="42">Mar Cáspio</option>
                    <option value="53">Maria Medina</option>
                    <option value="23">Mariner Center</option>
                    <option value="41">Maryland</option>
                    <option value="45">Milord</option>
                    <option value="15">Moinho dos Ventos</option>
                    <option value="80">Ocean Reef</option>
                    <option value="37">Pallas Center</option>
                    <option value="119">Pedra Azul</option>
                    <option value="22">Ponta Negra</option>
                    <option value="25">Port Deauville</option>
                    <option value="55">Porto Praia</option>
                    <option value="24">Portugal</option>
                    <option value="74">Rainha Guilhermina</option>
                    <option value="59">Rs Trade</option>
                    <option value="39">Rural Bank</option>
                    <option value="158">Solar Dos Bem Te Vis</option>
                    <option value="86">Tambaú</option>
                    <option value="93">Tropical Garden</option>
                    <option value="75">Vila da Praia</option>
                    <option value="20">Villa Lobos</option>
                    <option value="40">Village Santa Inês</option>
                    <option value="106">Vogue Enseada</option>
                </select>
            </div>
            <div class="search ml-6 flex items-center">
                <span>Tipo:</span>
                <select id="type">
                    <option value="1">Internet</option>
                    <option value="2">Voz</option>
                    <option value="3">Imagem</option>
                    <option value="4">JFL's</option>
                    <option value="5">Dispositivos</option>
                    <option value="0">C. Acesso</option>
                </select>
            </div>
            <div class="ip_show ml-6 flex items-center">
                <input on:change={setIpShow} id="ip_show" type="checkbox" class="mr-1" checked>
                <span>Mostrar ip's offline</span>
            </div>
            <div class="submit flex items-center">
                <button on:click={api} class="bg-blue-500 hover:bg-blue-600 text-white w-20 h-full rounded-lg font-bold" id="btn_ping">PING</button>
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
                            {#if show_offline}
                                <span class="bg-red-500 hover:bg-red-400 w-full text-xl p-2 text-center rounded-b-lg">
                                    {ip[0]}
                                </span>
                            {/if}
                        {/if}
                        {:else}
                        {#if ip[1] == true}
                            <span class="bg-green-500 hover:bg-green-400 w-full text-xl p-2 text-center">
                                {ip[0]}
                            </span>
                            {:else}
                            {#if show_offline}
                                <span class="bg-red-500 hover:bg-red-400 w-full text-xl p-2 text-center">
                                    {ip[0]}
                                </span>
                            {/if}
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

    .table {
        max-height: 50vmin;
        overflow-y: auto;
    }
</style>