export interface RequestState<P> {
    pending: boolean,
    payload: P,
    error: boolean
}