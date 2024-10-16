import { FC, memo, ReactNode } from 'react';
import { clx } from 'Utils';
import { Icon } from 'Components';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface Props {
	children?: ReactNode;
	message?: string;
}

export const SystemErrorAlert: FC<Props> = memo(
	({ children, message }) => {
		return (
			<div
				className='text-center flex justify-center items-center flex-col gap-3'>
				<Icon
					iconName={faTriangleExclamation}
					size="4x"
					className="text-red"
				/>
				<h5 className="text-base mb-0 text-gray-500">
					{message}
				</h5>
				{ children }
			</div >
		);
	}
);

