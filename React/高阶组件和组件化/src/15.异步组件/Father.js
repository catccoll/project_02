import React, { PureComponent } from 'react'
const Son=React.lazy(()=>import('./Son.js'))
export default class Father extends PureComponent {
    render() {
        return (
            <div>
                <h1>Father</h1>

                <React.Suspense fallback={<div>loading</div>} >
                <Son/>
                </React.Suspense>
            </div>
        )
    }
}
