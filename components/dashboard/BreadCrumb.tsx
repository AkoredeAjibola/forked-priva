import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { ReactNode } from 'react';

type BreadcrumbProps = {
    page: string;
};

export default function Breadcrumb({
    page = 'Compliance',
}: BreadcrumbProps): ReactNode {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center gap-0 text-xs">
                <li>
                    <Link href="#" className="text-gray-400 hover:text-gray-500">
                        Home
                    </Link>
                </li>
                <li>
                    <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </li>
                <li>
                    <Link
                        href="/dashboard/compliance"
                        className="ml-0 text-xs font-medium text-gray-500 hover:text-gray-700"
                        aria-current={true}
                    >
                        {page}
                    </Link>
                </li>
            </ol>
        </nav>
    );
}
