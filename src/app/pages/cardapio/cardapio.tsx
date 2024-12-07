import { CirclePlus, ShoppingCart, TrashIcon } from "lucide-react";
import { useState } from "react";
import Header from "../components/header";
import Swal from 'sweetalert2';

interface ModalCartProps {
    isOpen: boolean;
    setOpenModalCart: (isOpen: boolean) => void
}

export default function Cardapio() {

    const data = new Date()
    const hora = data.getHours()

    const [openModalCart, setOpenModalCart] = useState<boolean>(false)

    const [contador, setContador] = useState(0)

    const [contadorLanche1, setContadorLanche1] = useState(0)
    const [contadorLanche2, setContadorLanche2] = useState(0)
    const [contadorLanche3, setContadorLanche3] = useState(0)
    const [contadorLanche4, setContadorLanche4] = useState(0)

    const [lancheValor, setLancheValor] = useState(0)

    const [lancheValor1, setLancheValor1] = useState(0)
    const [lancheValor2, setLancheValor2] = useState(0)
    const [lancheValor3, setLancheValor3] = useState(0)
    const [lancheValor4, setLancheValor4] = useState(0)

    const [bebidaValor, setBebidaValor] = useState(0)

    const [bebidaValor1, setBebidaValor1] = useState(0)
    const [bebidaValor2, setBebidaValor2] = useState(0)
    const [bebidaValor3, setBebidaValor3] = useState(0)
    const [bebidaValor4, setBebidaValor4] = useState(0)

    const [nomeLanche1, setNomeLanche1] = useState('')
    const [nomeLanche2, setNomeLanche2] = useState('')
    const [nomeLanche3, setNomeLanche3] = useState('')
    const [nomeLanche4, setNomeLanche4] = useState('')

    const [nomeBebida1, setNomeBebida1] = useState('')
    const [nomeBebida2, setNomeBebida2] = useState('')
    const [nomeBebida3, setNomeBebida3] = useState('')
    const [nomeBebida4, setNomeBebida4] = useState('')

    const [contadorBebida1, setContadorBebida1] = useState(0)
    const [contadorBebida2, setContadorBebida2] = useState(0)
    const [contadorBebida3, setContadorBebida3] = useState(0)
    const [contadorBebida4, setContadorBebida4] = useState(0)

    function adicionarContadorLanche1() {
        setContador(contador + 1)
        setLancheValor(lancheValor + 35)
        setNomeLanche1('Hamburguer Smash')
        setContadorLanche1(contadorLanche1 + 1)
        setLancheValor1(lancheValor1 + 35)
    }

    function adicionarContadorLanche2() {
        setContador(contador + 1)
        setLancheValor(lancheValor + 45)
        setNomeLanche2('Hamburguer Duplo')
        setContadorLanche2(contadorLanche2 + 1)
        setLancheValor2(lancheValor2 + 45)
    }

    function adicionarContadorLanche3() {
        setContador(contador + 1)
        setLancheValor(lancheValor + 30)
        setNomeLanche3('Hamburguer Bacon Extra')
        setContadorLanche3(contadorLanche3 + 1)
        setLancheValor3(lancheValor3 + 30)
    }

    function adicionarContadorLanche4() {
        setContador(contador + 1)
        setLancheValor(lancheValor + 25)
        setNomeLanche4('Hamburguer Salada')
        setContadorLanche4(contadorLanche4 + 1)
        setLancheValor4(lancheValor4 + 25)
    }

    function adicionarContadorBebida1() {
        setContador(contador + 1)
        setBebidaValor(bebidaValor + 10)
        setNomeBebida1('Coca-Cola Lata')
        setContadorBebida1(contadorBebida1 + 1)
        setBebidaValor1(bebidaValor1 + 10)
    }

    function adicionarContadorBebida2() {
        setContador(contador + 1)
        setBebidaValor(bebidaValor + 10)
        setNomeBebida2('Guaraná Lata')
        setContadorBebida2(contadorBebida2 + 1)
        setBebidaValor2(bebidaValor2 + 10)
    }

    function adicionarContadorBebida3() {
        setContador(contador + 1)
        setBebidaValor(bebidaValor + 10)
        setNomeBebida3('Suco de Uva')
        setContadorBebida3(contadorBebida3 + 1)
        setBebidaValor3(bebidaValor3 + 10)
    }

    function adicionarContadorBebida4() {
        setContador(contador + 1)
        setBebidaValor(bebidaValor + 10)
        setNomeBebida4('Suco de Pessêgo')
        setContadorBebida4(contadorBebida4 + 1)
        setBebidaValor4(bebidaValor4 + 10)
    }

    function deletarLanche1() {
        setContador(contador - 1)
        setLancheValor(lancheValor - 35)
        setNomeLanche1('')
        setContadorLanche1(contadorLanche1 - 1)
        setLancheValor1(lancheValor1 - 35)
    }
    function deletarLanche2() {
        setContador(contador - 1)
        setLancheValor(lancheValor - 45)
        setNomeLanche2('')
        setContadorLanche2(contadorLanche2 - 1)
        setLancheValor2(lancheValor2 - 45)
    }
    function deletarLanche3() {
        setContador(contador - 1)
        setLancheValor(lancheValor - 30)
        setNomeLanche3('')
        setContadorLanche3(contadorLanche3 - 1)
        setLancheValor3(lancheValor3 - 30)
    }
    function deletarLanche4() {
        setContador(contador - 1)
        setLancheValor(lancheValor - 25)
        setNomeLanche4('')
        setContadorLanche4(contadorLanche4 - 1)
        setLancheValor4(lancheValor4 - 25)
    }

    function deletarBebida1() {
        setContador(contador - 1)
        setBebidaValor(bebidaValor - 10)
        setNomeBebida1('Coca-Cola Lata')
        setContadorBebida1(contadorBebida1 - 1)
        setBebidaValor1(bebidaValor1 - 10)
    }
    function deletarBebida2() {
        setContador(contador - 1)
        setBebidaValor(bebidaValor - 10)
        setNomeBebida2('Coca-Cola Lata')
        setContadorBebida2(contadorBebida2 - 1)
        setBebidaValor2(bebidaValor2 - 10)
    }
    function deletarBebida3() {
        setContador(contador - 1)
        setBebidaValor(bebidaValor - 10)
        setNomeBebida3('Coca-Cola Lata')
        setContadorBebida3(contadorBebida3 - 1)
        setBebidaValor3(bebidaValor3 - 10)
    }
    function deletarBebida4() {
        setContador(contador - 1)
        setBebidaValor(bebidaValor - 10)
        setNomeBebida4('Coca-Cola Lata')
        setContadorBebida4(contadorBebida4 - 1)
        setBebidaValor4(bebidaValor4 - 10)
    }

    function ModalCart({ isOpen, setOpenModalCart }: ModalCartProps) {
        const [cidade, setCidade] = useState('')
        const [bairro, setBairro] = useState('')
        const [rua, setRua] = useState('')

        function finalizarPedido() {
            if (contador < 1) {
                Swal.fire(
                    {
                        text: 'Escolha uma opção para fazer o pedido!',
                        icon: 'question',
                        title: 'O carrinho está vazio. '
                    }
                )
            } else {
                if (cidade.length === 0) {
                    Swal.fire(
                        {
                            text: 'Preencha todos os campos de endereço para finalizar o pedido!',
                            icon: 'warning',
                            title: 'Endereço incompleto.'
                        }
                    )
                } else {
                    if (bairro.length === 0) {
                        Swal.fire(
                            {
                                text: 'Preencha todos os campos de endereço para finalizar o pedido!',
                                icon: 'warning',
                                title: 'Endereço incompleto.'
                            }
                        )
                    } else {
                        if (rua.length === 0) {
                            Swal.fire(
                                {
                                    text: 'Preencha todos os campos de endereço para finalizar o pedido!',
                                    icon: 'warning',
                                    title: 'Endereço incompleto.'
                                }
                            )
                        } else {
                            if (hora < 18) {
                                Swal.fire(
                                    {
                                        text: 'Ainda é cedo, mas logo iremos abrir!',
                                        icon: 'error',
                                        title: 'Estamos fechados.'
                                    }
                                )
                            } else {
                                if (hora > 22) {
                                    Swal.fire(
                                        {
                                            text: 'Nosso expediente já acabou, mas voltamos amanhã!',
                                            icon: 'error',
                                            title: 'Estamos fechados.'
                                        }
                                    )
                                } else {
                                    Swal.fire(
                                        {
                                            text: 'O seu pedido foi enviado com sucesso!',
                                            icon: 'success',
                                            title: 'Pedido a caminho'
                                        }
                                    )

                                    const cartItems = [
                                        'Lanches: |',
                                        `| R$ ${lancheValor1},00 : ${contadorLanche1}x ${nomeLanche1} |`,
                                        `| R$ ${lancheValor2},00 : ${contadorLanche2}x ${nomeLanche2} |`,
                                        `| R$ ${lancheValor3},00 : ${contadorLanche3}x ${nomeLanche3} |`,
                                        `| R$ ${lancheValor4},00 : ${contadorLanche4}x ${nomeLanche4} |`,

                                        'Bebidas:',
                                        `| R$ ${bebidaValor1},00 : ${contadorBebida1}x ${nomeBebida1} |`,
                                        `| R$ ${bebidaValor2},00 : ${contadorBebida2}x ${nomeBebida2} |`,
                                        `| R$ ${bebidaValor3},00 : ${contadorBebida3}x ${nomeBebida3} |`,
                                        `| R$ ${bebidaValor4},00 : ${contadorBebida4}x ${nomeBebida4} |`,

                                        `| Endereço: ${cidade} - ${bairro} - ${rua} | Total: ${lancheValor + bebidaValor}`,
                                    ].join("")

                                    const message = encodeURIComponent(cartItems)
                                    const phone = ""

                                    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
                                }
                            }
                        }
                    }
                }
                setCidade('')
                setBairro('')
                setRua('')
                setContador(0)
                setLancheValor(0)
                setNomeLanche1('')
                setContadorLanche1(0)
                setLancheValor1(0)
                setNomeLanche2('')
                setContadorLanche2(0)
                setLancheValor2(0)
                setNomeLanche3('')
                setContadorLanche3(0)
                setLancheValor3(0)
                setNomeLanche4('')
                setContadorLanche4(0)
                setLancheValor4(0)
                setNomeBebida1('')
                setBebidaValor(0)
                setContadorBebida1(0)
                setBebidaValor1(0)
                setNomeBebida2('')
                setContadorBebida2(0)
                setBebidaValor2(0)
                setNomeBebida3('')
                setContadorBebida3(0)
                setBebidaValor3(0)
                setNomeBebida4('')
                setContadorBebida4(0)
                setBebidaValor4(0)
            }
        }

        if (isOpen) {
            return (
                <div className="bg-zinc-950/50 w-full h-full fixed top-0 left-0 z-[99] 
                    items-center justify-center flex max-sm:overflow-y-scroll"
                >
                    <div className="bg-slate-50 p-5 rounded-md min-w-[90%] md:min-w-[600px] max-sm:w-[300px] max-sm:overflow-y-scroll">
                        <h2 className="text-center font-bold text-2xl mb-2 max-sm:text-lg">Meu Carrinho</h2>

                        <div id="cart-items" className="flex justify-between mb-2 flex-col"></div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <div>
                                    {contador > 0 ? (
                                        <span className="">
                                            Lanches: R$ {lancheValor},00
                                        </span>
                                    ) : (
                                        null
                                    )}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-2 font-light w-full max-sm:gap-3">
                                        <div>
                                            {contadorLanche1 > 0 ? (
                                                <div className="flex items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                                    <span>R$ {lancheValor1},00 : {contadorLanche1}x {nomeLanche1}</span>

                                                    <button onClick={deletarLanche1}>
                                                        <TrashIcon size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </div>

                                        <div className="mr-5 flex items-center w-full ">
                                            {contadorLanche2 > 0 ? (
                                                <div className="flex justify-between w-full max-sm:text-sm max-sm:gap-2">
                                                    <span>R$ {lancheValor2},00 : {contadorLanche2}x {nomeLanche2}</span>

                                                    <button onClick={deletarLanche2}>
                                                        <TrashIcon size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </div>

                                        <div className="mr-5 flex items-center w-full">
                                            {contadorLanche3 > 0 ? (
                                                <div className="flex items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                                    <span>R$ {lancheValor3},00 : {contadorLanche3}x {nomeLanche3}</span>

                                                    <button onClick={deletarLanche3}>
                                                        <TrashIcon size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </div>

                                        <div className="mr-5 flex items-center w-full">
                                            {contadorLanche4 > 0 ? (
                                                <div className="flex  items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                                    <span>R$ {lancheValor4},00 : {contadorLanche4}x {nomeLanche4}</span>

                                                    <button onClick={deletarLanche4}>
                                                        <TrashIcon size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {contador > 0 ? (
                                        <span className="">
                                            Bebidas: R$ {bebidaValor},00
                                        </span>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 font-light">
                                    {contadorBebida1 > 0 ? (
                                        <div className="flex items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                            <span>R$ {bebidaValor1},00 : {contadorBebida1}x {nomeBebida1}</span>

                                            <button onClick={deletarBebida1}>
                                                <TrashIcon size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        null
                                    )}

                                    {contadorBebida2 > 0 ? (
                                        <div className="flex items-center justify-between w-full max-sm:text-sm  max-sm:gap-2">
                                            <span>R$ {bebidaValor2},00 : {contadorBebida2}x {nomeBebida2}</span>

                                            <button onClick={deletarBebida2}>
                                                <TrashIcon size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        null
                                    )}

                                    {contadorBebida3 > 0 ? (
                                        <div className="flex items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                            <span>R$ {bebidaValor3},00 : {contadorBebida3}x {nomeBebida3}</span>

                                            <button onClick={deletarBebida3}>
                                                <TrashIcon size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        null
                                    )}

                                    {contadorBebida4 > 0 ? (
                                        <div className="flex items-center justify-between w-full max-sm:text-sm max-sm:gap-2">
                                            <span>R$ {bebidaValor4},00 : {contadorBebida4}x {nomeBebida4}</span>

                                            <button onClick={deletarBebida4}>
                                                <TrashIcon size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                </div>

                            </div>

                            <div>
                                {contador > 0 ? (
                                    <p className="font-medium mt-5 mb-2">
                                        Total: R$ {lancheValor + bebidaValor},00
                                    </p>
                                ) : (
                                    <p className="font-medium -mt-10 mb-2">
                                        Total: R$ {lancheValor + bebidaValor},00
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col">
                            <div>
                                <label htmlFor="address">Endereço para entrega: </label>
                            </div>

                            <div className="col-span-2 flex items-center justify-center w-full max-sm:mt-5">
                                <div className="flex flex-col gap-2 max-sm:items-center">
                                    <input
                                        onChange={(e) => setCidade(e.target.value)}
                                        value={cidade}
                                        className="border border-zinc-950 rounded-md py-1 px-2 
                                        focus:bg-slate-100 outline-none w-[350px] max-sm:w-[280px]"
                                        type="text"
                                        id="address"
                                        placeholder="Sua Cidade"
                                        autoComplete="off"
                                        required
                                    />
                                    <input
                                        onChange={(e) => setBairro(e.target.value)}
                                        value={bairro}
                                        className="border border-zinc-950 rounded-md py-1 px-2
                                     focus:bg-slate-100 outline-none w-[350px] max-sm:w-[280px]"
                                        type="text"
                                        id="address"
                                        placeholder="Bairro"
                                        autoComplete="off"
                                        required
                                    />
                                    <input
                                        onChange={(e) => setRua(e.target.value)}
                                        value={rua}
                                        className="border border-zinc-950 rounded-md py-1 px-2
                                     focus:bg-slate-100 outline-none w-[350px] max-sm:w-[280px]"
                                        type="text"
                                        id="address"
                                        placeholder="Sua rua e número da Casa"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <button
                                onClick={() => setOpenModalCart(!isOpen)}
                                className="text-red-700 hover:font-semibold hover:scale-105 duration-500"
                            >
                                Fechar
                            </button>

                            <button
                                onClick={finalizarPedido}
                                id="checkout-btn"
                                className="bg-green-900 text-slate-50 rounded px-2 py-1 
                                hover:text-slate-200 duration-500 hover:scale-105"
                            >
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <></>
        }
    }

    return (
        <div className="h-full">
            <div>
                <Header />
            </div>

            <div className="py-10">
                <h1 className="text-2xl md:text-4xl font-light text-center mt-9 mb-6 
                border-b border-zinc-500/80 pb-5 mx-5"
                >
                    Conheça o nosso cardápio!
                </h1>

                <p className="px-10 pt-10 pb-8 font-extralight text-2xl md:text-3xl text-center md:text-left">
                    Lanches
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 px-5 gap-7 md:gap-10 mb-16'>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-center w-full'>
                        <img
                            src='/assets/hamb-1.png'
                            alt="Imagem do hamburguer"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />

                        <div>
                            <p className='font-bold'>Hamburguer Smash</p>
                            <p className='text-sm mb-1'>
                                Hambúrguer smash com carne crocante, queijo derretido, cebola e molho especial. Sabor único!
                            </p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 35.00</p>

                                <button
                                    className='hover:scale-110 duration-200'
                                    onClick={adicionarContadorLanche1}
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-center w-full'>
                        <img
                            src='/assets/hamb-3.png'
                            alt="Imagem do hamburguer"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />

                        <div>
                            <p className='font-bold'>Hamburguer Duplo-Carne</p>
                            <p className='text-sm mb-1'>
                                Hambúrguer duplo com duas carnes suculentas, queijo derretido, molho especial e pães macios!
                            </p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 45.00</p>

                                <button
                                    className='hover:scale-110 duration-200'
                                    onClick={adicionarContadorLanche2}
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-center w-full'>
                        <img
                            src='/assets/hamb-2.png'
                            alt="Imagem do hamburguer"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />

                        <div>
                            <p className='font-bold'>Hamburguer Extra-Cheddar e Bacon</p>
                            <p className='text-sm mb-1'>
                                Hambúrguer com extra carne, bacon crocante, cheddar cremoso e molho especial. Irresistível!
                            </p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 30.00</p>

                                <button
                                    className='hover:scale-110 duration-200'
                                    onClick={adicionarContadorLanche3}
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-center w-full'>
                        <img
                            src='/assets/hamb-4.png'
                            alt="Imagem do hamburguer"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />

                        <div>
                            <p className='font-bold'>Hamburguer de Salada</p>
                            <p className='text-sm mb-1'>
                                Hambúrguer com extra carne, alface, tomate, cebola roxa e molho especial. Frescor e sabor!
                            </p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 25.00</p>

                                <button
                                    className='hover:scale-110 duration-200'
                                    onClick={adicionarContadorLanche4}
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10">
                <p className="px-10 pb-8 font-extralight text-2xl md:text-3xl text-center md:text-left"
                >
                    Bebidas
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 px-5 gap-7 md:gap-10 mb-16'>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-start w-full'>
                        <img
                            src='/assets/refri-1.png'
                            alt="Imagem da Bebida"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />
                        <div className="w-full">
                            <p className='font-bold'>Coca-Cola Lata</p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 10.00</p>
                                <button
                                    onClick={adicionarContadorBebida1}
                                    className='hover:scale-110 duration-200'
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-start w-full'>
                        <img
                            src='/assets/refri-2.png'
                            alt="Imagem da Bebida"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px]  rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />
                        <div className="w-full">
                            <p className='font-bold'>Guaraná Lata</p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 10.00</p>
                                <button
                                    onClick={adicionarContadorBebida2}
                                    className='hover:scale-110 duration-200'
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-start w-full'>
                        <img
                            src='/assets/suco-1.png'
                            alt="Imagem da Bebida"
                            className="w-[112px] h-[112px] max-sm:h-[90px] max-sm:w-[90px] rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />
                        <div className="w-full">
                            <p className='font-bold'>Suco de Uva</p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 10.00</p>
                                <button
                                    onClick={adicionarContadorBebida3}
                                    className='hover:scale-110 duration-200'
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='group max-sm:flex max-sm:flex-col max-sm:gap-10 bg-cyan-700/80 mx-auto rounded-md p-10 flex gap-5 items-center justify-start w-full'>
                        <img
                            src='/assets/suco-2.png'
                            alt="Imagem da Bebida"
                            className="w-[112px] h-[112px] max-sm:h-[90px] rounded-md group-hover:scale-105 group-hover:rotate-1 duration-500"
                        />
                        <div className="w-full">
                            <p className='font-bold'>Suco de Pessêgo</p>

                            <div className='flex gap-5 mt-4 justify-between'>
                                <p className='text-lg font-semibold'>R$ 10.00</p>
                                <button
                                    onClick={adicionarContadorBebida4}
                                    className='hover:scale-110 duration-200'
                                >
                                    <CirclePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-10 w-full fixed bottom-0 z-40">
                    {hora >= 18 && hora < 22 ? (
                        <div className="bg-green-900  p-4 flex items-center justify-center">
                            <button onClick={() => setOpenModalCart(!openModalCart)} className="flex text-teal-50 font-bold">
                                <p className="mr-4 text-sm">Ver meu carrinho</p>

                                <div className='flex relative'>
                                    <span id="cart-count "
                                        className='absolute -ml-1 -mt-1 rounded-2xl text-zinc-900 bg-slate-50 w-[15px] h-[15px]
                                        text-xs flex items-center justify-center'
                                    >
                                        {contador}
                                    </span>
                                    <ShoppingCart />
                                </div>
                            </button>
                        </div>
                    ) : (
                        <div className="bg-red-900  p-4 flex items-center justify-center">
                            <button onClick={() => setOpenModalCart(!openModalCart)} className="flex text-teal-50 font-bold">
                                <p className="mr-4 text-sm">Ver meu carrinho</p>

                                <div className='flex relative'>
                                    <span id="cart-count "
                                        className='absolute -ml-1 -mt-1 rounded-2xl text-zinc-900 bg-slate-50 w-[15px] h-[15px]
                                text-xs flex items-center justify-center'
                                    >
                                        {contador}
                                    </span>
                                    <ShoppingCart />
                                </div>
                            </button>
                        </div>
                    )}
                </div>

                <ModalCart isOpen={openModalCart} setOpenModalCart={setOpenModalCart} />
            </div>
        </div>
    )
}