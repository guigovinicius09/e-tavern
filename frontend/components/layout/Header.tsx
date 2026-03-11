export default function Header() {
  return (
    <div className="bg-tavern text-soft-cream flex flex-col items-center p-4 gap-4 md:flex-row md:justify-between md:px-8">
      <div className="font-bold text-4xl text-hop">eTavern</div>

      <nav>
        <ul className="flex flex-col gap-2 items-center md:flex-row md:gap-3 text-lg md:text-xl">
          <li className="py-2  px-10 md:p-3 border-2 rounded-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-hop w-full text-center md:w-auto">
            <a href="/" className="block">
              Início
            </a>
          </li>
          <li className="py-2 px-10 md:p-3 border-2 rounded-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-hop w-full text-center md:w-auto">
            <a href="/sobre" className="block">
              Cervejas
            </a>
          </li>
          <li className="py-2 px-10 md:p-3 border-2 rounded-2xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-hop w-full text-center md:w-auto">
            <a href="/sobre" className="block">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
