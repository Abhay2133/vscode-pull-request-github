/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React from 'react';

export interface DiffStatProps {
	additions?: number;
	deletions?: number;
	className?: string;
}

export function DiffStat({ additions, deletions, className }: DiffStatProps): JSX.Element | null {
	if (additions === undefined && deletions === undefined) {
		return null;
	}

	const hasAdditions = additions !== undefined && additions > 0;
	const hasDeletions = deletions !== undefined && deletions > 0;

	if (!hasAdditions && !hasDeletions) {
		return null;
	}

	const title = `+${(additions ?? 0).toLocaleString()} additions, -${(deletions ?? 0).toLocaleString()} deletions`;
	const classes = className ? `diffstat-summary ${className}` : 'diffstat-summary';

	return (
		<span className={classes} title={title}>
			{hasAdditions && <span className="diffstat-additions">+{additions!.toLocaleString()}</span>}
			{hasDeletions && <span className="diffstat-deletions">-{deletions!.toLocaleString()}</span>}
		</span>
	);
}
