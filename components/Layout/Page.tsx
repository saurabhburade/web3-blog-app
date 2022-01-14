import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Page({children}: Props): ReactElement {
    return <div className="px-10">{children}</div>;
}
