import { useState } from 'react'
import { Link } from 'react-router-dom/dist'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { Switch } from '@material-tailwind/react'
import logo1 from "../assets/logos/logo1.png"
import { Gb } from "react-flags-select";
import { Es } from "react-flags-select";




export default function Navbar({ isSpanish, toggleLanguage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 animate-fade-right" aria-label="Global">
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
                <Popover.Group className="hidden lg:flex lg:gap-x-12 mr-10">

                    <Link to="/tomates" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'Tomates' : 'Tomatoes'}
                    </Link>
                    <Link to="/cherrys" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'Cherrys' : 'Cherries'}

                    </Link>
                    <Link to="/minivegetales" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'Minivegetales' : 'Mini Vegetables'}

                    </Link>
                    <Link to="/tradicionales" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'Tradicionales' : 'Traditionals'}

                    </Link>
                    <Link to="/tropicales" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'Tropicales' : 'Tropical Fruits'}

                    </Link>
                    <Link to="/VGama" className="text-sm font-semibold leading-6 text-gray-900">
                        {isSpanish ? 'V Gama' : 'V Range'}

                    </Link>

                </Popover.Group>
                <Switch
    color='red'
    checked={isSpanish}
    label={
        isSpanish ? 
        <span style={{ fontSize: '35px' }}><Es/></span> : 
        <span style={{ fontSize: '35px' }}><Gb/></span>
    }
    onChange={toggleLanguage}
/>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="-m-1.5 p-1.5">
                            <span className="sr-only">Granada La Palma SCA</span>
                            <img
                                className="h-8 w-auto"
                                src={logo1}
                                alt=""
                            />
                        </div>

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
                                    onClick={() => setMobileMenuOpen(false)}

                                >
                                    {isSpanish ? 'Tomates' : 'Tomatoes'}

                                </Link>
                                <Link
                                    to="/catalogo/cherrys"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {isSpanish ? 'Cherrys' : 'Cherries'}

                                </Link>
                                <Link
                                    to="/catalogo/minivegetales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {isSpanish ? 'Minivegetales' : 'Mini Vegeteables'}

                                </Link>
                                <Link
                                    to="/catalogo/tradicionales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {isSpanish ? 'Tradicionales' : 'Traditionals'}

                                </Link>
                                <Link
                                    to="/catalogo/tropicales"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}

                                >
                                    {isSpanish ? 'Tropicales' : 'Tropicals'}

                                </Link>
                                <Link
                                    to="/catalogo/VGama"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}

                                >
                                    {isSpanish ? 'V Gama' : 'V Range'}
                                </Link>

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
