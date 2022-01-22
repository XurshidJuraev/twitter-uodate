import React from 'react'


const Context = React.createContext()



function Provider ({ children }) {
    const [state, setState] = React.useState('light')

    return <Context.Provider value={{ state, setState }}>
        {children}
    </Context.Provider>
}


export {
    Context,
    Provider
}