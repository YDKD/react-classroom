import { AnyAction, Reducer } from '@reduxjs/toolkit'

/**
 * store state type
 */
interface IStote {
  home: Reducer<
    {
      name: string
    },
    AnyAction
  >
}

export default IStote
