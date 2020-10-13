

export default function assert (precondition, errormessage) {
    if(!precondition) {
        throw Error(errormessage)
    }
}