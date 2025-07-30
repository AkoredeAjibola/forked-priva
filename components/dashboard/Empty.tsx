import Button from '@components/Button';
import Image from 'next/image';
import React, { Dispatch, ReactNode, SetStateAction, memo } from 'react';

interface EmptyProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageSrc: any;
    headline: string;
    description: string;
    callToAction: string;
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

function Empty({
    imageSrc,
    headline,
    description,
    callToAction,
    setOpen,
}: EmptyProps): ReactNode {
    return (
        <div className="py-14 flex flex-col gap-2 justify-center items-center border-gray-200 rounded-lg">
            <Image width={280} height={280} src={imageSrc} alt="cteate_job" />

            <section className="text-center">
                <h1 className="text-4xl font-semibold">{headline}</h1>
                <p className="text-xl my-1">{description}</p>
            </section>

            <Button
                type="button"
                onSubmitHandler={() => {
                    if (setOpen) {
                        setOpen(true);
                    }
                }}
                className="border border-black py-4 px-6 rounded-md my-4 bg-primary-100 text-secondary-100"
            >
                {callToAction}
            </Button>
        </div>
    );
}

export default memo(Empty);
