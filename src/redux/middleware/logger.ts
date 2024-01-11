const CustomLogger = (state) => (next) => (action) => {
    console.log("current state ==> ", state.getState())
    next(action)
}

export default CustomLogger