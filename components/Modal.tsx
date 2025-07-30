import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import React, { Dispatch, Fragment, SetStateAction, useRef } from 'react';

interface ModalPropTypes {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}
function Modal({ open, setOpen, children }: ModalPropTypes): React.ReactNode {
    const cancelButtonRef = useRef(null);

    return (
        <section>
            <Transition show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-[100000] inset-0 overflow-y-auto"
                    open={open}
                    initialFocus={cancelButtonRef}
                    onClose={() => {
                        setOpen(false);
                    }}
                >
                    <div className="flex font-sans items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <TransitionChild
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            {/* <DialogBackdrop className="fixed inset-0  bg-opacity-100 backdrop-blur-sm transition-opacity" /> */}
                        </TransitionChild>

                        <DialogPanel
                            as="div"
                            className="h-screen w-full flex flex-row justify-center items-center"
                        >
                            <TransitionChild
                                as="div"
                                enter=""
                                enterFrom=""
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                {children}
                            </TransitionChild>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </section>
    );
}

export default Modal;
