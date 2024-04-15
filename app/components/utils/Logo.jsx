import React from 'react';
import Picture from './Picture';

export default function Logo({ width, height }) {
    return (
        <div>
            <Picture
                url={"/home/logo.png"}
                alt={"Logo"}
                style={'aspect-square w-full rounded object-contain'}
                width={width}
                height={height}
            />
        </div>
    );
}
