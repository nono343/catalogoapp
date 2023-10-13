import { useState } from 'react'
import { Link } from 'react-router-dom/dist'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import logo1 from "../assets/logos/logo1.png"


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Granada La Palma SCA</span>
                        <img className="h-8 w-auto" src={logo1} alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Link to="/catalogo/tomates" className="text-sm font-semibold leading-6 text-gray-900">
                        Tomates
                    </Link>
                    <Link to="/catalogo/cherrys" className="text-sm font-semibold leading-6 text-gray-900">
                        Cherrys
                    </Link>
                    <Link to="/catalogo/minivegetales" className="text-sm font-semibold leading-6 text-gray-900">
                        Minivegetales
                    </Link>
                    <Link to="/catalogo/tradicionales" href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Verdura tradicional
                    </Link>
                    <Link to="/catalogo/tropicales" className="text-sm font-semibold leading-6 text-gray-900">
                        Tropicales
                    </Link>
                    <Link to="/catalogo/VGama" href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        V Gama
                    </Link>

                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Granada La Palma SCA</span>
                            <img
                                className="h-8 w-auto"
                                src={logo1}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/catalogo/tomates"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    Tomates
                                </Link>
                                <Link
                                    to="/catalogo/cherrys"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    Cherrys
                                </Link>
                                <Link
                                    to="/catalogo/minivegetales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    Minivegetales
                                </Link>
                                <Link
                                    to="/catalogo/tradicionales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    Tradicionales
                                </Link>
                                <Link
                                    to="/catalogo/tropicales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    Tropicales
                                </Link>
                                <Link
                                    to="/catalogo/VGama"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)} // Agrega este onClick

                                >
                                    V Gama
                                </Link>

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
