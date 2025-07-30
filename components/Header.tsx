import {
    ArrowUturnLeftIcon,
    Bars3Icon,
    BellIcon,
    GiftIcon,
    QuestionMarkCircleIcon,
    UserIcon,
} from '@heroicons/react/16/solid';
import React, {
    Dispatch,
    Fragment,
    ReactNode,
    SetStateAction,
    memo,
} from 'react';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { userNavigation } from '@data/data';
import { classNames } from '@utils/helper';
import Button from '@components/Button';
import Search from '@components/dashboard/Search';

interface HeaderProps {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
function Header({ setSidebarOpen }: HeaderProps): ReactNode {
    return (
        <>
            <div className="sticky top-0 z-10 py-2 flex-shrink-0 flex h-16 bg-white shadow md:shadow-none">
                <button
                    type="button"
                    className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 flex justify-between gap-4">
                    <div className="flex-1 flex ">
                        <Search />
                    </div>

                    <section className="xl:flex xl:flex-row gap-4 hidden">
                        <Button
                            type="button"
                            className="border border-gray-300 py-2 px-4 text-xs shadow-md rounded-md bg-secondary-200 hover:bg-secondary-300"
                        >
                            Watch demo
                        </Button>

                        <Button
                            type="button"
                            className="bg-primary-100 text-secondary-100 px-4 rounded-md"
                        >
                            <ArrowUturnLeftIcon className="w-4" />
                        </Button>
                        <Button
                            type="button"
                            className="border border-gray-300 py-2 px-4 text-xs shadow-md rounded-md bg-secondary-200 hover:bg-secondary-300"
                        >
                            Upgrade account
                        </Button>
                    </section>
                    <div className="ml-4 border shadow-md rounded-md flex items-center justify-center p-2 gap-6 md:ml-6">
                        <Button
                            type="button"
                            className="bg-white p-1 rounded-full hidden md:inline text-primary-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <QuestionMarkCircleIcon
                                className="h-6 w-6 text-primary-300"
                                aria-hidden="true"
                            />
                        </Button>

                        <Button
                            type="button"
                            className="bg-white p-1 rounded-full hidden md:inline text-primary-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <GiftIcon
                                className="h-6 w-6 text-primary-300"
                                aria-hidden="true"
                            />
                        </Button>

                        <Button
                            type="button"
                            className="bg-white p-1 rounded-full hidden md:inline text-primary-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon
                                className="h-6 w-6 text-primary-300"
                                aria-hidden="true"
                            />
                        </Button>

                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <UserIcon className="w-8 rounded-full text-primary-300" />
                                </MenuButton>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            {({ active }) => (
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Header);
