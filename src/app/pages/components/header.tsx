export default function Header() {

    const data = new Date()
    const hora = data.getHours()

    return (
        <div className='w-full h-[420px] bg-zinc-900 bg-hero bg-cover bg-center'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <img
                    src="/assets/hamb-1.png"
                    className='rounded-full shadow-lg hover:scale-110 
                            duration-500 h-[170px] w-[170px] cursor-pointer max-md:h-[110px] max-md:w-[110px]'
                    alt="Logo do Estabelecimento"
                />

                <div className="flex flex-col gap-5 items-center justify-center">
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className='text-5xl font-extralight mt-4 mb-2 text-slate-50 
                                max-md:text-2xl'
                        >
                            Hamburgueria & Cia.
                        </h1>

                        <p className='text-slate-200 font-extralight text-sm'>
                            Rua David Teixeira, Vitoria - ES
                        </p>
                    </div>

                    <div>
                        {hora >= 18 && hora < 22 ? (
                            <div className='bg-green-800 rounded-lg py-1 px-4 mt-4'>
                                <span className='text-slate-50 font-medium'>
                                    Seg a Dom - 18:00 as 22:00
                                </span>
                            </div>
                        ) : (
                            <div className='bg-red-800 rounded-lg py-1 px-4 mt-4'>
                                <span className='text-slate-50 font-medium'>
                                    Seg a Dom - 18:00 as 22:00
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}