import React from 'react'

export default function Layout() {
    return (
        <div>
            <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">MeuApp</div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="hover:text-gray-300">Início</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
